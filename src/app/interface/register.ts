export interface Register {
  id: number;
  avatar?: string;
  email: string;
  username: string;
  password: string;
  phone: string;
  confirmPassword: string;
  role: [];
  oldPassWord?: string;
  newPassWord?: string
}
