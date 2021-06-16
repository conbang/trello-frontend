import {User} from './user';
import {Card} from './card';


export interface IComment {
  id?: number;
  content?: string;
  date_crate?: Date;
  appUser?: User;
  card?: Card;
}
