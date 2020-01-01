import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { withNavigationFocus } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Alert } from 'react-native';

import Checkin from '../../components/Checkin';
import Header from '../../components/Header';

import { Container, List, TButton } from './styles';

import api from '../../services/api';

function Checkins({ isFocused }) {
  const [checkins, setCheckins] = useState();
  const [loading, setLoading] = useState(false);
  const id = useSelector(state => state.auth.id);

  async function getCheckins() {
    const response = await api.get(`/students/${id}/checkins`);

    const Allcheckins = response.data;

    setCheckins(Allcheckins);
  }

  useEffect(() => {
    getCheckins();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isFocused) {
      getCheckins();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocused]);

  async function handleClick() {
    setLoading(true);

    try {
      await api.post(`/students/${id}/checkins`);

      getCheckins();
      setLoading(false);
    } catch (error) {
      Alert.alert(
        'Erro',
        'Você não pode fazer checkin mais de 5 vezes em uma semana',
      );
      setLoading(false);
    }
  }

  return (
    <>
      <Header />
      <Container>
        <TButton loading={loading} onPress={() => handleClick()}>
          Novo check-in
        </TButton>

        <List
          data={checkins}
          keyExtractor={item => String(item.id)}
          renderItem={({ item, index }) => (
            <Checkin checkin={item} index={checkins.length - (index + 1)} />
          )}
        />
      </Container>
    </>
  );
}

Checkins.navigationOptions = {
  tabBarLabel: 'Check-ins',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="place" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(Checkins);
