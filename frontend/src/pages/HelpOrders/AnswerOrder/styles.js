import styled from 'styled-components';
import { darken } from 'polished';
import Modal from 'react-modal';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;

  width: 450px;

  form {
    width: 100%;

    strong {
      font-size: 14px;
      color: #444444;
      margin: 10px 0 10px;
      padding-bottom: 10px;
      align-self: flex-start;
    }

    textarea {
      background: white;
      border-radius: 4px;
      border: 1px solid #999999;
      color: #999999;
      height: 44px;
      padding: 15px;
      width: 100%;

      height: 150px;
      margin: 10px 0 20px;
    }

    button {
      width: 100%;

      font-size: 16px;
      color: #fff;
      font-weight: bold;
      background: #ee4d64;
      border: none;
      padding: 10px 20px;
      border-radius: 4px;

      &:hover {
        background: ${darken(0.03, '#ee4d64')};
      }
    }

    span {
      display: block;
      align-self: flex-start;
      color: #ee4d64;
      margin: 0 0 10px;
      padding-bottom: 10px;
      font-weight: bold;
    }
  }
`;

export const Question = styled.p`
  font-size: 16px;
  color: #666666;
  line-height: 26px;
  text-align: left;
  margin: 10px 0 20px;
`;
