import styled from 'styled-components';
import Theme from './Theme';

export const SearchContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  color: #3b4252;
  font-size: 40px;
  font-style: italic;
  line-height: 50px;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  background-color: #fff;
  border: 1px solid ${Theme.secondary};
  border-radius: 5px;
  height: 50px;
  padding: 0 23px;

  color: #8190a5;
  font-size: 18px;
  font-style: italic;
  line-height: 62px;
  text-align: left;
  box-shadow: ${Theme.shadow};
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-left: 5px;
  color: #fff;
  background-color: #47525e;
  border-radius: 5px;
  width: 118px;
  height: 50px;
  font-size: 20px;
  font-style: italic;
  box-shadow: ${Theme.shadow};
  border: none;

  cursor: pointer;
`;
