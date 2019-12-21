import * as Yup from 'yup';

import Plan from '../models/Plans';

class PlanController {
  async index(req, res) {
    const plans = await Plan.findAll({
      order: [['createdAt', 'ASC']],
    });

    return res.status(200).json(plans);
  }

  async indexOne(req, res) {
    const { id } = req.params;

    const plan = await Plan.findByPk(id);

    return res.status(200).json(plan);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      duration: Yup.number().required(),
      price: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Fails' });
    }

    const planExists = await Plan.findOne({
      where: { title: req.body.title },
    });

    if (planExists) {
      return res.status(400).json({ error: 'Plan already exists' });
    }

    const plan = await Plan.create(req.body);

    return res.status(200).json(plan);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string(),
      duration: Yup.number(),
      price: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Fails' });
    }

    const { id } = req.params;

    const plan = await Plan.findByPk(id);

    const { title } = req.body;

    if (title !== plan.title) {
      const planExists = await Plan.findOne({ where: { title } });

      if (planExists) {
        return res.status(400).json({ error: 'Plan already exists' });
      }
    }

    const returnedPlan = await plan.update(req.body);

    return res.status(200).json(returnedPlan);
  }

  async delete(req, res) {
    const { id } = req.params;

    const planExists = await Plan.findByPk(id);

    if (!planExists) {
      return res.status(400).json({ error: 'This plan does not exist' });
    }

    await planExists.destroy();

    return res.status(200).json({ ok: true });
  }
}

export default new PlanController();
