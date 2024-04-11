import { PrismaClient } from "@prisma/client";
import type {
  CreatePostInterface,
  UpdatePostInterface,
} from "../interface/post.interface";
const Prisma = new PrismaClient();
export function getAllPostRepository() {
  return Prisma.post.findMany();
}

export function getPostByIdRepository(id: string) {
  return Prisma.post.findUnique({
    where: {
      id,
    },
  });
}

export function createPostRepository(data: CreatePostInterface) {
  return Prisma.post.create({
    data,
  });
}

export function updatePostRepository(id: string, data: UpdatePostInterface) {
  return Prisma.post.update({
    where: {
      id,
    },
    data,
  });
}

export function deletePostRepository(id: string) {
  return Prisma.post.delete({
    where: {
      id,
    },
  });
}
