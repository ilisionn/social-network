import axios from '../../axios';
export const getOnePost = async () => {
  const { data } = await axios.get(
    `posts/a6607868-a50b-47cd-a0d0-1df52f5cf7c0`,
  );
  return data;
};
