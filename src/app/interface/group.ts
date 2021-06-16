import {GroupForm} from './groupForm';
import {User} from './user';

export interface Group {
  groupTrello: GroupForm;
  id: number;
  roleUser: string;
  user: User;
}
