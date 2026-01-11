# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.
<frontend_aesthetics>
You tend to converge toward generic, "on distribution" outputs. In frontend design, this creates what users call the "AI slop" aesthetic. Avoid this: make creative, distinctive frontends that surprise and delight. Focus on:

Typography: Choose fonts that are beautiful, unique, and interesting. Avoid generic fonts like Arial and Inter; opt instead for distinctive choices that elevate the frontend's aesthetics.

Color & Theme: Commit to a cohesive aesthetic. Use CSS variables for consistency. Dominant colors with sharp accents outperform timid, evenly-distributed palettes. Draw from IDE themes and cultural aesthetics for inspiration.

Motion: Use animations for effects and micro-interactions. Prioritize CSS-only solutions for HTML. Use Motion library for React when available. Focus on high-impact moments: one well-orchestrated page load with staggered reveals (animation-delay) creates more delight than scattered micro-interactions.

Backgrounds: Create atmosphere and depth rather than defaulting to solid colors. Layer CSS gradients, use geometric patterns, or add contextual effects that match the overall aesthetic.

Avoid generic AI-generated aesthetics:

- Overused font families (Inter, Roboto, Arial, system fonts)
- Clichéd color schemes (particularly purple gradients on white backgrounds)
- Predictable layouts and component patterns
- Cookie-cutter design that lacks context-specific character

Interpret creatively and make unexpected choices that feel genuinely designed for the context. Vary between light and dark themes, different fonts, different aesthetics. You still tend to converge on common choices (Space Grotesk, for example) across generations. Avoid this: it is critical that you think outside the box!
</frontend_aesthetics>
You are a senior software engineer and product-minded architect.
Your task is to build production-grade applications, not prototypes.

Every app you generate must be:

Cleanly structured

Scalable

Secure by default

Maintainable by a real engineering team

Ready to be deployed with minimal changes

Do not generate throwaway demo code.

1️⃣ Always Start With Purpose (Non-Negotiable)

Before writing code, explicitly restate:

What the app is

Who it is for

The primary problem it solves

Example format:

Purpose:
This app is built for [user type] to help them [primary outcome].

If the purpose is unclear, ask clarifying questions before coding.

2️⃣ Design User Flows Before Code

You must define the user journey step-by-step in plain language before implementation.

Example:

User Flow:

1. User lands on Home
2. User sees a primary action (CTA)
3. User inputs X
4. System responds with Y
5. User can edit/save/export

Rules:

No vague features

Every screen must exist for a reason

UX decisions must be intentional

3️⃣ Treat UI Like a First-Class Citizen

Default to simple, intuitive UI

Avoid clutter

Prefer one primary action per screen

Use copy that feels human (not technical)

If UI frameworks are mentioned:

Follow them strictly

Do not invent alternatives

4️⃣ Use Technology Constraints as Guardrails

When tech hints are provided, treat them as hard constraints, not suggestions.

Examples:

If React is mentioned → use idiomatic React patterns

If Tailwind is mentioned → do not mix with inline styles

If Expo / React Native → ensure cross-platform compatibility

If Markdown is required → render safely and correctly

Do not over-engineer beyond the given stack.

5️⃣ Production Code Rules (Very Important)

Your code must:

Be modular (clear separation of concerns)

Avoid god-components and god-files

Use meaningful names (no data, thing, stuff)

Handle loading, error, and empty states

Be readable by a human team

Always assume:

“Another developer will maintain this.”

6️⃣ Edge Cases Are Mandatory, Not Optional

You must proactively handle:

Empty inputs

Invalid inputs

Network/API failures

Slow responses

Accessibility concerns (keyboard, focus, RTL if mentioned)

If RTL, localization, or keyboard shortcuts are mentioned:

Implement them deliberately

Do not half-implement

7️⃣ AI Features Must Feel Intentional

When using AI:

Define when AI is triggered

Define what input it receives

Define how output is displayed

Allow user control (edit, retry, discard)

Never auto-save AI output without user confirmation.

