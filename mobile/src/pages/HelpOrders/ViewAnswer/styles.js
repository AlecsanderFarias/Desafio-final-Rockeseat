import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

export const Content = styled.View`
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
  border: 1px solid #eee;
`;

export const QuestionsHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 14px;
  color: #444444;
  font-weight: bold;
  text-align: left;
  text-transform: uppercase;
`;

export const Data = styled.Text`
  font-size: 14px;
  color: #666666;
  text-align: right;
`;

export const TextContent = styled.Text`
  font-size: 14px;
  color: #666666;
  line-height: 26px;
  text-align: left;
  padding: 10px 0;
`;

export const AnswerHeader = styled.View`
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-between;
`;
