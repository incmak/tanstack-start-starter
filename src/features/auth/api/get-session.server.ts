import { createServerFn } from "@tanstack/react-start";
import { getRequest } from "@tanstack/react-start/server";
import { env } from "@/config/env";
import type { Session } from "../types";

/**
 * Server function to check session status.
 * Can be called in beforeLoad guards since it's not a React hook.
 * Forwards cookies from the client request to Better Auth API.
 */
export const getSessionServer = createServerFn({ method: "GET" }).handler(
	async () => {
		try {
			const request = getRequest();
			const cookie = request.headers.get("cookie") || "";

			const response = await fetch(`${env.API_BASE_URL}/api/auth/get-session`, {
				headers: {
					cookie,
				},
				credentials: "include",
			});

			if (!response.ok) {
				return null;
			}

			const data = await response.json();

			// Better Auth returns { user, session } or null
			if (!data?.user) {
				return null;
			}

			return data as Session;
		} catch (error) {
			console.error("Session check failed:", error);
			return null;
		}
	},
);
