export type User = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  createdAt: string | Date;
  updatedAt: string | Date;
};

export type UserResponse = {
  message: string;
  users?: User[];
};
