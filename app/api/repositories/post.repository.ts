import { PrismaClient } from "@prisma/client";
import type { CreatePostInterface } from "../interface/post.interface";
const Prisma = new PrismaClient();
export function getAllPost() {
  return Prisma.post.findMany();
}

export function getPostById(id: string) {
  return Prisma.post.findUnique({
    where: {
      id,
    },
  });
}

export function createPost(data: CreatePostInterface) {
  return Prisma.post.create({
    data,
  });
}

export function updatePost(id: string, data: CreatePostInterface) {
  return Prisma.post.update({
    where: {
      id,
    },
    data,
  });
}

export function deletePost(id: string) {
  return Prisma.post.delete({
    where: {
      id,
    },
  });
}
