export type userLogin = {
  username: string;
  password: string;
};

export type userLoginTwoFactor = {
  otp: string;
  username: string;
  password: string;
};

export type User = {
  id: string;
  email: string;
  fullName: string;
  role: string;
};

export type UserAdmin = {
  id: number;
  fullName: string;
  email: string;
  role: string;
  newsletter?: boolean;
};
