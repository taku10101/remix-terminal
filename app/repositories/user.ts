import { PrismaClient } from "@prisma/client/extension";
const prisma = new PrismaClient();

export const fetchAllUsers = async () => {
  const users = await prisma.user.findMany();
  return users;
};

export const fetchUserByID = async (id: string) => {
  const user = await prisma.user.findUnique({
    where: { id: parseInt(id) },
  });
  return user;
};

export const createUser = async (
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

export const updateUser = async (id: string, name: string, email: string) => {
  const user = await prisma.user.update({
    where: { id: parseInt(id) },
    data: {
      name,
      email,
    },
  });
  return user;
};

export const deleteUser = async (id: string) => {
  const user = await prisma.user.delete({
    where: { id: parseInt(id) },
  });
  return user;
};
