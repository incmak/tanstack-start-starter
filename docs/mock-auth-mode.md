# Mock Authentication Mode

## Overview

Mock authentication mode allows you to run the frontend application without requiring the Better Auth backend server. This is useful for:

- Frontend development without backend dependency
- Testing UI flows and navigation
- CI/CD environments where backend isn't available
- Quick prototyping

## Usage

### Enable Mock Mode

Set the `VITE_AUTH_MODE` environment variable to `mock`:

```bash
# In .env.local
VITE_AUTH_MODE=mock
```

Or start the dev server with the variable:

```bash
VITE_AUTH_MODE=mock bun dev
```

### Mock User Data

When in mock mode, the application uses the following mock session:

```typescript
{
  user: {
    id: "mock-user-id",
    email: "test@example.com",
    name: "Test User",
    emailVerified: true,
  },
  session: {
    id: "mock-session-id",
    userId: "mock-user-id",
    expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
    ipAddress: "127.0.0.1",
    userAgent: "Mock Browser",
  }
}
```

## Behavior

### Authentication State

In mock mode, authentication state is tracked using a browser cookie (`mock_auth`):

- **Initial state:** Unauthenticated (no cookie)
- **After login:** Sets `mock_auth=true` cookie (7 days expiry)
- **After logout:** Clears the cookie

This mimics the real backend behavior, allowing you to test both authenticated and unauthenticated flows.

### What Works

- ✅ All route guards work normally
- ✅ Login flow (sets mock cookie)
- ✅ Logout flow (clears mock cookie)
- ✅ Protected routes redirect to login when unauthenticated
- ✅ Guest-only routes redirect to dashboard when authenticated
- ✅ Session queries return mock data when authenticated
- ✅ User profile displays mock user info

### What Doesn't Work

- ❌ Real authentication (credentials ignored)
- ❌ Backend API calls
- ❌ Session persistence across browser restarts
- ❌ Email verification
- ❌ Password resets

### Simulated Behaviors

**Login:**

- Accepts any email/password combination
- Simulates 500ms network delay
- Always succeeds and redirects to dashboard

**Logout:**

- Simulates 300ms network delay
- Clears query cache and redirects to login

**Session Check:**

- Simulates 100ms network delay
- Always returns mock session

## Switching Between Modes

### Development (Mock Mode)

```bash
# .env.local
VITE_AUTH_MODE=mock
```

No backend required. Start the app:

```bash
bun dev
```

### Production Mode (Real Backend)

```bash
# .env.local
VITE_AUTH_MODE=production
```

Requires Better Auth backend running on `http://localhost:3001`:

```bash
# Terminal 1: Backend
cd ../backend
bun dev

# Terminal 2: Frontend
bun dev
```

## Implementation Details

Mock mode is implemented in these files:

1. **`src/config/env.ts`** - Reads `VITE_AUTH_MODE` environment variable
2. **`src/features/auth/api/get-session.server.ts`** - Returns mock session in mock mode
3. **`src/features/auth/api/login.ts`** - Bypasses backend call in mock mode
4. **`src/features/auth/api/logout.ts`** - Bypasses backend call in mock mode

The implementation uses simple conditional checks:

```typescript
if (env.AUTH_MODE === "mock") {
  // Return mock data
  return mockSession;
}

// Production: call real backend
return fetch(...);
```

## Security Note

Mock mode is **NOT** for production. It bypasses all authentication and authorization checks. Only use it in development environments.

The production build should always use `VITE_AUTH_MODE=production` (the default).
