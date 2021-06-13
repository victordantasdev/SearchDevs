import { Icon } from '@material-ui/core';
import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router';
import TwitterIcon from '../assets/extras/TwitterIcon';
import {
  Bio,
  Button,
  DevName,
  UserName,
  SocialData,
  SocialLink,
  ProfileImage,
  DataContainer,
  ButtonContainer,
  SideBarContainer,
} from '../styles/SideBarContainer';
import TextWithIcon from './TextWithIcon';

export default function SideBar(props) {
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    history.push('/');
  };

  return (
    <>
      <Helmet>
        <link rel='icon' href={props.avatar_url} />
        <title>Search Devs | Profile - {props.name}</title>
      </Helmet>

      <SideBarContainer>
        <ProfileImage src={props.avatar_url} alt='profile' />
        <DevName>{props.name}</DevName>
        <UserName>@{props.username}</UserName>
        {props.bio !== null ? <Bio>{props.bio}</Bio> : null}

        <SocialData>
          <TextWithIcon icon='people'>{props.followers} followers</TextWithIcon>

          <TextWithIcon icon='favorite_border'>
            {props.following} following
          </TextWithIcon>

          <TextWithIcon icon='star_border'>{props.stars} stars</TextWithIcon>
        </SocialData>

        <DataContainer>
          {/* Organization */}
          {props.company !== null ? (
            <TextWithIcon icon='business'>{props.company}</TextWithIcon>
          ) : null}

          {/* Location */}
          {props.location !== null ? (
            <TextWithIcon icon='place'>{props.location}</TextWithIcon>
          ) : null}

          {/* Email */}
          {props.email !== null ? (
            <TextWithIcon icon='mail_outline'>{props.email}</TextWithIcon>
          ) : null}

          {/* Website */}
          {props.blog !== null && props.blog !== '' ? (
            <TextWithIcon icon='link'>
              <SocialLink
                href={`https://${props.blog}`}
                target='_blank'
                rel='noopener noreferrer'
              >
                {props.blog}
              </SocialLink>
            </TextWithIcon>
          ) : null}

          {/* Twitter */}
          {props.twitter_username !== null ? (
            <TextWithIcon icon={<TwitterIcon />}>
              <SocialLink
                href={`https://twitter.com/${props.twitter_username}`}
                target='_blank'
                rel='noopener noreferrer'
              >
                @{props.twitter_username}
              </SocialLink>
            </TextWithIcon>
          ) : null}
        </DataContainer>

        <ButtonContainer>
          <Button onClick={handleSubmit}>
            <Icon>arrow_back</Icon>Back
          </Button>
        </ButtonContainer>
      </SideBarContainer>
    </>
  );
}
