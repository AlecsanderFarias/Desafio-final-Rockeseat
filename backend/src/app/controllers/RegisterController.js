import * as Yup from 'yup';

import { startOfDay, parseISO, isBefore, addMonths } from 'date-fns';

import Register from '../models/Register';
import Plan from '../models/Plans';

class RegisterController {
  async store(req, res) {
    const schema = Yup.object().shape({
      plan_id: Yup.number().required(),
      student_id: Yup.number().required(),
      start_date: Yup.date().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Fails' });
    }

    const { plan_id, student_id, start_date } = req.body;

    const oldRegister = await Register.findOne({ where: { student_id } });

    // if has an old active register break
    // if has an old non-active register destroy-it
    if (oldRegister) {
      if (oldRegister.isActive(oldRegister.end_date)) {
        return res
          .status(401)
          .json({ error: 'Student already has an active enrollment' });
      }

      await oldRegister.destroy();
    }

    const day = startOfDay(parseISO(start_date));
    const today = startOfDay(new Date());

    if (isBefore(day, today)) {
      return res.status(400).json({ error: 'Past dates are not permitted' });
    }

    const { duration, price } = await Plan.findByPk(plan_id);

    const Totalprice = price * duration;

    const end_date = addMonths(day, duration);

    const register = await Register.create({
      student_id,
      plan_id,
      start_date,
      end_date,
      price: Totalprice,
    });

    return res.status(200).json(register);
  }
}

export default new RegisterController();
