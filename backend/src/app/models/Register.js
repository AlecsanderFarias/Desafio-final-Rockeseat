import Sequelize, { Model } from 'sequelize';
import { startOfDay, isBefore } from 'date-fns';

class Register extends Model {
  static init(sequelize) {
    super.init(
      {
        start_date: Sequelize.DATE,
        end_date: Sequelize.DATE,
        price: Sequelize.FLOAT,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  isActive(end_date) {
    const today = startOfDay(new Date());

    if (isBefore(end_date, today)) {
      return false;
    }

    return true;
  }

  static associate(models) {
    this.belongsTo(models.Student, {
      foreignKey: 'student_id',
      as: 'student',
    });
    this.belongsTo(models.Plans, { foreignKey: 'plan_id', as: 'plan' });
  }
}

export default Register;
