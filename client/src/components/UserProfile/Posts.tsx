import { FC } from 'react';
import styled from 'styled-components';
import Post, { IPost } from './Post';
import { useQuery } from '@tanstack/react-query';
import { getUserPosts } from 'src/api/post/getUserPosts';
import { useParams } from 'react-router-dom';

const PostsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const Posts: FC = () => {
  const { id } = useParams();
  const { data } = useQuery<IPost[]>({
    queryKey: ['posts', id],
    queryFn: () => (id !== undefined ? getUserPosts(id) : Promise.resolve([])),
  });
  return (
    <PostsWrapper>
      {data && data.length > 0 ? (
        data.map((post) => (
          <Post
            id={post.id}
            key={post.id}
            text={post.text}
            likes={post.likes}
            commentsAmount={post.commentsAmount}
            views={post.views}
            createdAt={post.createdAt}
          />
        ))
      ) : (
        <p>No posts found</p>
      )}
    </PostsWrapper>
  );
};

export default Posts;
