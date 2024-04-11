import {
  CreatePostInterface,
  UpdatePostInterface,
} from "../interface/post.interface";
import {
  getAllPostRepository,
  getPostByIdRepository,
  createPostRepository,
  updatePostRepository,
  deletePostRepository,
} from "../repositories/post.repository";

export async function getAllPostService() {
  const res = await getAllPostRepository();
  return res;
}

export async function getPostByIdService(id: string) {
  const res = await getPostByIdRepository(id);
  return res;
}

export async function createPostService(data: CreatePostInterface) {
  const res = await createPostRepository(data);
  return res;
}

export async function updatePostService(id: string, data: UpdatePostInterface) {
  const res = await updatePostRepository(id, data);
  return res;
}

export async function deletePostService(id: string) {
  const res = await deletePostRepository(id);
  return res;
}
