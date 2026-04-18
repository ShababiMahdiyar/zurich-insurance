# Progress — zurich-insurance

**Status:** Deployed. ~70%. Tests failing.
**Stack:** Next.js 14, Redux, NextAuth, Google OAuth2, Tailwind.
**Deployed:** https://zurich-insurance-gpol.vercel.app
**Last touched:** 2025-10-16.

## What works

- Google OAuth2 login via NextAuth
- User dashboard with filtering
- Redux state management
- Email masking feature
- Responsive Tailwind UI
- Live on Vercel

## What's missing

- Fix 3 failing Header tests
- Complete API tests
- Loading states across the app

## How to resume

```bash
npm install
npm run dev
npm test
```
