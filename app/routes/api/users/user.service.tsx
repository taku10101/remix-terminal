import {
  createUserRepository,
  deleteUserRepository,
  fetchAllUsersRepository,
  fetchUserByIDRepository,
  updateUserRepository,
} from "../../../repositories/user.repository";
import { json } from "@remix-run/node";

export const fetchAllUserService = async () => {
  const users = await fetchAllUsersRepository();
  return json(users);
};

export const fetchUserByIDService = async (id: string) => {
  try {
    const user = await fetchUserByIDRepository(id);
    return json(user);
  } catch (error) {
    return json({ error: "User not found" }, { status: 404 });
  }
};

export const createUserService = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    const user = await createUserRepository(name, email, password);
    return json(user);
  } catch (error) {
    return json({ error: "User not found" }, { status: 404 });
  }
};

export const updateUserService = async (
  id: string,
  name: string,
  email: string
) => {
  try {
    const user = await updateUserRepository(id, name, email);
    return json(user);
  } catch (error) {
    return json({ error: "User not found" }, { status: 404 });
  }
};

export const deleteUserService = async (id: string) => {
  try {
    const user = await deleteUserRepository(id);
    return json(user);
  } catch (error) {
    return json({ error: "User not found" }, { status: 404 });
  }
};
