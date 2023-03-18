import { useEffect, useState } from 'react';

import users from 'db/users.json';

import Logo from 'components/Logo';

import { Avatar, BtnFollow, InfoUser } from './components_CardUser';

import { Card } from './CardUser.styled';

export default function CardUser() {
  const [followers, setFollowers] = useState(
    JSON.parse(localStorage.getItem('follow')) || []
  );

  useEffect(() => {
    localStorage.setItem('follow', JSON.stringify(followers));
  }, [followers]);

  return (
    <>
      {users.map(user => (
        <Card key={user.id}>
          <Logo />
          <Avatar userData={user} />
          <InfoUser userData={user} followers={followers} />
          <BtnFollow
            userCard={user.id}
            stateFollowers={{ followers, setFollowers }}
          />
        </Card>
      ))}
    </>
  );
}
