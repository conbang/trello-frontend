export interface Login {
	id: number;
	avatar?: string;
	email: string;
	userName: string;
	passWord: string;
	phone: string;
	confirmPassword: string;
	role: [];
	oldPassWord?: string;
	newPassWord?: string
}
