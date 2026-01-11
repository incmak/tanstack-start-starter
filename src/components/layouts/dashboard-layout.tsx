import {
	Home01Icon,
	Logout01Icon,
	Menu01Icon,
	Settings01Icon,
	UserIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { AuthGuard } from "@/components/guards/auth-guard";
import { Button } from "@/components/ui/button";
import { appConfig } from "@/config/app.config";
import { ROUTES } from "@/config/constants";
import { useAuth } from "@/features/auth/hooks/use-auth";
import { ThemeToggle } from "@/features/theme/components/theme-toggle";
import { cn } from "@/lib/utils";

interface DashboardLayoutProps {
	children: React.ReactNode;
}

const navItems = [
	{ href: ROUTES.DASHBOARD, label: "Dashboard", icon: Home01Icon },
	{ href: ROUTES.SETTINGS, label: "Settings", icon: Settings01Icon },
	{ href: ROUTES.PROFILE, label: "Profile", icon: UserIcon },
];

export function DashboardLayout({ children }: DashboardLayoutProps) {
	const location = useLocation();
	const { user, logout } = useAuth();
	const [sidebarOpen, setSidebarOpen] = useState(false);

	return (
		<AuthGuard>
			<div className="min-h-screen flex bg-background">
				{/* Mobile overlay */}
				{sidebarOpen && (
					<button
						type="button"
						className="fixed inset-0 bg-black/50 z-40 md:hidden cursor-default"
						onClick={() => setSidebarOpen(false)}
						onKeyDown={(e) => e.key === "Escape" && setSidebarOpen(false)}
						aria-label="Close sidebar"
					/>
				)}

				{/* Sidebar */}
				<aside
					className={cn(
						"fixed inset-y-0 left-0 z-50 w-64 border-r border-border bg-sidebar flex flex-col transform transition-transform duration-200 ease-in-out md:relative md:translate-x-0",
						sidebarOpen ? "translate-x-0" : "-translate-x-full",
					)}
				>
					<div className="p-4 border-b border-sidebar-border">
						<Link
							to="/"
							className="text-xl font-bold gradient-text"
							onClick={() => setSidebarOpen(false)}
						>
							{appConfig.name}
						</Link>
					</div>

					<nav className="flex-1 p-4 space-y-1">
						{navItems.map((item) => {
							const isActive = location.pathname === item.href;
							return (
								<Link
									key={item.href}
									to={item.href}
									onClick={() => setSidebarOpen(false)}
									className={cn(
										"flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
										isActive
											? "bg-sidebar-accent text-sidebar-accent-foreground"
											: "text-sidebar-foreground hover:bg-sidebar-accent/50",
									)}
								>
									<HugeiconsIcon icon={item.icon} size={18} />
									{item.label}
								</Link>
							);
						})}
					</nav>

					<div className="p-4 border-t border-sidebar-border">
						<div className="flex items-center gap-3 mb-3">
							<div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
								<HugeiconsIcon
									icon={UserIcon}
									size={16}
									className="text-primary"
								/>
							</div>
							<div className="flex-1 min-w-0">
								<p className="text-sm font-medium truncate">
									{user?.name || user?.email}
								</p>
								<p className="text-xs text-muted-foreground truncate">
									{user?.email}
								</p>
							</div>
						</div>
						<Button
							variant="ghost"
							size="sm"
							className="w-full justify-start"
							onClick={() => logout()}
						>
							<HugeiconsIcon icon={Logout01Icon} size={16} />
							Sign out
						</Button>
					</div>
				</aside>

				{/* Main content */}
				<div className="flex-1 flex flex-col min-w-0">
					{/* Top bar */}
					<header className="h-14 border-b border-border flex items-center justify-between px-4 md:px-6 bg-background">
						<div className="flex items-center gap-3">
							<Button
								variant="ghost"
								size="icon"
								className="md:hidden"
								onClick={() => setSidebarOpen(true)}
								aria-label="Open menu"
							>
								<HugeiconsIcon icon={Menu01Icon} size={20} />
							</Button>
							<span className="text-lg font-bold gradient-text md:hidden">
								{appConfig.shortName}
							</span>
						</div>
						<ThemeToggle />
					</header>

					{/* Page content */}
					<main className="flex-1 p-4 md:p-6 lg:p-8 overflow-auto">
						{children}
					</main>
				</div>
			</div>
		</AuthGuard>
	);
}
