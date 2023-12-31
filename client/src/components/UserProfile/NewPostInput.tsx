import { ChangeEvent, FC, useState } from 'react';
import Avatar from 'src/ui/Avatar';
import styled from 'styled-components';
import { PiPaperclip, PiPaperPlaneRight } from 'react-icons/pi';
import Input from 'src/ui/Input';
import { useMutation } from '@tanstack/react-query';
import axios from '../../axios.ts';
import { Button } from 'src/ui/Button.tsx';
import { useQueryClient, InvalidateQueryFilters } from '@tanstack/react-query';
const NewPostInputWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 610px;
  width: 580px;
  height: 40px;
  background-color: var(--white-background-color);
  border-radius: 10px;
  padding: 10px;
  gap: 10px;
  svg {
    cursor: pointer;
    width: 26px;
    height: 30px;
    color: var(--color-purple);
  }
  @media (max-width: 1200px) {
    width: 480px;
  }
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const NewPostInput: FC = () => {
  const [postText, setPostText] = useState('');
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (newPost: { title: string; text: string }) => {
      return axios.post('/posts/create-post', newPost);
    },
    onSuccess: () =>
      queryClient.invalidateQueries('posts' as InvalidateQueryFilters),
  });

  const handleClick = () => {
    mutate({ title: 'title', text: postText });
    setPostText('');
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleClick();
    }
  };

  return (
    <NewPostInputWrapper>
      <Avatar
        size="small"
        src="https://i.pinimg.com/564x/e0/01/01/e0010197a1081f1183587099ef2638b9.jpg"
        alt="icon"
      />
      <Input
        $width="100%"
        $height="30px"
        $fontSize="15px"
        type="text"
        placeholder="What's new?"
        value={postText}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setPostText(e.target.value)
        }
        onKeyDown={handleKeyDown}
      />
      <PiPaperclip />

      <Button
        onClick={handleClick}
        style={{ width: 60, backgroundColor: '#fff' }}
      >
        <PiPaperPlaneRight />
      </Button>
    </NewPostInputWrapper>
  );
};

export default NewPostInput;
