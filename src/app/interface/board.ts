import {User} from './user';
import {Group} from './group';

export interface Board {
  id?: number;
  name?: string;
  user?: User;
  groupTrello?: Group;
  type: string;
}
