import {User} from './user';

export interface Notification {
  id?: number;
  from: User;
  title: string;
  content: string;
}
