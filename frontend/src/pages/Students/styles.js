import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 900px;
  height: fit-content;
  margin: 50px auto;
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

  div {
    display: flex;

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
      padding: 10px 20px;
      border-radius: 4px;
      margin-right: 15px;
    }
  }
`;
export const CardInput = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  padding: 10px 20px;
  border-radius: 4px;
  border: 1px solid #6666;

  input {
    margin-left: 10px;
    font-size: 14px;
    color: #999999;
    text-align: left;
    border: none;
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
      color: #de3b3b;
      font-size: 15px;
      border: none;
      background: none;
      background: none;
    }

    a {
      color: #4d85ee;
      font-size: 15px;
      border: none;
      background: none;
      margin-right: 30px;
      background: none;
    }
  }
`;

export const Button = styled.button``;
