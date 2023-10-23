import { FC } from 'react';
import Avatar from 'src/ui/Avatar';
import styled from 'styled-components';
import Row from './../../ui/Row';
import { PiHeartFill, PiHeartLight } from 'react-icons/pi';
import { FaRegComment } from 'react-icons/fa6';
import { BiRepost } from 'react-icons/bi';

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 580px;
  height: 100%;
  margin-top: 10px;
  padding: 10px;
  border-radius: 10px;
  background-color: var(--white-background-color);
`;

const Created = styled.div`
  font-size: 13px;
  opacity: 0.5;
  margin-left: 4px;
  margin-top: 10px;
`;

const Name = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: var(--color-purple);
  margin-left: 4px;
`;

const PostText = styled.div`
  padding: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 14px;
  color: var(--color-text);
  opacity: 0.7;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 30px;
  border: none;
  border-radius: 9px;
  background-color: var(--main-background-color);
  cursor: pointer;

  span {
    font-weight: 500;
    font-size: 14px;
    opacity: 0.6;
  }

  svg {
    width: 40px;
    height: 22px;
    color: var(--color-purple);
  }
`;

const Post: FC = () => {
  return (
    <PostWrapper>
      <Row type="horizontal">
        <Avatar
          size="medium"
          src="https://i.pinimg.com/564x/e9/b9/44/e9b944514038b9a625512f7bfc52e283.jpg"
          alt="img"
        />
        <Row type="vertical">
          <Name>@aqqw</Name>
          <Created>12 мая в 15:47</Created>
        </Row>
      </Row>
      <PostText>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum debitis
        dolor officiis sequi dolorem ipsam facere ad, quam beatae, eveniet
        laboriosam aliquid ipsa expedita perspiciatis rem laudantium veniam
        eligendi voluptatem.
      </PostText>
      <Row type="horizontal">
        <Button>
          <PiHeartFill />
          <span>3461</span>
        </Button>
        <Button>
          <FaRegComment />
          <span>10</span>
        </Button>
        <Button>
          <BiRepost />
        </Button>
      </Row>
    </PostWrapper>
  );
};

export default Post;
