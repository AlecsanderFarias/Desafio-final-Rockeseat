import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { formatDistance, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { Alert } from 'react-native';

import { Container, Header, Status, StatusText, Data, Content } from './styles';

export default function Order({ order, navigation }) {
  function handleClick() {
    navigation.navigate('ViewAnswer', { order });
  }

  return (
    <Container onPress={() => handleClick()}>
      <Header>
        <Status>
          <Icon
            name="check-circle"
            size={20}
            color={order.answer ? '#42cb59' : '#999999'}
          />
          <StatusText active={!!order.answer}>
            {order.answer ? 'Respondido' : 'Sem resposta'}
          </StatusText>
        </Status>
        <Data>
          {formatDistance(parseISO(order.createdAt), new Date(), {
            locale: pt,
            addSuffix: true,
          })}
        </Data>
      </Header>

      <Content>{order.question}</Content>
    </Container>
  );
}
