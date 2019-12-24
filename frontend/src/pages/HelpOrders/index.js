import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Content, CardHeader, Card } from './styles';

import Modal from './AnswerOrder';

import api from '../../services/api';

export default function Students() {
  const [orders, setOrders] = useState([]);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState();

  async function getOrders() {
    const response = await api.get('/help-orders');

    const orders = response.data;

    setOrders(orders);
  }

  useEffect(() => {
    getOrders();
  }, []);

  useEffect(() => {
    if (id) {
      setOpen(!open);
    }
  }, [id]);

  return (
    <Container>
      <Content>
        <CardHeader>
          <strong>Pedidos de auxílio</strong>
        </CardHeader>
        <Card>
          <thead>
            <tr>
              <th>ALUNO</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id}>
                <td>
                  <span>{order.student.name}</span>
                </td>
                <td>
                  <button onClick={() => setId(order.id)}>responder</button>
                </td>
              </tr>
            ))}
          </tbody>
        </Card>
        <Modal
          open={open}
          handleClose={() => {
            setOpen(!open);
            setId();
          }}
          success={() => {
            setOpen(!open);
            getOrders();
          }}
          id={id}
        />
      </Content>
    </Container>
  );
}
