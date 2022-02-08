export type User = {
  _id: string;
  uid: string;
  email: string;
  password?: string;
  fullName: string;
  photoURL?: string;
  createdAt: Date;
};

export type UserMinimum = {
  _id: string;
  uid: string;
  fullName: string;
  photoURL?: string;
};
