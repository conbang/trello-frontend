import {Card} from './card';
import {User} from './user';

export interface CardUser {
  id?: number;
  card?: Card;
  appUser?: User;
}
