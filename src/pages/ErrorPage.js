import { Icon } from '@material-ui/core';
import { Helmet } from 'react-helmet';
import Lottie from 'react-lottie';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import animationData from '../assets/animations/errorAnimation.json';
import { Button } from '../styles/SearchStyles';

const Container = styled.div`
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
`;

export default function ErrorPage() {
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    history.push('/');
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  return (
    <>
      <Helmet>
        <link rel='icon' href='../assets/images/search_icon.png' />
        <title>Search Devs | 404</title>
      </Helmet>
      <Container>
        <Lottie
          options={defaultOptions}
          width={400}
          height={400}
          isStopped={false}
          isPaused={false}
        />
        <h1>Oops...</h1>
        <h2>
          Unfortunately the name of this dev was not found on github, please go
          back to the home page and try again.
        </h2>
        <Button onClick={handleSubmit} style={{ 'margin-top': '20px' }}>
          <Icon>arrow_back</Icon>Back
        </Button>
      </Container>
    </>
  );
}
