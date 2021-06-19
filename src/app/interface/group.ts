import {User} from './user';

export interface Group {
  id: number;
  name: string;
  type: string;
  description: string;
  roleUser: string;
  user: User;
}
