import { redirect } from "@tanstack/react-router";
import { ROUTES } from "@/config/constants";
import { getSessionServer } from "../api/get-session.server";
import type { Session } from "../types";

/**
 * Guard for protected routes.
 * Redirects to login with redirect param if not authenticated.
 * Use in beforeLoad of protected layout routes.
 */
export async function requireAuth(opts: {
	currentPath: string;
}): Promise<Session> {
	const session = await getSessionServer();

	if (!session?.user) {
		throw redirect({
			to: ROUTES.LOGIN,
			search: {
				redirect: opts.currentPath,
			},
		});
	}

	return session;
}

/**
 * Guard for guest-only routes (login, signup).
 * Redirects to dashboard if already authenticated.
 * Use in beforeLoad of auth layout routes.
 */
export async function requireGuest(): Promise<void> {
	const session = await getSessionServer();

	if (session?.user) {
		throw redirect({
			to: ROUTES.DASHBOARD,
		});
	}
}
