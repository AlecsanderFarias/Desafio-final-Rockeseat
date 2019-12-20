import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '../../store/modules/auth/actions';

import logo from '../../assets/logo.png';
import { Container, Field } from './styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail valido')
    .required('O e-mail e obrigatorio'),
  password: Yup.string().required('A senha e obrigatoria'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <Container>
      <img src={logo} alt="GymPoint" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Field>SEU E-MAIL </Field>
        <Input name="email" type="email" placeholder="exemplo@email.com" />
        <Field>SUA SENHA </Field>
        <Input name="password" type="password" placeholder="*************" />

        <button disabled={loading} type="submit">
          {loading ? 'Carregando...' : 'Entrar no sistema'}
        </button>
      </Form>
    </Container>
  );
}
