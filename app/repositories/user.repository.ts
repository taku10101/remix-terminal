import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const fetchAllUsersRepository = async () => {
  const users = await prisma.user.findMany();
  return users;
};

export const fetchUserByIDRepository = async (id: string) => {
  const user = await prisma.user.findUnique({
    where: { id: id },
  });
  return user;
};

export const createUserRepository = async (
  name: string,
  email: string,
  password: string
) => {
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password,
    },
  });
  return user;
};

export const updateUserRepository = async (
  id: string,
  name: string,
  email: string
) => {
  const user = await prisma.user.update({
    where: { id: id },
    data: {
      name,
      email,
    },
  });
  return user;
};

export const deleteUserRepository = async (id: string) => {
  const user = await prisma.user.delete({
    where: { id: id },
  });
  return user;
};
