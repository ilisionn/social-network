import { FC, useState } from 'react';
import Avatar from 'src/ui/Avatar';
import styled from 'styled-components';
import Row from './../../ui/Row';
import { PiHeartFill, PiHeart } from 'react-icons/pi';
import { FaRegComment } from 'react-icons/fa6';
import { BiRepost } from 'react-icons/bi';
import dateFormat from 'dateformat';
import {
  InvalidateQueryFilters,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';

import axios from '../../axios.ts';
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

  @media (max-width: 1200px) {
    width: 480px;
  }
  @media (max-width: 1024px) {
    width: 98.9%;
    padding-right: 0px;
  }
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
  @media (max-width: 1024px) {
    padding-right: 0px;
    width: 100%;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 30px;
  border: 1px solid var(--color-purple);
  border-radius: 9px;
  background-color: var(--white-background-color);
  cursor: pointer;

  span {
    font-weight: 500;
    font-size: 14px;
    opacity: 0.6;
  }

  svg {
    width: 30px;
    height: 20px;
    color: var(--color-purple);
  }
`;
export interface IPost {
  id?: string;
  text: string;
  views: number;
  likes: number;
  commentsAmount: number;
  createdAt: string;
  authorId?: string;
}
const Post: FC<IPost> = ({
  id,
  text,
  likes,
  commentsAmount,
  // views,
  createdAt,
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: () => {
      return axios.patch(
        isLiked ? `posts/likePost/${id}` : `posts/removeLikePost/${id}`,
      );
    },
    onSuccess: () =>
      queryClient.invalidateQueries(['posts', id] as InvalidateQueryFilters),
  });

  const handleLikePost = () => {
    if (!isLiked) {
      mutate();
      setIsLiked(true);
    } else {
      mutate();
      setIsLiked(false);
    }
  };

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
          <Created>{dateFormat(createdAt, 'DDDD h:MM TT')}</Created>
        </Row>
      </Row>
      <PostText>{text}</PostText>
      <Row style={{ gap: 8 }} type="horizontal">
        <Button onClick={handleLikePost}>
          {isLiked ? <PiHeartFill /> : <PiHeart />}
          <span>{likes}</span>
        </Button>
        <Button>
          <FaRegComment />
          <span>{commentsAmount}</span>
        </Button>
        <Button>
          <BiRepost />
        </Button>
      </Row>
    </PostWrapper>
  );
};

export default Post;
