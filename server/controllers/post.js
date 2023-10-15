import { prisma } from '../prisma/prisma-client.js';

export const getAllPosts = async (req, res) => {
  try {
    const posts = await prisma.post.findMany();
    res.status(201).json(posts);
  } catch (error) {}
};

export const getOnePost = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.post.update({
      where: {
        id,
      },
      data: {
        views: {
          increment: 1,
        },
      },
    });

    const post = await prisma.post.findFirst({
      where: {
        id,
      },
    });

    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: 'Не удалось найти статью' });
    console.log(error.message);
  }
};

export const createPost = async (req, res) => {
  try {
    const { title, text } = req.body;

    if (!title || !text) {
      return res.status(400).json({ message: 'Все поля обязательны' });
    }

    await prisma.post.create({
      data: {
        title: title,
        text: text,
        authorId: req.user.id,
      },
    });
    res.status(201).json({ message: 'Статья успешно создана' });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Ошибка создания статьи' });
  }
};
export const patchPost = async (req, res) => {
  try {
    const { id } = req.params;
    const { text, title } = req.body;

    if (!text || !title) {
      return res
        .status(400)
        .json({ message: 'Все поля должны быть заполнены' });
    }
    prisma.post.fin;
    const updatePost = await prisma.post.update({
      where: {
        id,
      },
      data: {
        title,
        text,
        views: {
          increment: 1,
        },
      },
    });
    res.status(200).json(updatePost);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Не удалось обновить статью' });
  }
};

export const deletePost = async (req, res) => {
  try {
    const { id } = req.body;

    await prisma.post.delete({
      where: {
        id,
      },
    });
    res.status(200).json({ message: 'Вы удалили статью' });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Не удалось удалить статью' });
  }
};
