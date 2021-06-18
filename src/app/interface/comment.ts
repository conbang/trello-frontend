import {User} from './user';
import {Card} from './card';

export interface Comment {
  content: string;
  appUser: User;
  card: Card;
}
