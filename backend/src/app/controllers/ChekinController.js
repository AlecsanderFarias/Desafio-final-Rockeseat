import { subDays, startOfToday } from 'date-fns';
import { Op } from 'sequelize';
import Checkin from '../models/Checkins';

class PlanController {
  async index(req, res) {
    const { student_id } = req.params;

    const Checkins = await Checkin.findAll({
      where: {
        student_id,
      },
    });

    return res.status(200).json(Checkins);
  }

  async store(req, res) {
    const { student_id } = req.params;

    const day = subDays(startOfToday(), 7);

    const oldCheckins = await Checkin.findAll({
      where: {
        student_id,
        created_at: {
          [Op.between]: [day, new Date()],
        },
      },
    });

    if (oldCheckins.length >= 5) {
      return res
        .status(401)
        .json({ error: 'Cannot check in more than 5 times a week' });
    }

    await Checkin.create({
      student_id,
    });

    return res.status(200).json({ ok: true });
  }
}

export default new PlanController();
