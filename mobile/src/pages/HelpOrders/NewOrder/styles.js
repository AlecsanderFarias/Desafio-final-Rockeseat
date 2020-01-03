import { Platform } from 'react-native';
import styled from 'styled-components/native';

import Button from '../../../components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  padding: 0 30px;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999999',
})`
  padding: 10px 15px;
  background: #fff;
  border-radius: 4px;
  border: 1px solid #eee;
  min-height: 300px;
  margin-bottom: 10px;
  font-size: 16px;
  color: #999999;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
`;
