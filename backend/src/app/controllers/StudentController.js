import * as Yup from 'yup';
import { Op } from 'sequelize';

import Student from '../models/Student';

class StudentController {
  async indexByEmail(req, res) {
    const { email } = req.params;

    const student = await Student.findOne({
      where: {
        email,
      },
    });

    return res.status(200).json(student);
  }

  async index(req, res) {
    const { name } = req.query;

    let students;

    if (name) {
      students = await Student.findAll({
        where: {
          name: {
            [Op.iLike]: `${name}%`,
          },
        },
      });
    } else {
      students = await Student.findAll();
    }

    return res.status(200).json(students);
  }

  async indexOne(req, res) {
    const { id } = req.params;

    const student = await Student.findByPk(id);

    return res.status(200).json(student);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string()
        .min(6)
        .required(),
      email: Yup.string()
        .email()
        .required(),
      age: Yup.number().required(),
      weight: Yup.number().required(),
      height: Yup.number().required(),
    });

    // validate schema for body
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Fails' });
    }

    const studentExists = await Student.findOne({
      where: { email: req.body.email },
    });

    if (studentExists) {
      return res.status(400).json({ error: 'Student already exists' });
    }

    const student = await Student.create(req.body);

    return res.status(200).json(student);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().min(6),
      email: Yup.string().email(),
      age: Yup.number(),
      weight: Yup.number(),
      height: Yup.number(),
    });

    // validate schema for body
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Fails' });
    }

    const { id } = req.params;

    const student = await Student.findByPk(id);

    const { email } = req.body;

    if (email !== student.email) {
      const studentExists = await Student.findOne({ where: { email } });

      if (studentExists) {
        return res.status(400).json({ error: 'Student already exists' });
      }
    }

    const returnedStudent = await student.update(req.body);

    return res.status(200).json(returnedStudent);
  }

  async delete(req, res) {
    const { id } = req.params;

    const student = await Student.findByPk(id);

    await student.destroy();

    return res.status(200).json({ ok: true });
  }
}

export default new StudentController();
