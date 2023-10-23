import { FC } from 'react';
import NewPostInput from 'src/components/UserProfile/NewPostInput';
import Post from 'src/components/UserProfile/Post';
import Posts from 'src/components/UserProfile/Posts';
import ProfileFriends from 'src/components/UserProfile/ProfileFriends';
import ProfileHeader from 'src/components/UserProfile/ProfileHeader';
import styled from 'styled-components';

const ProfileWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

const Profile: FC = () => {
  return (
    <div>
      <ProfileHeader />
      <ProfileWrapper>
        <div>
          <NewPostInput />
          <Posts />
        </div>
        <ProfileFriends />
      </ProfileWrapper>
    </div>
  );
};

export default Profile;
