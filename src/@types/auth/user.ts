export type UserProps = {
  username: string;
  password: string;
  name: string;
  _id: string;
  token: string;
  refreshToken: string;
  email: string;
  phoneNumber: string;
  role: "User" | "Doctor" | "NGO";
};

export type AxiosUserProps = {
  data: { user: Omit<UserProps, "token">; token: string };
};

export type LoginProps = Pick<UserProps, "password"> &
  Partial<Pick<UserProps, "email" | "username">>;

export type RegisterProps = Pick<UserProps, "email" | "password" | "username">;
