import { useEffect, useState } from 'react';

import { List } from './InfoUser.styled';
import { changeNumber } from 'utils';
export default function InfoUser({ userData, followers }) {
  const [addFoll, setAddFoll] = useState();

  useEffect(() => {
    setAddFoll(followers.some(({ followerId }) => followerId === userData.id));
  }, [followers, userData.id]);

  return (
    <List>
      <li>
        <span>{userData.tweets} </span>
        <span>twets</span>
      </li>
      <li>
        <span>
          {addFoll
            ? changeNumber(userData.followers + 1)
            : changeNumber(userData.followers)}{' '}
        </span>
        <span>Followers</span>
      </li>
    </List>
  );
}
