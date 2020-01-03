import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../../../components/Header';

import api from '../../../services/api';

import { Container, Form, Input, SubmitButton } from './styles';

export default function NewOrder({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [question, setQuestion] = useState('');
  const [error, setError] = useState();
  const id = useSelector(state => state.auth.id);

  async function handleSubmit() {
    setLoading(true);

    if (question.length <= 0) {
      setError(true);
      setLoading(false);
    } else {
      setError(false);
      try {
        await api.post(`/students/${id}/help-orders`, {
          question,
        });

        setLoading(false);

        navigation.navigate('Orders');
      } catch (error) {
        setLoading(false);
      }
    }
  }

  return (
    <Container>
      <Form>
        <Input
          autoCorrect={false}
          multiline
          style={{ textAlignVertical: 'top' }}
          placeholder="Inclua seu pedido de auxílio"
          returnKeyType="send"
          onSubmitEditing={() => handleSubmit()}
          value={question}
          onChangeText={setQuestion}
        />

        {error && <Text>Esse campo é obrigatorio</Text>}

        <SubmitButton loading={loading} onPress={() => handleSubmit()}>
          Enviar pedido
        </SubmitButton>
      </Form>
    </Container>
  );
}

NewOrder.navigationOptions = ({ navigation }) => ({
  headerTitle: () => <Header />,
  headerTitleAlign: 'center',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Orders');
      }}>
      <Icon name="chevron-left" size={24} />
    </TouchableOpacity>
  ),
});
