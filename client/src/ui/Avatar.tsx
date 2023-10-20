import styled from 'styled-components';

const sizeStyles = {
  small: '40px',
  medium: '53px',
  large: '70px',
};

type Props = {
  size: 'small' | 'medium' | 'large';
  username?: string;
  src: string;
  alt?: string;
};

const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const AvatarImage = styled.img<Props>`
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
  width: ${({ size }) => sizeStyles[size] || sizeStyles.medium};
  height: ${({ size }) => sizeStyles[size] || sizeStyles.medium};
`;

const Username = styled.div`
  margin-top: 5px;
  /* font-weight: 500; */
  font-size: 12px;
  color: var(--color-text);
  max-width: 70px;
  word-wrap: break-word;
  opacity: 0.8;
`;

const Avatar: React.FC<Props> = ({ size, username, src }) => (
  <AvatarContainer>
    <AvatarImage size={size} src={src} alt={username} />
    {username && <Username>{username}</Username>}
  </AvatarContainer>
);
export default Avatar;
