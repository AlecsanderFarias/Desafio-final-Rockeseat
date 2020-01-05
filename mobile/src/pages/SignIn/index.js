import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Image } from 'react-native';
import logo from '../../assets/logo.png';

import { Container, Form, Input, SubmitButton } from './styles';

import { signInRequest } from '../../store/modules/auth/actions';

export default function SignIn() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit() {
    dispatch(signInRequest(email));
  }

  return (
    <Container>
      <Image source={logo} />

      <Form>
        <Input
          autoCorrect={false}
          placeholder="Informe seu Id de cadastro"
          returnKeyType="send"
          onSubmitEditing={() => handleSubmit()}
          value={email}
          onChangeText={setEmail}
        />

        <SubmitButton loading={loading} onPress={() => handleSubmit()}>
          Entrar no sistema
        </SubmitButton>
      </Form>
    </Container>
  );
}
