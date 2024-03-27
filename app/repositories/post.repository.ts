import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const fetchAllPostsRepository = async () => {
  const posts = await prisma.post.findMany();
  return posts;
};

export const fetchPostByIDRepository = async (id: string) => {
  const post = await prisma.post.findUnique({
    where: { id: id },
  });
  return post;
};

export const createPostRepository = async (
  title: string,
  content: string,
  authorId: string
) => {
  const post = await prisma.post.create({
    data: {
      title,
      content,
      published: false,
      authorId,
    },
  });
  return post;
};

export const updatePostRepository = async (
  id: string,
  title: string,
  content: string
) => {
  const post = await prisma.post.update({
    where: { id: id },
    data: {
      title,
      content,
    },
  });
  return post;
};

export const deletePostRepository = async (id: string) => {
  const post = await prisma.post.delete({
    where: { id: id },
  });
  return post;
};
