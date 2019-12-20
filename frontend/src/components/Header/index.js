import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logoCut.png';
import { Container, Content, Profile, Divider } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GymPoint" />
          <strong>GYMPOINT</strong>
          <Divider />
          <Link to="/alunos">ALUNOS</Link>
          <Link to="/planos">PLANOS</Link>
          <Link to="/matriculas">MATRÍCULAS</Link>
          <Link to="/pedidos">PEDIDOS DE AUXÍLIO</Link>
        </nav>
        <aside>
          <Profile>
            <strong>Alecsander Farias</strong>
            <Link to="/">sair do sistema</Link>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
