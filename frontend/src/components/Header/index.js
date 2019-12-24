import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import logo from '../../assets/logoCut.png';
import { Container, Content, Profile, Divider, CustomLink } from './styles';

export default function Header({ match }) {
  const profile = useSelector(state => state.user.profile);
  const [url, setUrl] = useState('');

  useEffect(() => {
    const url = window.location.href;

    if (url.indexOf('students') > -1) {
      setUrl('students');
    } else if (url.indexOf('plans') > -1) {
      setUrl('plans');
    } else if (url.indexOf('registers') > -1) {
      setUrl('registers');
    } else {
      setUrl('order');
    }
  }, [window.location.href]);

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GymPoint" />
          <strong>GYMPOINT</strong>
          <Divider />
          <CustomLink active={'students' === url} to="/students">
            ALUNOS
          </CustomLink>
          <CustomLink active={'plans' === url} to="/plans">
            PLANOS
          </CustomLink>
          <CustomLink active={'registers' === url} to="/registers">
            MATRÍCULAS
          </CustomLink>
          <CustomLink active={'order' === url} to="/orders">
            PEDIDOS DE AUXÍLIO
          </CustomLink>
        </nav>
        <aside>
          <Profile>
            <strong>{profile.name}</strong>
            <CustomLink to="/">sair do sistema</CustomLink>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
