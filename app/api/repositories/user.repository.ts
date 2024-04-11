import { PrismaClient } from "@prisma/client";
import type {
  CreateUserInterface,
  UpdateUserInterface,
} from "../interface/user.interface ";

const Prisma = new PrismaClient();
export function getAllUser() {
  return Prisma.user.findMany();
}

export function getUserById(id: string) {
  return Prisma.user.findUnique({
    where: {
      id,
    },
  });
}

export function createUser(data: CreateUserInterface) {
  return Prisma.user.create({
    data,
  });
}

export function updateUser(id: string, data: UpdateUserInterface) {
  return Prisma.user.update({
    where: {
      id,
    },
    data,
  });
}

export function deleteUser(id: string) {
  return Prisma.user.delete({
    where: {
      id,
    },
  });
}
