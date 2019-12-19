import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  padding: 50px 30px;
  width: 100%;
  max-width: 350px;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    width: 100%;
    justify-content: center;
    align-items: center;

    input {
      background: white;
      border-radius: 4px;
      border: 1px solid #eee;
      height: 44px;
      padding: 0 15px;
      width: 100%;

      margin: 0 0 10px;
    }

    span {
      align-self: flex-start;
      color: #ee4d64;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #ee4d64;
      color: #fff;
      font-weight: bold;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      width: 100%;

      &:hover {
        background: ${darken(0.03, '#ee4d64')};
      }
    }
  }
`;

export const Field = styled.strong`
  font-size: 14px;
  color: #444444;
  margin: 0 0 10px;
  align-self: flex-start;
`;
