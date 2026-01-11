import { useNavigate, useSearch } from "@tanstack/react-router";
import { ROUTES } from "@/config/constants";

interface LoginSearchParams {
	redirect?: string;
}

/**
 * Hook to handle redirect after successful login.
 * Reads the redirect param from URL and navigates to it.
 */
export function useLoginRedirect() {
	const navigate = useNavigate();
	const search = useSearch({ from: "/_auth/login" }) as LoginSearchParams;

	const handleRedirect = async () => {
		const redirectUrl = getRedirectUrl(search.redirect);
		try {
			await navigate({ to: redirectUrl });
		} catch (error) {
			console.error("Navigation failed:", error);
			// Fallback to dashboard on failure
			await navigate({ to: ROUTES.DASHBOARD });
		}
	};

	return {
		handleRedirect,
		redirectUrl: search.redirect,
	};
}

/**
 * Validates and returns a safe redirect URL.
 * Prevents open redirect vulnerabilities.
 */
export function getRedirectUrl(redirect?: string): string {
	// Default to dashboard if no redirect
	if (!redirect) {
		return ROUTES.DASHBOARD;
	}

	// Normalize by decoding to prevent encoding bypasses
	let normalized = redirect;
	try {
		// Decode until stable (prevent double encoding attacks)
		let decoded = decodeURIComponent(normalized);
		while (decoded !== normalized) {
			normalized = decoded;
			decoded = decodeURIComponent(normalized);
		}
	} catch {
		// Invalid encoding, reject
		return ROUTES.DASHBOARD;
	}

	// Must start with single / (relative URL)
	if (!normalized.startsWith("/")) {
		return ROUTES.DASHBOARD;
	}

	// Prevent protocol-relative URLs (//evil.com)
	if (normalized.startsWith("//")) {
		return ROUTES.DASHBOARD;
	}

	// Prevent backslash bypass (\\evil.com treated as //evil.com by some browsers)
	if (normalized.includes("\\")) {
		return ROUTES.DASHBOARD;
	}

	// Prevent redirect to auth pages (would cause loop)
	if (normalized.startsWith("/login") || normalized.startsWith("/signup")) {
		return ROUTES.DASHBOARD;
	}

	return normalized;
}
