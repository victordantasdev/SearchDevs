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
        <link
          rel='icon'
          href='https://images.vexels.com/media/users/3/132068/isolated/preview/f9bb81e576c1a361c61a8c08945b2c48-iacute-cone-de-pesquisa-by-vexels.png'
        />
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
