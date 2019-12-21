import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdCheck, MdChevronLeft } from 'react-icons/md';
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
  name: Yup.string(),
  email: Yup.string().email('Insira um e-mail valido'),
  age: Yup.number(),
  weight: Yup.number(),
  height: Yup.number(),
});

function handleSubmit({ email, password }) {
  console.log('teste');
}

export default function UpdateStudent({ match }) {
  const { id } = match.params;
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getUser() {
      const response = await api.get(`/students/${id}`);

      const user = response.data;

      setUser(user);
    }

    getUser();
  }, []);

  async function handleSubmit({ name, email, age, weight, height }) {
    console.log({ name, email, age, weight, height });

    try {
      setLoading(true);
      await api.put(`/students/${id}`, {
        name,
        email,
        age,
        weight,
        height,
      });

      setLoading(false);
      history.push('/students');
    } catch (error) {
      setLoading(false);
    }
  }

  return (
    <Container>
      <Content>
        <Form initialData={user} schema={schema} onSubmit={handleSubmit}>
          <CardHeader>
            <strong>Edição de aluno</strong>
            <div>
              <Link to="/students">
                <MdChevronLeft color="#fff" size={20} /> VOLTAR
              </Link>
              <button disabled={loading}>
                <MdCheck color="#fff" size={20} /> SALVAR
              </button>
            </div>
          </CardHeader>

          <Card>
            <Field>NOME COMPLETO</Field>
            <Input name="name" type="text" placeholder="Nome completo" />
            <Field>ENDEREÇO DE E-MAIL</Field>
            <Input name="email" type="text" placeholder="E-mail" />

            <CustomFields>
              <div>
                <Field>IDADE</Field>
                <Input name="age" type="number" placeholder="idade" />
              </div>
              <div>
                <Field>PESO (em kg)</Field>
                <Input name="weight" type="number" placeholder="peso" />
              </div>

              <div>
                <Field>Altura</Field>
                <Input name="height" type="number" placeholder="altura" />
              </div>
            </CustomFields>
          </Card>
        </Form>
      </Content>
    </Container>
  );
}
