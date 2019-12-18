import * as Yup from 'yup';
import HelpOrder from '../models/Orders';
import Student from '../models/Student';

import Queue from '../../lib/Queue';
import ResponseOrderMail from '../jobs/ResponseOrderMail';

class HelpOrderController {
  // USER FUNCTIONS
  async index(req, res) {
    const { student_id } = req.params;

    const helpOrders = await HelpOrder.findAll({
      where: {
        student_id,
      },
    });

    return res.status(200).json(helpOrders);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      question: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Fails' });
    }

    const { student_id } = req.params;
    const { question } = req.body;

    const helpOrder = await HelpOrder.create({
      student_id,
      question,
    });

    return res.status(200).json(helpOrder);
  }

  // ADMIN FUNCTIONS

  async indexall(req, res) {
    const helpOrders = await HelpOrder.findAll({
      where: {
        answer: null,
      },
      include: [
        {
          model: Student,
          as: 'student',
          attributes: ['id', 'name'],
        },
      ],
    });

    return res.status(200).json(helpOrders);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      answer: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Fails' });
    }

    const { id } = req.params;
    const { answer } = req.body;

    const helpOrder = await HelpOrder.findByPk(id);

    await helpOrder.update({
      answer,
      answer_at: new Date(),
    });

    const user = await Student.findByPk(helpOrder.student_id);

    // TO-DO ENVIAR EMAIL

    await Queue.add(ResponseOrderMail.key, {
      name: user.name,
      email: user.email,
      question: helpOrder.question,
      answer,
    });

    return res.status(200).json({ ok: true });
  }
}

export default new HelpOrderController();
