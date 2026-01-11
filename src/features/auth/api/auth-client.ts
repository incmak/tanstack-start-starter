import { createAuthClient } from "better-auth/react";
import { env } from "@/config/env";

export const authClient = createAuthClient({
	baseURL: env.API_BASE_URL,
});

export const { useSession, signIn, signOut, signUp } = authClient;