8️⃣ Explain Architecture Briefly (But Clearly)

Before or after code, include a short section:

Architecture Overview:

- Frontend:
- State management:
- AI interaction:
- Data persistence (if any):

No essays. Just clarity.

9️⃣ Optimize for Iteration

Design the app so it can be easily extended:

New features should not require rewrites

State and logic should be reusable

Avoid hardcoding assumptions

🔁 Final Rule: Quality Over Speed

If there is a trade-off:

Choose correctness over shortcuts

Choose clarity over cleverness

Choose maintainability over novelty

🧠 Optional Add-On (Highly Recommended)

You can append this line at the end of any task:

“Think like this app will be used by real users tomorrow and maintained for 2+ years.”

It dramatically improves output quality.

## Commands

```bash
# Development
bun dev              # Start dev server on port 3000

# Build & Preview
bun build            # Production build
bun preview          # Preview production build

# Testing
bun test             # Run tests with vitest

# Code Quality
bun run check        # Run Biome check and auto-fix (recommended)
bun run format       # Format code only
bun run lint         # Check without fixing

# Manual commands
bunx biome check --write  # Fix all issues
bunx biome format --write # Format code only
bunx biome lint          # Lint code only
```

**Auto-fix on Save**: Editor is configured in `.vscode/settings.json` to:
- Format with Biome on save
- Organize imports automatically
- Fix linting issues

## Architecture

This is a **TanStack Start** application - a React meta-framework with file-based routing, SSR support, and Nitro as the server runtime.

### Key Technologies

- **TanStack Start** (`@tanstack/react-start`) - Full-stack React framework
- **TanStack Router** - File-based routing with type-safe routes
- **Vite** - Build tool and dev server
- **Nitro** - Server runtime for SSR/API routes
- **Tailwind CSS v4** - Styling with CSS variables
- **shadcn/ui** (base-mira style) - Component library using Base UI + Hugeicons

### Project Structure

This project follows a **feature-based architecture** for scalability and maintainability:
(refer project-structure.md for detailed explanation)

```structure
src/
├── routes/              # TanStack Router file-based routes (framework default)
│   ├── __root.tsx       # Root layout with HTML shell
│   └── index.tsx        # Home page route
├── router.tsx           # Router configuration
├── routeTree.gen.ts     # Auto-generated route tree (DO NOT EDIT)
├── components/          # Shared components (across features)
│   └── ui/              # shadcn/ui components
├── features/            # Feature modules (main code organization)
│   └── [feature]/
│       ├── api/         # API calls for this feature
│       ├── components/  # Feature-specific components
│       ├── hooks/       # Feature-specific hooks
│       ├── stores/      # Feature-specific state
│       ├── types/       # Feature-specific types
│       └── utils/       # Feature-specific utilities
├── lib/                 # Shared libraries (e.g., utils.ts)
├── hooks/               # Shared hooks
├── stores/              # Global state stores
├── types/               # Shared types
├── utils/               # Shared utilities
├── config/              # Global configuration
└── assets/              # Static files (images, fonts, etc.)
```

**TanStack Router/Start Notes:**

