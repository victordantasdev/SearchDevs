import styled from 'styled-components';
import Theme from './Theme';

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 25px;
  width: 450px;

  color: ${Theme.primaryWhite};
  background-color: ${Theme.secondaryBlue};

  text-align: left;
  box-shadow: ${Theme.shadow};
`;

export const ProfileImage = styled.img`
  align-self: center;
  border-radius: 5px;
  box-shadow: ${Theme.shadow};
  width: 298px;
  height: 298px;
`;

export const DevName = styled.h2`
  font-size: 40px;
  font-style: italic;
  margin-top: 33px;
  margin-bottom: 0;
`;

export const UserName = styled.p`
  font-size: 28px;
  font-style: italic;
  margin: 0;
`;

export const Bio = styled.p`
  margin-top: 23px;
  font-size: 18px;
  line-height: 28px;
  width: 400px;
  text-align: justify;
`;

export const SocialData = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  margin-top: 23px;
  line-height: 28px;
`;

export const DataContainer = styled.div`
  margin-top: 30px;
  font-size: 18px;
  line-height: 28px;
`;

export const SocialLink = styled.a`
  color: ${Theme.primaryWhite};
  font-style: italic;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${Theme.primaryWhite};
  box-shadow: ${Theme.shadow};
  border-radius: 5px;
  width: 192px;
  height: 50px;
  border: none;
  font-size: 18px;
  cursor: pointer;
`;
