import { Icon } from '@material-ui/core';
import styled from 'styled-components';

const TextWithIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${props => (props.color ? props.color : '#fff')};
  margin-bottom: 8px;
  /* border: 1px solid red; */
`;

export default function TextWithIcon(props) {
  return (
    <TextWithIconContainer color={props.color}>
      <Icon style={{ margin: '0 8px 0 0' }} width='36px' height='36px'>
        {props.icon}
      </Icon>{' '}
      {props.children}
    </TextWithIconContainer>
  );
}
