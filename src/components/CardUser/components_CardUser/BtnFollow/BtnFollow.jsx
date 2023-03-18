import { Btn } from './BtnFollow.styled';

export default function BtnFollow({ userCard, stateFollowers }) {
  const { followers, setFollowers } = stateFollowers;

  const followsUser = followers.some(
    ({ followerId }) => followerId === userCard
  );

  const handlerClick = () => {
    setFollowers(prew => {
      if (followsUser) {
        return followers.filter(({ followerId }) => followerId !== userCard);
      } else {
        return [...prew, { followerId: userCard }];
      }
    });
  };

  return (
    <Btn active={followsUser} onClick={handlerClick}>
      {followsUser ? 'Following' : 'Follow'}
    </Btn>
  );
}
