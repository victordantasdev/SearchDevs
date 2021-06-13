import { Icon } from '@material-ui/core';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router-dom';
import {
  Form,
  SearchContainer,
  Title,
  Input,
  Button,
} from '../styles/SearchStyles';

export default function Home() {
  const [userName, setUserName] = useState('');

  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    history.push(`/profile/${userName}`);
  };
  return (
    <>
      <Helmet>
        <link rel='icon' href='../assets/images/search_icon.png' />
        <title>Search Devs | Home</title>
      </Helmet>
      <SearchContainer>
        <Title>Search Devs</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            type='text'
            placeholder='Type the user name here...'
            onChange={e => setUserName(e.target.value)}
            required
          />

          <Button type='submit'>
            <Icon>search</Icon>search
          </Button>
        </Form>
      </SearchContainer>
    </>
  );
}
