import { json } from "@remix-run/node";
import {
  fetchAllUserService,
  fetchUserByIDService,
  createUserService,
  updateUserService,
  deleteUserService,
} from "./user.service";

export const loader = async ({ params }: { params: { id?: string } }) => {
  if (params.id) {
    const user = await fetchUserByIDService(params.id);
    return json(user);
  } else {
    const users = await fetchAllUserService();
    return json(users);
  }
};

export const action = async (
  { params }: { params: { id?: string } },
  { request }: { request: Request }
) => {
  let requestData;
  let result;
  try {
    switch (request.method) {
      case "POST":
        requestData = new URLSearchParams(await request.text());
        result = await createUserService(
          requestData.get("name") as string,
          requestData.get("email") as string,
          requestData.get("password") as string
        );
        return result;

      case "PUT":
        requestData = new URLSearchParams(await request.text());
        result = await updateUserService(
          params.id as string,
          requestData.get("name") as string,
          requestData.get("email") as string
        );
        return result;

      case "DELETE":
        result = await deleteUserService(params.id as string);
        return result;

      default:
        return json({ error: "Method not allowed" }, { status: 405 });
    }
  } catch (error) {
    return json({ error: "User not found" }, { status: 404 });
  }
};
