import styled from 'styled-components';
import Theme from './Theme';

export const ReposListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  position: relative;

  padding: 5px 70px;
  overflow-x: hidden;
  overflow-y: auto;
  text-align: justify;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${Theme.primaryWhite};
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: ${Theme.secondaryBlue};
  }
`;

export const Repo = styled.p`
  border-bottom: 1px solid #e0e0e0;
`;

export const RepoLink = styled.a`
  color: ${Theme.secondaryBlue};
  font-size: 24px;
  font-style: italic;
  line-height: 34px;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;

export const Dot = styled.span`
  height: 8px;
  width: 8px;
  background-color: ${Theme.secondaryBlue};
  border-radius: 50%;
  display: inline-block;
  margin: 0 10px;
`;
