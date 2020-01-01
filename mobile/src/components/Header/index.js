import React from 'react';
import { Container, Title, Logo } from './styles';

import logo from '../../assets/logoCut.png';

export default function Header() {
  return (
    <Container>
      <Logo source={logo} />
      <Title>GYMPOINT</Title>
    </Container>
  );
}
