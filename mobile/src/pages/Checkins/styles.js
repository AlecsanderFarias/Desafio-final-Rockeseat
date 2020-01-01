import styled from 'styled-components/native';

import Button from '../../components/Button';

export const Container = styled.SafeAreaView`
  padding-top: 20px;
  flex: 1;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30 },
})`
  padding: 0;
  margin: 0;
`;

export const TButton = styled(Button)`
  margin: 0 30px;
`;
