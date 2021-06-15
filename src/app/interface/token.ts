import { Role } from "./role";
export interface Token {
	roles?: Role[]
	id?: number;
	username?: string;
	passWord?: string;
	email?: string;
	accessToken?: string;
	avatar?: string
}
