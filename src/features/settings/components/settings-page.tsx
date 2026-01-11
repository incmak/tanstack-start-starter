import {
	Globe02Icon,
	Notification01Icon,
	PaintBoardIcon,
	ShieldKeyIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "@/components/ui/button";
import { useThemeContext } from "@/features/theme/components/theme-provider";
import type { Theme } from "@/features/theme/types";
import { useToast } from "@/features/toast/hooks/use-toast";

const themeOptions: { value: Theme; label: string }[] = [
	{ value: "light", label: "Light" },
	{ value: "dark", label: "Dark" },
	{ value: "system", label: "System" },
];

export function SettingsPage() {
	const { theme, setTheme } = useThemeContext();
	const toast = useToast();

	const handleSave = () => {
		toast.success("Settings saved", "Your preferences have been updated.");
	};

	return (
		<div className="space-y-8 max-w-2xl">
			{/* Header */}
			<div>
				<h1 className="text-2xl font-bold text-foreground">Settings</h1>
				<p className="mt-1 text-muted-foreground">
					Manage your account settings and preferences.
				</p>
			</div>

			{/* Appearance */}
			<section className="rounded-xl border border-border bg-card">
				<div className="flex items-center gap-3 border-b border-border p-4">
					<HugeiconsIcon
						icon={PaintBoardIcon}
						size={20}
						className="text-primary"
					/>
					<h2 className="font-semibold text-foreground">Appearance</h2>
				</div>
				<div className="p-4 space-y-4">
					<div>
						<label className="text-sm font-medium text-foreground">Theme</label>
						<p className="text-sm text-muted-foreground">
							Choose how the app looks to you.
						</p>
						<div className="mt-3 flex gap-2">
							{themeOptions.map((option) => (
								<button
									key={option.value}
									type="button"
									onClick={() => setTheme(option.value)}
									className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
										theme === option.value
											? "bg-primary text-primary-foreground"
											: "bg-muted text-muted-foreground hover:bg-muted/80"
									}`}
								>
									{option.label}
								</button>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Notifications */}
			<section className="rounded-xl border border-border bg-card">
				<div className="flex items-center gap-3 border-b border-border p-4">
					<HugeiconsIcon
						icon={Notification01Icon}
						size={20}
						className="text-primary"
					/>
					<h2 className="font-semibold text-foreground">Notifications</h2>
				</div>
				<div className="p-4 space-y-4">
					<div className="flex items-center justify-between">
						<div>
							<p className="text-sm font-medium text-foreground">
								Email notifications
							</p>
							<p className="text-sm text-muted-foreground">
								Receive email updates about your account.
							</p>
						</div>
						<div className="h-6 w-11 rounded-full bg-muted" />
					</div>
					<div className="flex items-center justify-between">
						<div>
							<p className="text-sm font-medium text-foreground">
								Push notifications
							</p>
							<p className="text-sm text-muted-foreground">
								Receive push notifications in your browser.
							</p>
						</div>
						<div className="h-6 w-11 rounded-full bg-muted" />
					</div>
				</div>
			</section>

			{/* Security */}
			<section className="rounded-xl border border-border bg-card">
				<div className="flex items-center gap-3 border-b border-border p-4">
					<HugeiconsIcon
						icon={ShieldKeyIcon}
						size={20}
						className="text-primary"
					/>
					<h2 className="font-semibold text-foreground">Security</h2>
				</div>
				<div className="p-4 space-y-4">
					<div className="flex items-center justify-between">
						<div>
							<p className="text-sm font-medium text-foreground">
								Two-factor authentication
							</p>
							<p className="text-sm text-muted-foreground">
								Add an extra layer of security to your account.
							</p>
						</div>
						<Button variant="outline" size="sm">
							Enable
						</Button>
					</div>
					<div className="flex items-center justify-between">
						<div>
							<p className="text-sm font-medium text-foreground">
								Change password
							</p>
							<p className="text-sm text-muted-foreground">
								Update your password regularly for security.
							</p>
						</div>
						<Button variant="outline" size="sm">
							Update
						</Button>
					</div>
				</div>
			</section>

			{/* Language */}
			<section className="rounded-xl border border-border bg-card">
				<div className="flex items-center gap-3 border-b border-border p-4">
					<HugeiconsIcon
						icon={Globe02Icon}
						size={20}
						className="text-primary"
					/>
					<h2 className="font-semibold text-foreground">Language & Region</h2>
				</div>
				<div className="p-4">
					<div>
						<label className="text-sm font-medium text-foreground">
							Language
						</label>
						<p className="text-sm text-muted-foreground">
							Select your preferred language.
						</p>
						<select className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm">
							<option value="en">English</option>
							<option value="es">Español</option>
							<option value="fr">Français</option>
							<option value="de">Deutsch</option>
						</select>
					</div>
				</div>
			</section>

			{/* Save Button */}
			<div className="flex justify-end">
				<Button onClick={handleSave}>Save Changes</Button>
			</div>
		</div>
	);
}
