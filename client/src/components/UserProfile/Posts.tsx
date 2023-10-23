import { FC } from 'react';
import styled from 'styled-components';
import Post from './Post';

const PostsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`;

const Posts: FC = () => {
  return (
    <PostsWrapper>
      <Post />
      <Post />
      <Post />
    </PostsWrapper>
  );
};

export default Posts;
