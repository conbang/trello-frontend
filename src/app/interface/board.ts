import { User } from "./user";

export interface Board {
	id?: number;
	name?: string;
	type?: string;
	appUser?: User;
}
