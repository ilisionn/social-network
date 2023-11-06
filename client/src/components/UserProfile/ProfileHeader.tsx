import { FC } from 'react';
import styled from 'styled-components';
import { Button } from '../../ui/Button';
import { useAppSelector } from 'src/hooks/hooks';

const ProfileHeaderWrap = styled.div`
  min-height: 400px;
  background-color: var(--white-background-color);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom: 1px solid var(--color-purple);
  @media (max-width: 1200px) {
    width: 800.75px;
    max-width: none;
  }
  @media (max-width: 1024px) {
    width: 100%;
    max-width: none;
  }
`;

const UnderBgc = styled.div`
  @media (max-width: 1024px) {
    display: flex;
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: 230px;
  border-radius: 10px 10px 0 0;
  overflow: hidden;
  position: relative;
  width: 976.75px;

  @media (max-width: 1200px) {
    width: 100%;
    max-width: none;
  }
  @media (max-width: 1024px) {
    width: 100%;
    max-width: none;
  }
`;

const AvatarImg = styled.img`
  border-radius: 50%;
  position: absolute;
  top: 200px;
  right: 35%;
  max-width: 200px;
  /* transform: translateX(-50%); */
  @media (max-width: 1200px) {
    max-width: 150px;
    top: 250px;
  }
  @media (max-width: 1024px) {
    margin-left: 20px;
    height: 150px;
    position: static;
  }
`;

const Btn = styled(Button)`
  height: 45px;
  color: var(--white-color-text);
  font-size: 17px;
  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 30px;
    font-size: 16px;
    margin-top: 10px;
  }
`;

const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  padding: 20px;
  @media (max-width: 1024px) {
    display: block;
    margin-left: 50px;
  }
`;

const Name = styled.div`
  font-size: 30px;
  font-weight: 600;
  color: var(--color-purple);
  @media (max-width: 1200px) {
    font-size: 28px;
  }
  @media (max-width: 1100px) {
    font-size: 26px;
  }
  @media (max-width: 1024px) {
    font-size: 30px;
  }
`;

const Id = styled.div`
  opacity: 0.8;
  margin-top: 8px;
`;

const Bio = styled.div`
  max-width: 355px;
  opacity: 0.7;
  font-size: 14px;
  font-weight: 500;
  margin-top: 14px;
`;

const ProfileHeader: FC = () => {
  const { data } = useAppSelector((state) => state?.auth);
  return (
    <ProfileHeaderWrap>
      <Image
        src="https://i.pinimg.com/564x/1d/ee/56/1dee56606131432d043afe250bfc8e3d.jpg"
        alt="background"
      />

      <UnderBgc>
        <AvatarImg
          src="https://i.pinimg.com/564x/fc/b6/21/fcb62147779ec96f8d9e91aff7955283.jpg"
          alt="icon"
        />
        <UserInfo>
          <div>
            <Name>
              {data?.firstName} {data?.lastName}
            </Name>
            <Id>{data?.userName}</Id>
            <Bio>{data?.bio ? data.bio : 'Добавьте описание профиля'}</Bio>
          </div>
          <Btn variant="primary">Edit profile</Btn>
        </UserInfo>
      </UnderBgc>
    </ProfileHeaderWrap>
  );
};

export default ProfileHeader;