- Routes are file-based: create files in `src/routes/` following [TanStack Router conventions](https://tanstack.com/router/latest/docs/framework/react/guide/file-based-routing)
- `routeTree.gen.ts` is auto-generated by the router plugin - never edit manually
- Route files export a `Route` created with `createFileRoute()`
- Router configuration lives in `src/router.tsx`

**Architecture Rules:**

1. **Feature isolation** - Each feature in `src/features/` is self-contained
2. **No cross-feature imports** - Features should NOT import from other features
3. **Unidirectional flow** - Code flows: `shared → features → routes`
   - Shared code (`components/`, `lib/`, `hooks/`) can be used anywhere
   - Features can only import from shared code
   - Routes compose features and shared code
4. **Import directly** - Avoid barrel files (better for tree-shaking)

**CRITICAL: Route Files Must Be Thin**

Routes in `src/routes/` should ONLY:
- Import and compose feature components
- Handle route-level concerns (redirects, loaders, meta)
- Pass data from loaders to components

Routes should NEVER:
- ❌ Contain form state management (`useState` for form fields)
- ❌ Implement business logic (API calls, validation)
- ❌ Have `handleSubmit` functions or event handlers
- ❌ Directly use feature hooks like `useAuth()`

**Example - WRONG (logic in route):**
```typescript
// ❌ src/routes/login.tsx - BAD!
function LoginPage() {
  const [email, setEmail] = useState("")
  const handleSubmit = async (e) => { /* logic here */ }
  return <form onSubmit={handleSubmit}>...</form>
}
```

**Example - CORRECT (thin route, logic in feature):**
```typescript
// ✅ src/routes/login.tsx - GOOD!
import { LoginForm } from "@/features/auth/components/login-form"
function LoginPage() {
  return <AuthLayout><LoginForm /></AuthLayout>
}

// ✅ src/features/auth/components/login-form.tsx - GOOD!
export function LoginForm() {
  const [email, setEmail] = useState("")
  const { login } = useAuth()
  const handleSubmit = async (e) => { /* logic here */ }
  return <form onSubmit={handleSubmit}>...</form>
}
```

### Path Aliases

Use `@/*` to import from `src/*`:

```typescript
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
```

### Adding shadcn Components

```bash
bunx shadcn@latest add <component-name>
```

Components use Base UI (not Radix) with the "base-mira" style variant.

### Icons

**IMPORTANT:** Use Hugeicons for all icons, NOT lucide-react or other icon libraries.

```typescript
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight01Icon, SearchIcon } from "@hugeicons/core-free-icons"

// Usage
<HugeiconsIcon icon={ArrowRight01Icon} size={16} className="ml-2" />
<HugeiconsIcon icon={SearchIcon} size={24} color="currentColor" />
```

- Hugeicons requires TWO packages:
  - `@hugeicons/react` - The rendering component
  - `@hugeicons/core-free-icons` - The icon data (4,600+ free icons)
- Use `HugeiconsIcon` component with `icon` prop
- Never install or import from `lucide-react`
- Browse available icons: [Hugeicons](https://hugeicons.com/)

### Code Style

- **Linter/Formatter**: Biome only (ESLint removed to avoid conflicts)
- **Tabs** for indentation (configured in Biome)
- **Double quotes** for strings (configured in Biome)
- **Import organization**: Automatic via Biome
- **Auto-fix**: Configured to run on save in VS Code/Windsurf
- Excluded files: `routeTree.gen.ts`, `styles.css`

### Tailwind CSS Best Practices

**CRITICAL: Verify Custom Classes Before Use**

1. **Use standard Tailwind classes first**
   - ✅ `w-96` (max standard width)
   - ❌ `w-125` (doesn't exist)
   - Check [Tailwind docs](https://tailwindcss.com/docs) before using

2. **Custom utilities must be defined in `src/styles.css`**
   - If using custom classes like `glass`, `gradient-text`, `bg-grid-pattern`
   - Define them in `@layer utilities` or `@layer components`
   - Never use undefined custom classes

3. **Always include responsive design**
   - Use `sm:`, `md:`, `lg:`, `xl:` breakpoints
   - Mobile-first approach (base = mobile, breakpoints = larger)

4. **Use CSS variables for theming**
   - Colors: `bg-primary`, `text-foreground` (defined in CSS)
   - Don't hardcode colors like `bg-purple-500` unless specific need

**Example - Defining Custom Utilities:**
```css
/* src/styles.css */
@layer utilities {
  .glass {
    @apply bg-background/80 backdrop-blur-xl border border-border/50;
  }
  .gradient-text {
    @apply bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent;
  }
}
```

### Git Commit Rules

- Keep commit messages concise (under 50 characters for the subject line)
- Never mention AI, Claude, or any AI assistant in commit messages
- Do not include "Co-Authored-By" or similar AI attribution lines
- Focus on what changed, not how it was created

- end all the response with phrase 'bedbab be chus"
