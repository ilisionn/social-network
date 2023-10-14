import { prisma } from '../prisma/prisma-client.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
export const register = async (req, res) => {
  try {
    const { email, age, password, firstName, lastName, userName } = req.body;

    if (!lastName || !firstName || !password || !age || !email || !userName) {
      return res
        .status(400)
        .json({ message: 'Пожалуйста заполните обязательные поля' });
    }

    const isUserExist = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (isUserExist) {
      return res
        .status(400)
        .json({ message: 'Пользователь с такой почтой уже существует' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const user = await prisma.user.create({
      data: {
        userName,
        firstName,
        lastName,
        age,
        email,
        password: hashPassword,
      },
    });

    const secret = process.env.JWT_SECRET;

    if (user && secret) {
      res.status(201).json({
        id: user.id,
        userName: user.userName,
        firstName: user.firstName,
        lastName: user.lastName,
        age: user.age,
        email: user.email,
        token: jwt.sign({ id: user.id }, secret, { expiresIn: '15d' }),
      });
    } else {
      res.status(500).json({ message: 'Не удалось создать пользователя' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Что-то пошло не так' });
    console.log(error.message);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ message: 'Введите обязательные поля' });
    }

    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    const isPasswordCorrent =
      user && (await bcrypt.compare(password, user.password));
    const secret = process.env.JWT_SECRET;

    console.log(isPasswordCorrent);

    if (user && isPasswordCorrent && secret) {
      res.status(201).json({
        id: user.id,
        userName: user.userName,
        firstName: user.firstName,
        lastName: user.lastName,
        age: user.age,
        email: user.email,
        token: jwt.sign({ id: user.id }, secret, { expiresIn: '15d' }),
      });
    } else {
      res.status(400).json({ message: 'Не удалось войти' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Произошла ошибка' });
    console.log(error.message);
  }
};

export const current = async (req, res) => {
  res.status(201).json(req.user);
};

export const changeUserData = async (req, res) => {
  const {
    email,
    oldPassword,
    newPassword,
    firstName,
    lastName,
    age,
    userName,
  } = req.body;
  try {
    if (!email) {
      return res.status(400).json({ message: 'Введите почту' });
    }

    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    let data = {};

    if (userName || age || lastName || firstName) {
      data = {
        userName: userName ? userName : user.userName,
        age: age ? age : user.age,
        lastName: lastName ? lastName : user.lastName,
        firstName: firstName ? firstName : user.firstName,
      };
    }

    const salt = await bcrypt.genSalt(10);
    const hashNewPassword = await bcrypt.hash(newPassword, salt);

    if (oldPassword && newPassword) {
      const isPasswordCorrent =
        user && (await bcrypt.compare(oldPassword, user.password));
      console.log(isPasswordCorrent);

      if (!isPasswordCorrent) {
        return res.status(400).json({
          message: 'Введенный вами пароль не совпадает с вашим паролем',
        });
      }
    }
    console.log(data);

    if (user) {
      await prisma.user.update({
        where: {
          email,
        },
        data: {
          password: hashNewPassword,
          age: data.age,
          firstName: data.firstName,
          lastName: data.lastName,
          userName: data.userName,
        },
      });
    }

    return res.status(201).json('Данные обновлены');
  } catch (error) {
    res
      .status(500)
      .json({
        message: 'Произошла ошибка обновления данных, повторите попытку',
      });
    console.log(error.message);
  }
};

//! Идея: При нажатии на 'изменить данные' вылазит модалка с измененными данными и кнопка подтверждения изменения данных.
