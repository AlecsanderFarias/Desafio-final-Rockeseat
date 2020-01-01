import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  text-align: center;
  border-bottom-color: #eee;
  border-bottom-width: 1;
  background: #fff;
  padding: 15px 0;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  height: 25px;
  width: 50px;
`;

export const Title = styled.Text`
  color: #ee4e62;
  margin-left: 15px;
  font-weight: bold;
  font-size: 20px;
`;
