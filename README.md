# TanStack Start Template

A production-ready, full-stack React starter template built with TanStack Start, featuring authentication, theming, toast notifications, and a feature-based architecture.

## Features

- **TanStack Start** - Full-stack React framework with SSR and file-based routing
- **Better Auth** - Pre-configured authentication with login, signup, and session management
- **Theme System** - Light/dark/system mode with localStorage persistence
- **Toast Notifications** - Success, error, warning, and info variants
- **SEO Utilities** - Open Graph, Twitter cards, and meta tag generation
- **Error Boundary** - Global error handling with beautiful fallback UI
- **Feature-Based Architecture** - Scalable, maintainable code organization
- **Dashboard Layout** - Responsive sidebar with mobile support
- **Protected Routes** - Auth guards for authenticated pages

## Tech Stack

| Category   | Technology                |
| ---------- | ------------------------- |
| Framework  | TanStack Start + React 19 |
| Styling    | Tailwind CSS v4           |
| Components | shadcn/ui (Base UI)       |
| Icons      | Hugeicons                 |
| Auth       | Better Auth               |
| Build      | Vite + Nitro              |
| Linting    | Biome                     |

## Quick Start

### 1. Clone and Install

```bash
# Clone the template
git clone <your-repo-url> my-app
cd my-app

# Install dependencies
bun install
```

### 2. Configure Environment

```bash
# Copy environment file
cp .env.example .env

# Edit .env with your backend URL
VITE_API_BASE_URL=http://localhost:3001
```

### 3. Customize Branding

Edit `src/config/app.config.ts`:

```typescript
export const appConfig: AppConfig = {
  name: 'Your App Name',
  shortName: 'App',
  description: 'Your app description',
  tagline: 'Your catchy tagline',
  url: 'https://yourapp.com',
  // ... more options
}
```

### 4. Start Development

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```tree
src/
├── config/
│   ├── app.config.ts     # Central branding & config
│   ├── constants.ts      # Route constants
│   └── env.ts            # Environment variables
├── lib/
│   ├── utils.ts          # Utility functions (cn)
│   └── seo.ts            # SEO/meta utilities
├── components/
│   ├── ui/               # shadcn/ui components
│   ├── error-boundary.tsx
│   ├── guards/
│   │   └── auth-guard.tsx
│   └── layouts/
│       ├── auth-layout.tsx
│       └── dashboard-layout.tsx
├── features/
│   ├── auth/             # Authentication
│   ├── theme/            # Theme toggle
│   ├── toast/            # Notifications
│   ├── dashboard/        # Dashboard page
│   ├── settings/         # Settings page
│   └── profile/          # Profile page
└── routes/               # File-based routes
    ├── __root.tsx        # Root layout
    ├── index.tsx         # Home page
    ├── login.tsx         # Login page
    ├── signup.tsx        # Signup page
    ├── dashboard.tsx     # Dashboard (protected)
    ├── settings.tsx      # Settings (protected)
    ├── profile.tsx       # Profile (protected)
    └── $.tsx             # 404 catch-all
```

## Commands

```bash
# Development
bun dev              # Start dev server on port 3000

# Build
bun build            # Production build
bun preview          # Preview production build

# Code Quality
bun run check        # Biome check + auto-fix (recommended)
bun run format       # Format code only
bun run lint         # Check without fixing

# Testing
bun test             # Run tests with vitest
```

## Configuration

### App Config (`src/config/app.config.ts`)

All branding and app settings in one place:

```typescript
export const appConfig: AppConfig = {
  // Branding
  name: 'Your App Name',
  shortName: 'App',
  description: 'Your app description',
  tagline: 'Your catchy tagline',
  url: 'https://yourapp.com',

  // Social links
  social: {
    twitter: '@yourhandle',
    github: 'https://github.com/yourorg/yourrepo',
  },

  // SEO defaults
  seo: {
    titleTemplate: '%s | Your App',
    defaultTitle: 'Your App',
    defaultDescription: 'Your app description',
    defaultImage: '/og-image.png',
    twitterCard: 'summary_large_image',
    locale: 'en_US',
  },

  // Theme
  theme: {
    defaultMode: 'system', // "light" | "dark" | "system"
  },

  // Feature flags
  features: {
    enableAnalytics: false,
    enablePWA: true,
  },
}
```

### Environment Variables

```bash
# Required
VITE_API_BASE_URL=http://localhost:3001  # Better Auth backend

# Optional
VITE_GA_ID=G-XXXXXXXXXX                  # Google Analytics
VITE_SENTRY_DSN=https://xxx@sentry.io    # Error tracking
```

## Usage

### SEO Meta Tags

```typescript
// In any route file
import { generateMeta } from '@/lib/seo'

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: generateMeta({
      title: 'About Us',
      description: 'Learn more about our company',
    }),
  }),
  component: AboutPage,
})
```

### Theme Toggle

```typescript
import { useThemeContext } from "@/features/theme/components/theme-provider";
import { ThemeToggle } from "@/features/theme/components/theme-toggle";

// Use the toggle component
<ThemeToggle />

// Or programmatically
const { theme, setTheme, resolvedTheme } = useThemeContext();
setTheme("dark"); // "light" | "dark" | "system"
```

### Toast Notifications

```typescript
import { useToast } from '@/features/toast/hooks/use-toast'

function MyComponent() {
  const toast = useToast()

  const handleAction = () => {
    toast.success('Success!', 'Your action completed.')
    toast.error('Error', 'Something went wrong.')
    toast.warning('Warning', 'Please be careful.')
    toast.info('Info', "Here's some information.")
  }
}
```

### Protected Routes

```typescript
import { AuthGuard } from "@/components/guards/auth-guard";

// Wrap any component that requires authentication
<AuthGuard>
  <ProtectedContent />
</AuthGuard>

// Or use DashboardLayout which includes AuthGuard
import { DashboardLayout } from "@/components/layouts/dashboard-layout";

function MyProtectedPage() {
  return (
    <DashboardLayout>
      <YourPageContent />
    </DashboardLayout>
  );
}
```

### Authentication

```typescript
import { useAuth } from "@/features/auth/hooks/use-auth";

function MyComponent() {
  const { user, isAuthenticated, isLoading, login, logout } = useAuth();

  if (isLoading) return <Loading />;
  if (!isAuthenticated) return <LoginPrompt />;

  return <div>Welcome, {user.name}!</div>;
}
```

## Backend Setup

This template requires a Better Auth backend. See the [Better Auth documentation](https://www.better-auth.com/) for setup instructions.

Basic backend setup:

```typescript
// backend/auth.ts
import { betterAuth } from 'better-auth'

export const auth = betterAuth({
  database: {
    // Your database adapter
  },
  emailAndPassword: {
    enabled: true,
  },
})
```

Ensure CORS is configured to allow requests from your frontend origin.

## Architecture Guidelines

1. **Feature Isolation** - Each feature in `src/features/` is self-contained
2. **No Cross-Feature Imports** - Features should NOT import from other features
3. **Thin Routes** - Route files only compose components, no business logic
4. **Unidirectional Flow** - `shared -> features -> routes`

## Adding New Features

1. Create a new folder in `src/features/your-feature/`
2. Add subfolders as needed: `components/`, `hooks/`, `api/`, `types/`
3. Create the route in `src/routes/your-feature.tsx`
4. Import and compose your feature components in the route

## Adding shadcn Components

```bash
bunx shadcn@latest add <component-name>
```

Components use Base UI (not Radix) with the "base-mira" style variant.

## License

MIT
