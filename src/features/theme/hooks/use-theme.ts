import { useCallback, useEffect, useState } from "react";
import { appConfig } from "@/config/app.config";
import type { Theme } from "../types";

const THEME_KEY = "theme";

function getSystemTheme(): "light" | "dark" {
	if (typeof window === "undefined") return "light";
	return window.matchMedia("(prefers-color-scheme: dark)").matches
		? "dark"
		: "light";
}

function getStoredTheme(): Theme {
	if (typeof window === "undefined") return appConfig.theme.defaultMode;
	return (
		(localStorage.getItem(THEME_KEY) as Theme) || appConfig.theme.defaultMode
	);
}

function resolveTheme(theme: Theme): "light" | "dark" {
	if (theme === "system") return getSystemTheme();
	return theme;
}

function applyTheme(theme: "light" | "dark") {
	document.documentElement.classList.toggle("dark", theme === "dark");
}

export function useTheme() {
	const [theme, setThemeState] = useState<Theme>(getStoredTheme);
	const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">(() =>
		resolveTheme(getStoredTheme()),
	);

	const setTheme = useCallback((newTheme: Theme) => {
		setThemeState(newTheme);
		localStorage.setItem(THEME_KEY, newTheme);
		const resolved = resolveTheme(newTheme);
		setResolvedTheme(resolved);
		applyTheme(resolved);
	}, []);

	// Listen for system theme changes
	useEffect(() => {
		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
		const handleChange = () => {
			if (theme === "system") {
				const resolved = getSystemTheme();
				setResolvedTheme(resolved);
				applyTheme(resolved);
			}
		};
		mediaQuery.addEventListener("change", handleChange);
		return () => mediaQuery.removeEventListener("change", handleChange);
	}, [theme]);

	// Apply theme on mount
	useEffect(() => {
		applyTheme(resolvedTheme);
	}, [resolvedTheme]);

	return { theme, resolvedTheme, setTheme };
}
