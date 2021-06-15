import { Role } from "./role";
export interface Token {
	roles?: Role[],
	id?: number;
	username?: string;
	email?: string;
	token?: string;
	avatar?: string
}
