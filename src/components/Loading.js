import { Helmet } from 'react-helmet';
import Lottie from 'react-lottie';
import styled from 'styled-components';
import animationData from '../assets/animations/loadingAnimation.json';

const Container = styled.div`
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  text-align: center;
`;

const AnimationContainer = styled.div`
  width: 400px;
  height: 400px;
`;

export default function Loading() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  return (
    <>
      <Helmet>
        <link rel='icon' href='../assets/images/search_icon.png' />
        <title>Loading ...</title>
      </Helmet>
      <Container>
        <AnimationContainer>
          <Lottie options={defaultOptions} isStopped={false} isPaused={false} />
        </AnimationContainer>
        <h1>Loading the profile of this amazing person...</h1>
      </Container>
    </>
  );
}
