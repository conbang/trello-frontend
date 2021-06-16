import {Role} from './role';

export interface Token {
  id?: number;
  username?: string;
  email?: string;
  token?: string;
  avatar?: string;
  roles?: Role[];
}
