import React, { useState } from 'react';
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
  name: Yup.string().required('O nome e obrigatorio'),
  email: Yup.string()
    .email('Insira um e-mail valido')
    .required('O e-mail e obrigatorio'),
  age: Yup.string().required('A idade e obrigatoria'),
  weight: Yup.string().required('O peso e obrigatorio'),
  height: Yup.string().required('A altura e obrigatoria'),
});

export default function CreateStudent({ match }) {
  const [loading, setLoading] = useState(false);

  async function handleSubmit({ name, email, age, weight, height }) {
    try {
      setLoading(true);
      await api.post(`/students`, {
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

      toast.error('Ja existe alguem cadastrado com esse email');
    }
  }

  return (
    <Container>
      <Content>
        <Form schema={schema} onSubmit={handleSubmit}>
          <CardHeader>
            <strong>Cadastro de aluno</strong>
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
                <Input
                  name="weight"
                  type="number"
                  step="0.01"
                  placeholder="peso"
                />
              </div>

              <div>
                <Field>Altura</Field>
                <Input
                  name="height"
                  type="number"
                  step="0.01"
                  placeholder="altura"
                />
              </div>
            </CustomFields>
          </Card>
        </Form>
      </Content>
    </Container>
  );
}
