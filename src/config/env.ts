export const env = {
	API_BASE_URL: import.meta.env.VITE_API_BASE_URL || "http://localhost:3001",
	AUTH_MODE:
		(import.meta.env.VITE_AUTH_MODE as "production" | "mock") || "production",
	IS_DEV: import.meta.env.DEV,
	IS_PROD: import.meta.env.PROD,
} as const;
