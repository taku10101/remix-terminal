import { json } from "@remix-run/node";
import {
  fetchAllUsers,
  fetchUserByID,
  createUser,
  updateUser,
  deleteUser,
} from "../../repositories/user";

export const loader = async ({ params }: { params: { id?: string } }) => {
  if (params.id) {
    const user = await fetchUserByID(params.id);
    return json(user);
  } else {
    const users = await fetchAllUsers();
    return json(users);
  }
};

export const action = async (
  { params }: { params: { id?: string } },
  { request }: { request: Request }
) => {
  let requestData;
  let result;
  switch (request.method) {
    case "POST":
      requestData = await request.json();
      result = await createUser(
        requestData.name,
        requestData.email,
        requestData.password
      );
      return json(result);

    case "PUT":
      requestData = await request.json();
      result = await updateUser(
        requestData.id,
        requestData.name,
        requestData.email
      );
      return json(result);

    case "DELETE":
      result = await deleteUser(params.id!);
      return json(result);
    default:
      return json({ error: "Invalid request method" }, { status: 405 });
  }
};
