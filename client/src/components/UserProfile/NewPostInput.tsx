import { FC } from 'react';
import Avatar from 'src/ui/Avatar';
import styled from 'styled-components';
import { PiPaperclip, PiPaperPlaneRight } from 'react-icons/pi';
import Input from 'src/ui/Input';

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
`;

const NewPostInput: FC = () => {
  return (
    <NewPostInputWrapper>
      <Avatar
        size="small"
        src="https://i.pinimg.com/564x/e0/01/01/e0010197a1081f1183587099ef2638b9.jpg"
        alt="icon"
      />
      <Input
        customBorder="none"
        customHeight="14px"
        customWidth="435px"
        type="text"
        placeholder="What's new?"
      />
      <PiPaperclip />
      <PiPaperPlaneRight />
    </NewPostInputWrapper>
  );
};

export default NewPostInput;
