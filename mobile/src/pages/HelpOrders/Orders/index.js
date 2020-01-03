import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { withNavigationFocus } from 'react-navigation';
import Header from '../../../components/Header';

import Order from '../../../components/Order';

import api from '../../../services/api';

import { Container, List, TButton } from './styles';

function HelpOrders({ isFocused, navigation }) {
  const id = useSelector(state => state.auth.id);
  const [orders, setOrders] = useState([]);

  async function getOrders() {
    const response = await api.get(`/students/${id}/help-orders`);

    const allOrders = response.data;

    setOrders(allOrders);
  }

  useEffect(() => {
    getOrders();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isFocused) {
      getOrders();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocused]);

  return (
    <Container>
      <TButton onPress={() => navigation.navigate('NewOrder')}>
        Novo pedido de auxílio
      </TButton>

      <List
        data={orders}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <Order order={item} navigation={navigation} />
        )}
      />
    </Container>
  );
}

HelpOrders.navigationOptions = {
  headerTitle: () => <Header />,
  headerTitleAlign: 'center',
};

export default withNavigationFocus(HelpOrders);
