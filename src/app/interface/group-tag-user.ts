import {User} from './user';
import {GroupForm} from './groupForm';
import {UserUpdate} from './user-update';

export interface GroupTagUser {
  id?: number;
  user?: UserUpdate;
  groupTrello?: GroupForm;
  roleUser: string;
}
