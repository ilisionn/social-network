import { FC, useState } from 'react';
// import Row from '../ui/Row';
import SearchInput from '../ui/SearchInput';
import styled from 'styled-components';
import { FaUserCircle } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import { RiNotificationBadgeLine } from 'react-icons/ri';

const HeaderStyled = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--secondary-background-color);
  border-radius: 0 0 10px 10px;
`;

const Icons = styled.div`
  svg {
    width: 60px;
    height: 22px;
    color: var(--light-background-color);
    /* color: red; */
  }
`;

const Nav: FC = () => {
  const [searchVal, setSearchVal] = useState('');
  return (
    <HeaderStyled>
      <div
        style={{
          color: 'var(--color-purple)',
          fontSize: 30,
          fontWeight: 700,
          paddingLeft: 10,
        }}
      >
        Sovion
      </div>
      <SearchInput
        type="text"
        placeholder="Search..."
        value={searchVal}
        onChange={(e) => setSearchVal(e.target.value)}
      />

      <Icons>
        <RiNotificationBadgeLine />
        <FiSettings />
        <FaUserCircle />
      </Icons>
    </HeaderStyled>
  );
};

export default Nav;
