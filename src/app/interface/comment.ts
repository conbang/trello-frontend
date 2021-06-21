import {User} from './user';
import {Card} from './card';

export interface Comment {
  id?: number;
  content?: string;
  appUser?: User;
  card?: Card;
}
