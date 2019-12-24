import styled from 'styled-components';
import { darken } from 'polished';

import AsyncSelect from 'react-select/async';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-content: center;
  padding: 30px;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 900px;
  height: fit-content;
  margin: 0 auto;
  padding: 0 30px;

  form {
    flex-direction: column;
    margin-top: 30px;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  strong {
    font-size: 24px;
    color: #444444;
    text-align: right;
  }

  div {
    display: flex;
  }

  svg {
    margin-right: 5px;
    color: #fff;
  }

  button {
    font-size: 14px;
    color: #fff;
    font-weight: bold;
    background: #ee4d64;
    border: none;
    align-items: center;
    align-content: center;
    display: flex;
    padding: 5px 20px;
    border-radius: 4px;

    &:hover {
      background: ${darken(0.03, '#ee4d64')};
    }
  }

  a {
    font-size: 14px;
    color: #fff;
    font-weight: bold;
    background: #9f9f9f9f;
    border: none;
    align-items: center;
    align-content: center;
    display: flex;
    padding: 10px 20px;
    border-radius: 4px;
    margin-right: 15px;

    &:hover {
      background: ${darken(0.03, '#9f9f9f9f')};
    }
  }
`;

export const Card = styled.div`
  width: 100%;
  background: #fff;
  margin: 30px auto;
  border-radius: 4px;
  padding: 35px 25px;

  justify-content: space-between;

  > div {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
  }
`;

export const Field = styled.div`
  flex-direction: column;
  width: 22%;

  strong {
    font-size: 14px;
    color: #444444;
    margin: 0;
    align-self: flex-start;
  }

  input,
  select {
    background: white;
    border-radius: 4px;
    border: 1px solid #999999;
    color: #999999;
    height: 44px;
    padding: 0 15px;
    width: 100%;

    margin: 10px 0;
  }

  span {
    align-self: flex-start;
    color: #ee4d64;
    display: block;
    margin: 0 0 10px;
    padding-bottom: 10px;
    font-weight: bold;
  }
`;

export const UserFinder = styled(AsyncSelect)`
  margin: 10px 0;

  input {
    background: white;
    border-radius: 4px;
    border: 1px solid #999999;
    color: #999999;
    padding: 0 15px;
    width: 100%;
    height: 10px;
  }
`;
