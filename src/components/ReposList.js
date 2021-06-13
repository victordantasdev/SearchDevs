import {
  Repo,
  RepoLink,
  ReposListContainer,
  Dot,
} from '../styles/ReposListContainer';
import TextWithIcon from './TextWithIcon';

function UpdatedAt(updated_at) {
  let date1 = new Date(updated_at);
  let date2 = new Date();

  let date1Format = `${
    date1.getMonth() + 1
  }/${date1.getDate()}/${date1.getFullYear()}`;
  let date2Format = `${
    date2.getMonth() + 1
  }/${date2.getDate()}/${date2.getFullYear()}`;

  let date1Final = new Date(date1Format);
  let date2Final = new Date(date2Format);

  let difTime = date2Final.getTime() - date1Final.getTime();
  let difDays = difTime / (1000 * 3600 * 24);
  return difDays;
}

export default function ReposList(props) {
  const reposData = props.reposData;
  return (
    <>
      <ReposListContainer>
        {reposData.map(item => {
          return (
            <Repo key={item.name}>
              <RepoLink
                href={item.html_url}
                target='_blank'
                rel='noopener noreferrer'
              >
                {item.name}
              </RepoLink>
              <p>{item.description}</p>
              <TextWithIcon icon='star_border' color='#3B4252'>
                {item.stargazers_count} stars <Dot></Dot> Updated{' '}
                {UpdatedAt(item.updated_at)} days ago
              </TextWithIcon>
            </Repo>
          );
        })}
      </ReposListContainer>
    </>
  );
}
