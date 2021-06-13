import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import Loading from '../components/Loading';
import ReposList from '../components/ReposList';
import SideBar from '../components/SideBar';
import GetUserData from '../hook/GetUserData';
import { Container } from '../styles/ProfileContainer';

export default function Profile() {
  const history = useHistory();
  const { username } = useParams();
  const { profile } = GetUserData(username);
  const screenStates = {
    LOADING: 'LOADING',
    SHOWDATA: 'SHOWDATA',
  };
  const [screenState, setScreenState] = useState(screenStates.LOADING);

  const getStars = () => {
    return profile.reposData
      .map(item => item.stargazers_count)
      .reduce((total, num) => total + num);
  };

  useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.SHOWDATA);
    }, 2 * 1000);
  }, [screenStates.SHOWDATA]);

  return profile.hasError ? (
    <>{history.push('/404')}</>
  ) : (
    <>
      {screenState === screenStates.LOADING && <Loading />}

      {screenState === screenStates.SHOWDATA && (
        <Container>
          <SideBar
            avatar_url={profile.avatar_url}
            name={profile.name}
            username={profile.login}
            bio={profile.bio}
            followers={profile.followers}
            following={profile.following}
            stars={getStars()}
            company={profile.company}
            location={profile.location}
            email={profile.email}
            blog={profile.blog}
            twitter_username={profile.twitter_username}
          />
          <ReposList reposData={profile.reposData} />
        </Container>
      )}
    </>
  );
}
