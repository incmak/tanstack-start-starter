import { createServerFn } from "@tanstack/react-start";
import { getRequest } from "@tanstack/react-start/server";
import { env } from "@/config/env";
import type { Session } from "../types";

/**
 * Mock session data for testing without backend.
 * Used when AUTH_MODE=mock
 */
const mockSession: Session = {
	user: {
		id: "mock-user-id",
		email: "test@example.com",
		name: "Test User",
		image: null,
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	session: {
		id: "mock-session-id",
		userId: "mock-user-id",
		expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
	},
};

/**
 * Server function to check session status.
 * Can be called in beforeLoad guards since it's not a React hook.
 * Forwards cookies from the client request to Better Auth API.
 *
 * When AUTH_MODE=mock, checks for mock_auth cookie to determine if authenticated.
 */
export const getSessionServer = createServerFn({ method: "GET" }).handler(
	async () => {
		// Mock mode - check for mock_auth cookie
		if (env.AUTH_MODE === "mock") {
			// Simulate network delay
			await new Promise((resolve) => setTimeout(resolve, 100));

			const request = getRequest();
			const cookie = request.headers.get("cookie") || "";

			// Check if mock_auth cookie exists
			if (cookie.includes("mock_auth=true")) {
				return mockSession;
			}

			return null; // Not authenticated
		}

		// Production mode - call real backend
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
