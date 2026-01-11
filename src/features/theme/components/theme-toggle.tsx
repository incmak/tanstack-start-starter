import {
	Moon02Icon,
	Settings02Icon,
	Sun02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "@/components/ui/button";
import type { Theme } from "../types";
import { useThemeContext } from "./theme-provider";

const themeIcons: Record<Theme, typeof Moon02Icon> = {
	light: Sun02Icon,
	dark: Moon02Icon,
	system: Settings02Icon,
};

const themeLabels: Record<Theme, string> = {
	light: "Light",
	dark: "Dark",
	system: "System",
};

export function ThemeToggle() {
	const { theme, setTheme } = useThemeContext();

	const cycleTheme = () => {
		const themes: Theme[] = ["light", "dark", "system"];
		const currentIndex = themes.indexOf(theme);
		const nextIndex = (currentIndex + 1) % themes.length;
		setTheme(themes[nextIndex]);
	};

	return (
		<Button
			variant="ghost"
			size="icon"
			onClick={cycleTheme}
			aria-label={`Current theme: ${themeLabels[theme]}. Click to change.`}
		>
			<HugeiconsIcon icon={themeIcons[theme]} size={18} />
		</Button>
	);
}
