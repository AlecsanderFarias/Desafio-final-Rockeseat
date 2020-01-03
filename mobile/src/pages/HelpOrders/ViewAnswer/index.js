import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { formatDistance, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import {
  Container,
  Content,
  QuestionsHeader,
  Title,
  Data,
  TextContent,
  AnswerHeader,
} from './styles';

import Header from '../../../components/Header';

export default function ViewAnswer({ navigation }) {
  const order = navigation.getParam('order');

  return (
    <Container>
      <Content>
        <View>
          <QuestionsHeader>
            <Title>Pegunta</Title>
            <Data>
              {formatDistance(parseISO(order.createdAt), new Date(), {
                locale: pt,
                addSuffix: true,
              })}
            </Data>
          </QuestionsHeader>
          <TextContent>{order.question}</TextContent>
        </View>
        <View>
          <AnswerHeader>
            <Title>Resposta</Title>
          </AnswerHeader>
          <TextContent>
            {order.answer ? order.answer : 'Ainda sem resposta.'}
          </TextContent>
        </View>
      </Content>
    </Container>
  );
}

ViewAnswer.navigationOptions = ({ navigation }) => ({
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
