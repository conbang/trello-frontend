import {User} from './user';
import {GroupForm} from './groupForm';

export interface Board {
  id?: number;
  name?: string;
  user?: User;
  groupTrello?: GroupForm;
  type: string;
}
