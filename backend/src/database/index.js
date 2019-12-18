import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import User from '../app/models/User';
import Student from '../app/models/Student';
import Plans from '../app/models/Plans';
import Register from '../app/models/Register';
import Checkin from '../app/models/Checkins';
import Orders from '../app/models/Orders';

const models = [User, Student, Plans, Register, Checkin, Orders];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model =>
        model
          ? model.associate && model.associate(this.connection.models)
          : null
      );
  }
}

export default new Database();
