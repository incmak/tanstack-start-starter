import { Link } from "@tanstack/react-router";
import { APP_NAME } from "@/config/constants";

interface AuthLayoutProps {
	children: React.ReactNode;
	title: string;
	subtitle?: string;
}

export function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
	return (
		<div className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
			<div className="fixed inset-0 bg-grid-pattern opacity-40" />
			<div className="hidden md:block fixed top-1/4 right-1/4 w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] bg-primary/8 rounded-full blur-3xl animate-glow-pulse" />
			<div className="hidden md:block fixed bottom-1/4 left-1/4 w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] bg-accent/5 rounded-full blur-3xl animate-glow-pulse stagger-3" />

			<div className="relative w-full max-w-md z-10">
				<div className="stagger-item animate-fade-in stagger-1 text-center mb-6 sm:mb-8">
					<Link to="/" className="inline-block group">
						<h1 className="text-2xl sm:text-3xl font-black tracking-tight">
							<span className="gradient-text">{APP_NAME}</span>
						</h1>
					</Link>
				</div>

				<div className="stagger-item animate-fade-in stagger-2 glass rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-shadow">
					<div className="text-center mb-6">
						<h2 className="text-xl sm:text-2xl font-bold text-foreground">
							{title}
						</h2>
						{subtitle && (
							<p className="mt-2 text-sm sm:text-base text-muted-foreground">
								{subtitle}
							</p>
						)}
					</div>
					{children}
				</div>

				<div className="hidden sm:block absolute -top-10 -left-10 w-16 h-16 sm:w-20 sm:h-20 border border-primary/20 rounded-full animate-float" />
				<div className="hidden sm:block absolute -bottom-5 -right-5 w-12 h-12 sm:w-16 sm:h-16 border border-accent/10 rounded-lg rotate-45 animate-float stagger-2" />
			</div>
		</div>
	);
}
