export interface CreatePostInterface {
  title: string;
  content: string;
  authorId: string;
}

export interface UpdatePostInterface {
  title?: string;
  content?: string;
}
