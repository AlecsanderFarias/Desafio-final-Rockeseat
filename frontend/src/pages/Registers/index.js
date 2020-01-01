import React, { useEffect, useState } from 'react';
import { MdCheckCircle, MdAdd } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Container, Content, CardHeader, Card } from './styles';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '../../services/api';

export default function Students() {
  const [registers, setRegisters] = useState([]);

  useEffect(() => {
    async function loadRegisters() {
      const response = await api.get('/registers');

      const registers = response.data;

      const newRegisters = registers.map(register => {
        return {
          ...register,
          start_date: format(parseISO(register.start_date), "d 'de' MMMM ", {
            locale: pt,
          }),
          end_date: format(parseISO(register.end_date), "d 'de' MMMM ", {
            locale: pt,
          }),
        };
      });

      setRegisters(newRegisters);
    }

    loadRegisters();
  }, []);

  async function handleExclue(register) {
    const confirmed = window.confirm(
      `Deseja excluir a matricula do aluno aluno ${register.student.name} ?`
    );

    if (confirmed) {
      await api.delete(`/registers/${register.id}`);

      const newRegisters = registers.filter(reg => {
        return !(reg.id === register.id);
      });

      setRegisters(newRegisters);
    }
  }

  return (
    <Container>
      <Content>
        <CardHeader>
          <strong>Gerenciando matrículas</strong>
          <div>
            <Link to="/registers/create">
              <MdAdd size={20} color="#fff" /> CADASTRAR
            </Link>
          </div>
        </CardHeader>
        <Card>
          <thead>
            <tr>
              <th>ALUNO</th>
              <th>PLANO</th>
              <th>INÍCIO</th>
              <th>TÉRMINO</th>
              <th>ATIVA</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {registers.map((register, index) => (
              <tr key={register.id}>
                <td>
                  <span>{register.student.name}</span>
                </td>
                <td>
                  <span>{register.plan.title}</span>
                </td>
                <td>
                  <span>{register.start_date}</span>
                </td>
                <td>
                  <span>{register.end_date}</span>
                </td>
                <td>
                  <MdCheckCircle
                    size={20}
                    color={register.active ? '#42cb59' : '#dddddd'}
                  />
                </td>
                <td>
                  <Link to={`/registers/${register.id}`}>editar</Link>

                  <button onClick={() => handleExclue(register)}>Apagar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </Card>
      </Content>
    </Container>
  );
}
