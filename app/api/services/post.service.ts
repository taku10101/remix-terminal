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
  return getAllPostRepository();
}

export async function getPostByIdService(id: string) {
  return getPostByIdRepository(id);
}

export async function createPostService(data: CreatePostInterface) {
  return createPostRepository(data);
}

export async function updatePostService(id: string, data: UpdatePostInterface) {
  return updatePostRepository(id, data);
}

export async function deletePostService(id: string) {
  return deletePostRepository(id);
}
