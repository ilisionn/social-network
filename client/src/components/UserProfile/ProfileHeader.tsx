import { FC } from 'react';
import styled from 'styled-components';
import { Button } from '../../ui/Button';

const ProfileHeaderWrap = styled.div`
  min-height: 400px;
  background-color: var(--white-background-color);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom: 1px solid var(--color-purple);
`;

const Image = styled.img`
  max-width: 100%;
  height: 230px;
  border-radius: 10px 10px 0 0;
  overflow: hidden;
  position: relative;

  @media (min-width: 1200px) {
    width: 976.75px;
    max-width: none;
  }
`;

const AvatarImg = styled.img`
  border-radius: 50%;
  position: absolute;
  top: 200px;
  right: 35%;
  /* transform: translateX(-50%); */
  @media (min-width: 1200px) {
    max-width: 200px;
  }
`;

const Btn = styled(Button)`
  position: absolute;
  top: 340px;
  right: 110px;
  color: var(--white-color-text);
  font-size: 17px;
`;

const UserInfo = styled.div`
  max-width: 400px;
  padding: 20px;
`;

const Name = styled.div`
  font-size: 30px;
  font-weight: 600;
  color: var(--color-purple);
`;

const Id = styled.div`
  opacity: 0.8;
  margin-top: 8px;
`;

const Bio = styled.div`
  opacity: 0.9;
  font-size: 14px;
  margin-top: 14px;
`;

const ProfileHeader: FC = () => {
  return (
    <ProfileHeaderWrap>
      <Image
        src="https://i.pinimg.com/564x/1d/ee/56/1dee56606131432d043afe250bfc8e3d.jpg"
        alt="background"
      />

      <Btn variant="primary">Edit profile</Btn>
      <AvatarImg
        src="https://i.pinimg.com/564x/fc/b6/21/fcb62147779ec96f8d9e91aff7955283.jpg"
        alt="icon"
      />
      <UserInfo>
        <Name>Firstname Lastname</Name>
        <Id>@nickname</Id>
        <Bio>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
        </Bio>
      </UserInfo>
    </ProfileHeaderWrap>
  );
};

export default ProfileHeader;
