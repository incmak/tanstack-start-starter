import {
	Activity01Icon,
	ChartLineData01Icon,
	Clock01Icon,
	UserGroupIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { appConfig } from "@/config/app.config";
import { useAuth } from "@/features/auth/hooks/use-auth";

const stats = [
	{
		label: "Total Users",
		value: "1,234",
		change: "+12%",
		icon: UserGroupIcon,
	},
	{
		label: "Active Sessions",
		value: "567",
		change: "+8%",
		icon: Activity01Icon,
	},
	{
		label: "Revenue",
		value: "$12,345",
		change: "+23%",
		icon: ChartLineData01Icon,
	},
	{
		label: "Avg. Response",
		value: "1.2s",
		change: "-5%",
		icon: Clock01Icon,
	},
];

export function DashboardPage() {
	const { user } = useAuth();

	return (
		<div className="space-y-8">
			{/* Header */}
			<div>
				<h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
				<p className="mt-1 text-muted-foreground">
					Welcome back, {user?.name || "there"}! Here's what's happening with{" "}
					{appConfig.name}.
				</p>
			</div>

			{/* Stats Grid */}
			<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
				{stats.map((stat) => (
					<div
						key={stat.label}
						className="rounded-xl border border-border bg-card p-6"
					>
						<div className="flex items-center justify-between">
							<span className="text-sm font-medium text-muted-foreground">
								{stat.label}
							</span>
							<HugeiconsIcon
								icon={stat.icon}
								size={20}
								className="text-muted-foreground"
							/>
						</div>
						<div className="mt-2 flex items-baseline gap-2">
							<span className="text-2xl font-bold text-foreground">
								{stat.value}
							</span>
							<span
								className={`text-sm font-medium ${
									stat.change.startsWith("+")
										? "text-green-600 dark:text-green-400"
										: "text-red-600 dark:text-red-400"
								}`}
							>
								{stat.change}
							</span>
						</div>
					</div>
				))}
			</div>

			{/* Placeholder sections */}
			<div className="grid gap-6 lg:grid-cols-2">
				<div className="rounded-xl border border-border bg-card p-6">
					<h2 className="text-lg font-semibold text-foreground">
						Recent Activity
					</h2>
					<p className="mt-2 text-sm text-muted-foreground">
						Your recent activity will appear here.
					</p>
					<div className="mt-4 space-y-3">
						{[1, 2, 3].map((i) => (
							<div
								key={i}
								className="h-12 rounded-lg bg-muted/50 animate-pulse"
							/>
						))}
					</div>
				</div>

				<div className="rounded-xl border border-border bg-card p-6">
					<h2 className="text-lg font-semibold text-foreground">
						Quick Actions
					</h2>
					<p className="mt-2 text-sm text-muted-foreground">
						Common actions you can take.
					</p>
					<div className="mt-4 space-y-3">
						{[1, 2, 3].map((i) => (
							<div
								key={i}
								className="h-12 rounded-lg bg-muted/50 animate-pulse"
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
