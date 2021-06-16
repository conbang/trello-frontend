import {User} from './user';

export interface INotification {
  id?: number;
  content: string;
  appUser?: User[]
}
