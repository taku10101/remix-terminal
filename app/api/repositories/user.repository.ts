import { PrismaClient } from "@prisma/client";
import type {
  CreateUserInterface,
  UpdateUserInterface,
} from "../interface/user.interface ";

const Prisma = new PrismaClient();
export function getAllUserRepository() {
  return Prisma.user.findMany();
}

export function getUserByIdRepository(id: string) {
  return Prisma.user.findUnique({
    where: {
      id,
    },
  });
}

export function createUserRepository(data: CreateUserInterface) {
  return Prisma.user.create({
    data,
  });
}

export function updateUserRepository(id: string, data: UpdateUserInterface) {
  return Prisma.user.update({
    where: {
      id,
    },
    data,
  });
}

export function deleteUserRepository(id: string) {
  return Prisma.user.delete({
    where: {
      id,
    },
  });
}
