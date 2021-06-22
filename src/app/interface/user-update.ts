export interface UserUpdate {
  id: number;
  avatar?: string;
  email: string;
  userName: string;
  passWord: string;
  phone: number;
  confirmPassword: string;
  role: [];
  oldPassWord?: string;
  newPassWord?: string;
}
