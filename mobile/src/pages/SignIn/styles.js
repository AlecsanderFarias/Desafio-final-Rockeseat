import { Platform } from 'react-native';
import styled from 'styled-components/native';

import Button from '../../components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  background: #fff;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999999',
})`
  padding: 0 15px;
  height: 46px;
  background: #fff;
  border-radius: 4px;
  border: 1px solid #999999;
  margin-bottom: 10px;
  color: #999999;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
`;
