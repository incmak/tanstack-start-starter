import { createContext, type ReactNode, useContext } from "react";
import { useTheme } from "../hooks/use-theme";
import type { ThemeState } from "../types";

const ThemeContext = createContext<ThemeState | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
	const themeState = useTheme();

	return (
		<ThemeContext.Provider value={themeState}>{children}</ThemeContext.Provider>
	);
}

export function useThemeContext() {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error("useThemeContext must be used within ThemeProvider");
	}
	return context;
}
