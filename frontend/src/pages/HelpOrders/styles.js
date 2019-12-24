import styled from 'styled-components';
import { darken } from 'polished';

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
`;

export const Card = styled.table`
  width: 100%;
  background: #fff;
  margin: 30px auto;
  border-radius: 4px;
  padding: 35px 25px;

  thead {
    width: 100%;
  }

  thead th {
    font-size: 16px;
    color: #444444;
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;

    span {
      font-size: 16px;
      color: #666666;
      text-align: left;
      line-height: 20px;
    }

    :last-child {
      display: flex;
      justify-content: flex-end;
    }

    button {
      color: #4d85ee;
      font-size: 15px;
      border: none;
      background: none;
      background: none;
    }
  }
`;
