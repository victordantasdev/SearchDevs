import { useEffect, useState } from 'react';

export default function GetUserData(username) {
  const profileURL = `https://api.github.com/users/${username}`;
  const reposURL = `https://api.github.com/users/${username}/repos`;
  const [profile, setProfile] = useState({});

  useEffect(() => {
    (async () => {
      const isValid = await fetch(profileURL).then(res => res.ok);

      if (isValid) {
        const profileData = await fetch(profileURL).then(res => res.json());
        const reposData = await fetch(reposURL).then(res => res.json());

        return setProfile({
          ...profileData,
          reposData: reposData.sort(
            (a, b) => b.stargazers_count - a.stargazers_count
          ),
        });
      }

      return setProfile({ hasError: true });
    })();
  }, [profileURL, reposURL]);

  return { profile };
}
