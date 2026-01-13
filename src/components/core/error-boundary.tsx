import { AlertCircleIcon, Refresh01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Component, type ReactNode } from "react";
import { Button } from "@/components/ui/button";

interface Props {
	children: ReactNode;
	fallback?: ReactNode;
}

interface State {
	hasError: boolean;
	error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = { hasError: false, error: null };
	}

	static getDerivedStateFromError(error: Error): State {
		return { hasError: true, error };
	}

	componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
		console.error("Error caught by boundary:", error, errorInfo);
		// TODO: Send to error tracking service (Sentry, etc.)
	}

	handleRetry = () => {
		this.setState({ hasError: false, error: null });
	};

	render() {
		if (this.state.hasError) {
			if (this.props.fallback) {
				return this.props.fallback;
			}

			return (
				<div className="min-h-screen flex items-center justify-center p-4 bg-background">
					<div className="max-w-md w-full text-center space-y-6">
						<div className="w-16 h-16 mx-auto rounded-full bg-destructive/10 flex items-center justify-center">
							<HugeiconsIcon
								icon={AlertCircleIcon}
								size={32}
								className="text-destructive"
							/>
						</div>

						<div className="space-y-2">
							<h1 className="text-2xl font-bold text-foreground">
								Something went wrong
							</h1>
							<p className="text-muted-foreground">
								An unexpected error occurred. Please try again.
							</p>
						</div>

						{import.meta.env.DEV && this.state.error && (
							<div className="p-4 bg-destructive/5 border border-destructive/20 rounded-lg text-left">
								<p className="font-mono text-sm text-destructive break-all">
									{this.state.error.message}
								</p>
							</div>
						)}

						<div className="flex gap-3 justify-center">
							<Button onClick={this.handleRetry} variant="outline">
								<HugeiconsIcon icon={Refresh01Icon} size={16} />
								Try Again
							</Button>
							<Button
								onClick={() => {
									window.location.href = "/";
								}}
							>
								Go Home
							</Button>
						</div>
					</div>
				</div>
			);
		}

		return this.props.children;
	}
}
