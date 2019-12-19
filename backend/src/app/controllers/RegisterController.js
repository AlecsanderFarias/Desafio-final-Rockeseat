import * as Yup from 'yup';
import { startOfDay, parseISO, isBefore, addMonths } from 'date-fns';

import Register from '../models/Register';
import Plan from '../models/Plans';
import Student from '../models/Student';

import Queue from '../../lib/Queue';
import RegistrationMail from '../jobs/RegistrationMail';

class RegisterController {
  async index(req, res) {
    const registers = await Register.findAll({
      order: [['createdAt', 'ASC']],
      include: [
        {
          model: Student,
          as: 'student',
          attributes: ['id', 'name'],
        },
        {
          model: Plan,
          as: 'plan',
          attributes: ['id', 'title', 'duration', 'price'],
        },
      ],
      attributes: ['id', 'start_date', 'end_date', 'price', 'active'],
    });

    return res.status(200).json(registers);
  }

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

    const student = await Student.findByPk(student_id);
    const plan = await Plan.findByPk(plan_id);

    await Queue.add(RegistrationMail.key, {
      name: student.name,
      email: student.email,
      plan: plan.title,
      totalPrice: Totalprice,
      end_date,
    });

    return res.status(200).json(register);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      plan_id: Yup.number(),
      start_date: Yup.date(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Fails' });
    }

    const { plan_id, start_date } = req.body;
    const { id } = req.params;

    const newPlan = await Plan.findByPk(plan_id);
    const register = await Register.findByPk(id);

    const Totalprice = newPlan.price * newPlan.duration;

    const day = start_date
      ? startOfDay(parseISO(start_date))
      : register.start_date;
    const end_date = addMonths(day, newPlan.duration);

    await register.update({
      start_date: day,
      end_date,
      price: Totalprice,
      plan_id: newPlan.id,
    });

    return res.status(200).json(newPlan);
  }

  async delete(req, res) {
    const { id } = req.params;

    const register = await Register.findByPk(id);

    await register.destroy();

    return res.status(200).json({ ok: true });
  }
}

export default new RegisterController();
