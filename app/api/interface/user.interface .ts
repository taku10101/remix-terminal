export interface CreateUserInterface {
  email: string;
  name: string;
  password: string;
}

export interface UpdateUserInterface {
  email?: string;
  name?: string;
  password?: string;
}
