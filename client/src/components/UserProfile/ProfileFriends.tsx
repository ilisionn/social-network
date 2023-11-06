import { FC } from 'react';
import Avatar from 'src/ui/Avatar';
import styled from 'styled-components';

const ProfileFriendsWrapper = styled.div`
  width: 320px;
  height: 245px;
  padding: 10px;
  border-radius: 10px;
  background-color: var(--white-background-color);
  @media (max-width: 1200px) {
    width: 270px;
  }
  @media (max-width: 1024px) {
    width: 97%;
    height: 100%;
    margin-bottom: 20px;
  }
`;

const FriendsTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 15px;
`;

const Friends = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  grid-template-areas:
    '. . . .'
    '. . . .';
  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      '. . .'
      '. . .';
    gap: 11px 5px;
  }
  @media (max-width: 1024px) {
    display: flex;
    justify-content: space-between;
  }
`;

const ProfileFriends: FC = () => {
  return (
    <ProfileFriendsWrapper>
      <FriendsTitle>Friends</FriendsTitle>
      <Friends>
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
        {/* <Avatar
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
        /> */}
      </Friends>
    </ProfileFriendsWrapper>
  );
};

export default ProfileFriends;
