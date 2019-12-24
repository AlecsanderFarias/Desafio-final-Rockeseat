import React, { useState, useEffect } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { Form, Input, Textarea } from '@rocketseat/unform';
import * as Yup from 'yup';

import api from '../../../services/api';

import { Container, Question } from './styles';

const schema = Yup.object().shape({
  answer: Yup.string().required('A resposta e obrigatória'),
});

export default function AnswerOrder({ open, handleClose, id, success }) {
  const [order, setOrder] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {}, []);

  async function afterOpenModal() {
    const response = await api.get(`/help-orders/${id}`);

    const order = response.data;

    setOrder(order);
  }

  async function handleSubmit({ answer }) {
    try {
      setLoading(true);
      await api.put(`/help-orders/${id}/answer`, {
        answer,
      });

      setLoading(false);
      success();
    } catch (error) {
      setLoading(false);
    }
  }

  return (
    <Dialog open={open} onClose={handleClose} onEnter={afterOpenModal}>
      <Container>
        <Form schema={schema} onSubmit={handleSubmit}>
          <strong>PERGUNTA DO ALUNO</strong>
          <Question>{order.question}</Question>
          <strong>SUA RESPOSTA</strong>
          <Textarea name="answer" type="text" placeholder="exemplo@email.com" />
          <button disabled={loading} type="submit">
            {loading ? 'Carregando...' : 'Responder aluno'}
          </button>
        </Form>
      </Container>
    </Dialog>
  );
}
