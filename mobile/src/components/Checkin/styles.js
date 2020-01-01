import styled from 'styled-components/native';

export const Container = styled.View`
  background: #fff;
  margin: 10px 0;
  padding: 15px;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid #eee;
  border-radius: 4px;
`;

export const Number = styled.Text`
  font-size: 14px;
  color: #444444;
  text-align: left;
  font-weight: bold;
`;

export const Data = styled.Text`
  font-size: 14px;
  color: #666666;
  text-align: right;
`;
