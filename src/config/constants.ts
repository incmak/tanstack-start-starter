import { appConfig } from "./app.config";

// Re-export from app.config for backward compatibility
export const APP_NAME = appConfig.name;
export const APP_DESCRIPTION = appConfig.description;

export const ROUTES = {
	HOME: "/",
	LOGIN: "/login",
	SIGNUP: "/signup",
	DASHBOARD: "/dashboard",
	SETTINGS: "/settings",
	PROFILE: "/profile",
} as const;
