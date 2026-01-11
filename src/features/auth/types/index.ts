export interface User {
	id: string;
	email: string;
	name: string | null;
	image: string | null;
	createdAt: Date;
	updatedAt: Date;
}

export interface Session {
	user: User;
	session: {
		id: string;
		expiresAt: Date;
		userId: string;
	};
}

export interface AuthState {
	user: User | null;
	isAuthenticated: boolean;
	isLoading: boolean;
}

export interface LoginCredentials {
	email: string;
	password: string;
}

export interface SignupCredentials {
	email: string;
	password: string;
	name: string;
}
