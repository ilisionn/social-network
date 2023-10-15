import { prisma } from '../prisma/prisma-client.js';

export const addCommet = async (req, res) => {
  try {
    const postId = req.params.id;
    const { body } = req.body;

    if (!body || !postId)
      return res.status(400).json({ message: 'Введите комментарий' });

    const comment = await prisma.comment.create({
      data: {
        body,
        postId,
      },
    });
    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json({ message: 'Не удалось создать комментарий' });
  }
};

export const getComments = async (req, res) => {
  try {
    const postId = req.params.id;

    const comments = await prisma.comment.findMany({
      where: {
        postId,
      },
    });

    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ message: 'Не удалось получить комментарии' });
  }
};
export const deleteComment = async (req, res) => {
  try {
    const { id } = req.body;
    await prisma.comment.delete({
      where: {
        id,
      },
    });
    res.status(200).json({ message: 'Комментарий удален' });
  } catch (error) {
    res.status(500).json({ message: 'Не удалось удалить комментарий' });
  }
};
