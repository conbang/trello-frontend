import { User } from './user';

export interface Board {
	id?: number;
	name?: string;
	appUser?: User;
  groupTrello?: string;
  type?: string;
}
