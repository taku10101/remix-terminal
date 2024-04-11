import { ActionFunction, json } from "@remix-run/node";
import {
  createUserService,
  deleteUserService,
  getAllUserService,
  getUserByIdService,
  updateUserService,
} from "~/api/services/user.service";

export const loader = async (id: string) => {
  if (!id) {
    const res = await getAllUserService();
    return json(res);
  }
  const res = await getUserByIdService(id);
  return json(res);
};

export const action: ActionFunction = async ({ request }) => {
  const body = new URLSearchParams(await request.text());
  const id = body.get("id") as string;
  const name = body.get("name") as string;
  const email = body.get("email") as string;
  const password = body.get("password") as string;
  if (request.method === "POST" && id) {
    const res = await createUserService({ name, email, password });
    return json(res);
  }
  if (request.method === "PUT" && id) {
    const res = await updateUserService(id, { name, email, password });
    return json(res);
  }
  if (request.method === "DELETE" && id) {
    const res = await deleteUserService(id);
    return json(res);
  }
  return json({ message: "Method not allowed" }, { status: 405 });
};
