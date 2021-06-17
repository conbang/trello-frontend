import {User} from './user';
import {GroupForm} from './groupForm';
import {List} from './list';

export interface Board {
  id?: number;
  name?: string;
  user?: User;
  groupTrello?: GroupForm;
  type: string;
  list?: List[];
}
