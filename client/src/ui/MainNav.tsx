import styled from 'styled-components';

import { CustomLink } from './CustomLink';
import { useAppDispatch, useAppSelector } from 'src/hooks/hooks';
import { HiOutlineRectangleGroup } from 'react-icons/hi2';
import { TbMessageCircle2 } from 'react-icons/tb';
import { IoExitOutline } from 'react-icons/io5';
import {
  PiUsersThreeBold,
  PiNewspaper,
  PiUserBold,
  PiMoonBold,
} from 'react-icons/pi';
import { Button } from './Button';
import { logout } from 'src/redux/slices/auth';
import { useNavigate } from 'react-router-dom';

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  span {
    margin-left: 10px;
  }
`;

const RouterLink = styled(CustomLink)`
  font-size: 17px;
  font-weight: 400;
  opacity: 0.8;
  transition: all 0.1s ease;
  @media (max-width: 1024px) {
    font-size: 15px;
  }

  &:hover {
    color: var(--color-purple);
  }
`;
const GroupBtns = styled.li`
  display: flex;
  flex-direction: column;
  gap: 7px;

  span {
    opacity: 0.8;
  }
`;

export default function MainNav() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const id = useAppSelector((state) => state.auth.data?.id);
  const handleExit = () => {
    dispatch(logout());
    localStorage.removeItem('token');
    navigate('/login');
  };
  return (
    <nav>
      <NavList>
        <li>
          <RouterLink to={`/profile/${id}`}>
            <PiUserBold />
            <span>My profile</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/news">
            <PiNewspaper />
            <span>News</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/messanger">
            <TbMessageCircle2 />
            <span>Messsanger</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/friends">
            <PiUsersThreeBold />
            <span>Friends</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/communities">
            <HiOutlineRectangleGroup />
            <span>Communities</span>
          </RouterLink>
        </li>
        <GroupBtns>
          <Button onClick={handleExit} variant="regular">
            <IoExitOutline />
            <span>Выйти</span>
          </Button>
          <Button variant="regular">
            <PiMoonBold />
            <span>Тема</span>
          </Button>
        </GroupBtns>
      </NavList>
    </nav>
  );
}
