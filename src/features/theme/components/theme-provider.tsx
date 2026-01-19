import { createContext, type ReactNode, useContext, useMemo } from "react";
import { useTheme } from "../hooks/use-theme";
import type { ThemeState } from "../types";

const ThemeContext = createContext<ThemeState | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
	const { theme, resolvedTheme, setTheme } = useTheme();

	// Memoize context value to prevent unnecessary re-renders
	const contextValue = useMemo(
		() => ({ theme, resolvedTheme, setTheme }),
		[theme, resolvedTheme, setTheme],
	);

	return (
		<ThemeContext.Provider value={contextValue}>
			{children}
		</ThemeContext.Provider>
	);
}

export function useThemeContext() {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error("useThemeContext must be used within ThemeProvider");
	}
	return context;
}
