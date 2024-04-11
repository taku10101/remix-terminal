import {
  CreateUserInterface,
  UpdateUserInterface,
} from "../interface/user.interface ";
import {
  getAllUserRepository,
  getUserByIdRepository,
  createUserRepository,
  updateUserRepository,
  deleteUserRepository,
} from "../repositories/user.repository";

export async function getAllUserService() {
  const res = await getAllUserRepository();
  return res;
}

export async function getPostByIdService(id: string) {
  const res = await getUserByIdRepository(id);
  return res;
}

export async function createUserService(data: CreateUserInterface) {
  const res = await createUserRepository(data);
  return res;
}

export async function updateUserService(id: string, data: UpdateUserInterface) {
  const res = await updateUserRepository(id, data);
  return res;
}

export async function deleteUserService(id: string) {
  const res = await deleteUserRepository(id);
  return res;
}
