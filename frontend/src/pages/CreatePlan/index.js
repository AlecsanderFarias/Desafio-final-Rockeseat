import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { MdCheck, MdChevronLeft } from 'react-icons/md';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';

import history from '../../services/history';
import api from '../../services/api';

import {
  Container,
  Content,
  CardHeader,
  Card,
  Field,
  CustomFields,
} from './styles';

const schema = Yup.object().shape({
  title: Yup.string().required('O titulo e obrigatorio'),
  duration: Yup.string().required('A durucao e obrigatoria'),
  price: Yup.string().required('O preco e obrigatorio'),
});

export default function CreateStudent({ match }) {
  const [loading, setLoading] = useState(false);

  const [duration, setDuration] = useState('');
  const [price, setPrice] = useState('');

  async function handleSubmit({ title, duration, price }) {
    try {
      setLoading(true);
      await api.post(`/plans`, {
        title,
        duration,
        price: price.slice(2, price.length),
      });

      setLoading(false);
      history.push('/plans');
    } catch (error) {
      setLoading(false);

      toast.error('Ja existe um plano cadastrado com esse nome');
    }
  }

  function onChanglePrice(string) {
    console.log(string.slice(1, string.length));

    setPrice(string.slice(2, string.length));
  }

  return (
    <Container>
      <Content>
        <Form schema={schema} onSubmit={handleSubmit}>
          <CardHeader>
            <strong>Cadastro de planos</strong>
            <div>
              <Link to="/plans">
                <MdChevronLeft color="#fff" size={20} /> VOLTAR
              </Link>
              <button disabled={loading}>
                <MdCheck color="#fff" size={20} /> SALVAR
              </button>
            </div>
          </CardHeader>

          <Card>
            <Field>TÍTULO DO PLANO</Field>
            <Input name="title" type="text" />

            <CustomFields>
              <div>
                <Field>DURAÇÃO (em meses)</Field>
                <Input
                  value={duration}
                  onChange={e => setDuration(e.target.value)}
                  name="duration"
                  type="number"
                />
              </div>
              <div>
                <Field>PREÇO MENSAL</Field>
                <Input
                  value={'R$' + price}
                  onChange={e => onChanglePrice(e.target.value)}
                  name="price"
                />
              </div>

              <div>
                <Field>PREÇO TOTAL</Field>
                <Input
                  disabled
                  value={'R$' + price * duration}
                  style={{ background: '#eee' }}
                  name="totalPrice"
                  type="text"
                  step="0.01"
                />
              </div>
            </CustomFields>
          </Card>
        </Form>
      </Content>
    </Container>
  );
}
