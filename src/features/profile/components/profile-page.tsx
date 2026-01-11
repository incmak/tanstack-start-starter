import {
	Calendar01Icon,
	Mail01Icon,
	UserIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/features/auth/hooks/use-auth";
import { useToast } from "@/features/toast/hooks/use-toast";

export function ProfilePage() {
	const { user } = useAuth();
	const toast = useToast();

	const handleSave = () => {
		toast.success("Profile updated", "Your profile has been saved.");
	};

	return (
		<div className="space-y-8 max-w-2xl">
			{/* Header */}
			<div>
				<h1 className="text-2xl font-bold text-foreground">Profile</h1>
				<p className="mt-1 text-muted-foreground">
					Manage your personal information.
				</p>
			</div>

			{/* Avatar Section */}
			<section className="rounded-xl border border-border bg-card p-6">
				<div className="flex items-center gap-6">
					<div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
						{user?.image ? (
							<img
								src={user.image}
								alt={user.name || "Profile"}
								className="w-full h-full rounded-full object-cover"
							/>
						) : (
							<HugeiconsIcon
								icon={UserIcon}
								size={32}
								className="text-primary"
							/>
						)}
					</div>
					<div>
						<h2 className="text-lg font-semibold text-foreground">
							{user?.name || "Your Name"}
						</h2>
						<p className="text-sm text-muted-foreground">{user?.email}</p>
						<Button variant="outline" size="sm" className="mt-3">
							Change Avatar
						</Button>
					</div>
				</div>
			</section>

			{/* Personal Information */}
			<section className="rounded-xl border border-border bg-card">
				<div className="border-b border-border p-4">
					<h2 className="font-semibold text-foreground">
						Personal Information
					</h2>
				</div>
				<div className="p-4 space-y-4">
					<div className="grid gap-4 sm:grid-cols-2">
						<div>
							<label className="text-sm font-medium text-foreground">
								Full Name
							</label>
							<div className="mt-1 flex items-center gap-2">
								<HugeiconsIcon
									icon={UserIcon}
									size={16}
									className="text-muted-foreground"
								/>
								<input
									type="text"
									defaultValue={user?.name || ""}
									placeholder="Enter your name"
									className="flex-1 rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
								/>
							</div>
						</div>
						<div>
							<label className="text-sm font-medium text-foreground">
								Email
							</label>
							<div className="mt-1 flex items-center gap-2">
								<HugeiconsIcon
									icon={Mail01Icon}
									size={16}
									className="text-muted-foreground"
								/>
								<input
									type="email"
									defaultValue={user?.email || ""}
									placeholder="Enter your email"
									className="flex-1 rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
									disabled
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Account Details */}
			<section className="rounded-xl border border-border bg-card">
				<div className="border-b border-border p-4">
					<h2 className="font-semibold text-foreground">Account Details</h2>
				</div>
				<div className="p-4 space-y-4">
					<div className="flex items-center justify-between py-2">
						<div className="flex items-center gap-3">
							<HugeiconsIcon
								icon={Calendar01Icon}
								size={18}
								className="text-muted-foreground"
							/>
							<div>
								<p className="text-sm font-medium text-foreground">
									Member since
								</p>
								<p className="text-sm text-muted-foreground">
									{user?.createdAt
										? new Date(user.createdAt).toLocaleDateString("en-US", {
												month: "long",
												year: "numeric",
											})
										: "Unknown"}
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Danger Zone */}
			<section className="rounded-xl border border-destructive/50 bg-destructive/5">
				<div className="border-b border-destructive/30 p-4">
					<h2 className="font-semibold text-destructive">Danger Zone</h2>
				</div>
				<div className="p-4">
					<div className="flex items-center justify-between">
						<div>
							<p className="text-sm font-medium text-foreground">
								Delete Account
							</p>
							<p className="text-sm text-muted-foreground">
								Permanently delete your account and all data.
							</p>
						</div>
						<Button
							variant="outline"
							size="sm"
							className="border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground"
						>
							Delete
						</Button>
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
