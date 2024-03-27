import { json } from "@remix-run/node";
import {
  fetchAllPostsRepository,
  fetchPostByIDRepository,
  createPostRepository,
  updatePostRepository,
} from "../../../repositories/post.repository";

export const loader = async ({ params }: { params: { id?: string } }) => {
  if (params.id) {
    const post = await fetchPostByIDRepository(params.id);
    return json(post);
  } else {
    const posts = await fetchAllPostsRepository();
    return json(posts);
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
        result = await createPostRepository(
          requestData.get("title") as string,
          requestData.get("content") as string,
          requestData.get("authorId") as string
        );
        return result;

      case "PUT":
        requestData = new URLSearchParams(await request.text());
        result = await updatePostRepository(
          params.id as string,
          requestData.get("title") as string,
          requestData.get("content") as string
        );
        return result;

      default:
        return json({ error: "Method not allowed" }, { status: 405 });
    }
  } catch (error) {
    return json({ error: "Post not found" }, { status: 404 });
  }
};
