import { Wrapper } from './Avatar.styled';

export default function Avatar({ userData }) {
  const { avatar, user } = userData;
  return (
    <Wrapper>
      <div>
        <img src={avatar} alt={user} title={user} />
      </div>
    </Wrapper>
  );
}
