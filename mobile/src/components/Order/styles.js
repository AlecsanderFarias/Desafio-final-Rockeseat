import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  padding: 20px;
  margin-top: 10px;
  background: #fff;
  border-radius: 4px;
  border: 1px solid #eee;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Status = styled.View`
  align-content: center;
  justify-content: center;
  align-items: center;

  flex-direction: row;
`;

export const StatusText = styled.Text`
  margin-left: 10px;
  font-weight: bold;
  font-size: 14px;
  color: #999999;
  text-align: left;
  color: ${props => (props.active ? '#42cb59' : '#999999')};
`;

export const Data = styled.Text`
  font-size: 14px;
  color: #666666;
  text-align: right;
`;

export const Content = styled.Text.attrs({
  numberOfLines: 3,
})`
  font-size: 14px;
  margin-top: 10px;
  color: #666666;
  line-height: 26px;
  text-align: left;
`;
