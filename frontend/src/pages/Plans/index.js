import React, { useEffect, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Container, Content, CardHeader, Card } from './styles';

import api from '../../services/api';

export default function Students() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    async function loadPlans() {
      const response = await api.get('/plans');

      const plans = response.data;

      setPlans(plans);
    }

    loadPlans();
  }, []);

  async function handleExclue(plan) {
    const confirmed = window.confirm(`Deseja excluir o aluno ${plan.title} ?`);

    if (confirmed) {
      await api.delete(`/plans/${plan.id}`);

      const newPlans = plans.filter(pl => {
        return !(pl.id === plan.id);
      });

      setPlans(newPlans);
    }
  }

  return (
    <Container>
      <Content>
        <CardHeader>
          <strong>Gerenciando planos</strong>
          <div>
            <Link to="/plans/create">
              <MdAdd size={20} color="#fff" /> CADASTRAR
            </Link>
          </div>
        </CardHeader>
        <Card>
          <thead>
            <tr>
              <th>TÍTULO</th>
              <th />
              <th />
              <th />
              <th />
              <th />
              <th>DURAÇÃO</th>
              <th>VALOR p/ MÊS</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {plans.map((plan, index) => (
              <tr key={plan.id}>
                <td>
                  <span>{plan.title}</span>
                </td>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td>
                  <span>{plan.duration}</span>
                </td>
                <td>
                  <span>{plan.price}</span>
                </td>
                <td>
                  <Link to={`/plans/${plan.id}`}>editar</Link>

                  <button onClick={() => handleExclue(plan)}>Apagar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </Card>
      </Content>
    </Container>
  );
}
