import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../assets/logoCut.png';
import { Container, Content, Profile, Divider } from './styles';

export default function Header() {
  const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GymPoint" />
          <strong>GYMPOINT</strong>
          <Divider />
          <Link to="/students">ALUNOS</Link>
          <Link to="/plans">PLANOS</Link>
          <Link to="/registers">MATRÍCULAS</Link>
          <Link to="/orders">PEDIDOS DE AUXÍLIO</Link>
        </nav>
        <aside>
          <Profile>
            <strong>{profile.name}</strong>
            <Link to="/">sair do sistema</Link>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
