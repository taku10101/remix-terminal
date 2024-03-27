import {
  fetchAllPostsRepository,
  fetchPostByIDRepository,
  createPostRepository,
  updatePostRepository,
  deletePostRepository,
} from "../../../repositories/post.repository";
import { json } from "@remix-run/node";

export const fetchAllPostService = async () => {
  const post = await fetchAllPostsRepository();
  return json(post);
};
export const fetchPostByIDService = async (id: string) => {
  const post = await fetchPostByIDRepository(id);
  return json(post);
};

export const createPostService = async (
  title: string,
  content: string,
  authorId: string
) => {
  const post = await createPostRepository(title, content, authorId);
  return json(post);
};

export const updatePostService = async (
  id: string,
  title: string,
  content: string
) => {
  const post = await updatePostRepository(id, title, content);
  return json(post);
};
export const deletePostService = async (id: string) => {
  const post = await deletePostRepository(id);
  return json(post);
};
