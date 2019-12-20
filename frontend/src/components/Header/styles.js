import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
  width: 100%;
  border-bottom: 1px solid #999999;
`;

export const Content = styled.div`
  height: 64px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    height: 100%;
    display: flex;
    align-items: center;
  }

  img {
    height: 24px;
  }

  strong {
    font-size: 20px;
    color: #ee4d64;
    text-align: left;
    margin: 0px 10px 0px 20px;
    padding-right: 20px;
  }

  a {
    font-size: 15px;
    color: #999999;
    text-align: left;
    font-weight: bold;
    margin-right: 10px;
  }
`;

export const Divider = styled.div`
  height: 60%;
  width: 1px;
  background: grey;
  border-right: 1px solid #999999;
  margin-right: 20px;
`;

export const Profile = styled.div`
  text-align: right;

  strong {
    padding: 0;
    margin: 0;
    font-size: 14px;
    color: #666666;
    text-align: left;
  }

  a {
    padding: 0;
    display: block;
    margin: 2px 0 0 0;
    font-weight: normal;
    font-size: 14px;
    color: #de3b3b;
    text-align: right;
  }
`;
