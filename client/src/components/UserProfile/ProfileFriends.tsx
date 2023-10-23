import { FC } from 'react';
import Avatar from 'src/ui/Avatar';
import styled from 'styled-components';

const ProfileFriendsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 17px 10px;
  grid-template-areas:
    '. . . .'
    '. . . .';

  width: 320px;
  height: 220px;
  padding: 10px;
  border-radius: 10px;
  background-color: var(--white-background-color);
`;

const ProfileFriends: FC = () => {
  return (
    <ProfileFriendsWrapper>
      <Avatar
        size="large"
        src="https://i.pinimg.com/564x/e9/b9/44/e9b944514038b9a625512f7bfc52e283.jpg"
        username="@aqqw"
        alt="friendIcon"
      />
      <Avatar
        size="large"
        src="https://i.pinimg.com/564x/e9/b9/44/e9b944514038b9a625512f7bfc52e283.jpg"
        username="@tryzxc"
        alt="friendIcon"
      />
      <Avatar
        size="large"
        src="https://i.pinimg.com/564x/e9/b9/44/e9b944514038b9a625512f7bfc52e283.jpg"
        username="@bigboss"
        alt="friendIcon"
      />
      <Avatar
        size="large"
        src="https://i.pinimg.com/564x/e9/b9/44/e9b944514038b9a625512f7bfc52e283.jpg"
        username="@qwerty"
        alt="friendIcon"
      />
      <Avatar
        size="large"
        src="https://i.pinimg.com/564x/e9/b9/44/e9b944514038b9a625512f7bfc52e283.jpg"
        username="@lalala"
        alt="friendIcon"
      />
      <Avatar
        size="large"
        src="https://i.pinimg.com/564x/e9/b9/44/e9b944514038b9a625512f7bfc52e283.jpg"
        username="@brawlstars"
        alt="friendIcon"
      />
      <Avatar
        size="large"
        src="https://i.pinimg.com/564x/e9/b9/44/e9b944514038b9a625512f7bfc52e283.jpg"
        username="@animedlyaX"
        alt="friendIcon"
      />
      <Avatar
        size="large"
        src="https://i.pinimg.com/564x/e9/b9/44/e9b944514038b9a625512f7bfc52e283.jpg"
        username="@bivaet"
        alt="friendIcon"
      />
    </ProfileFriendsWrapper>
  );
};

export default ProfileFriends;
