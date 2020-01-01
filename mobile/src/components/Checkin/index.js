import React from 'react';
import { Text } from 'react-native';
import { formatDistance, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { Container, Number, Data } from './styles';

export default function Checkin({ checkin, index }) {
  const date = formatDistance(parseISO(checkin.createdAt), new Date(), {
    locale: pt,
    addSuffix: true,
  });

  return (
    <Container>
      <Number>Check-in #{index + 1}</Number>
      <Data>{date}</Data>
    </Container>
  );
}
