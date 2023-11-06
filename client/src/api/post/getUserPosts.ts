import axios from '../../axios';
export const getUserPosts = async (id: string) => {
  const { data } = await axios.get(`posts/user-posts/${id}`);
  return data;
};
