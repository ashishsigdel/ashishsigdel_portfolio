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
  id: number;
  email: string;
  fullName: string;
  role: string;
};
