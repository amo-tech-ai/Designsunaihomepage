# Fix Vercel Build - Vite + React (Remove Next.js)

**Date:** February 23, 2026
**Status:** RESOLVED (source files cleaned in prior sessions)

---

## 1. Root Cause

The Vercel build runs `npm install` which tries to resolve every dependency in `package.json`. The package `next-server@7.0.2-canary.49` declares a peer dependency of `react@^16`, while the project uses `react@18.x`. npm strict peer-dep resolution (default in npm 7+) treats this as a fatal conflict and exits with `ERESOLVE`. The fix is simple: this is a Vite + React project, so every Next.js-related package must be removed entirely.

---

## 2. Checklist - Remove Next.js from the Repo

### 2a. Dependencies to DELETE from `package.json`

Remove these if present (check both `dependencies` and `devDependencies`):

- [ ] `next`
- [ ] `next-server`
- [ ] `next-themes`
- [ ] `@next/font`
- [ ] `@next/env`
- [ ] `eslint-config-next`
- [ ] Any other package starting with `next-` or `@next/`

### 2b. Source File Imports (already done)

These were fixed in prior sessions:

- [x] `/app/proposal/page.tsx` - `next/navigation` replaced with `react-router`
- [x] `/app/wizard/WizardContainer.tsx` - `next/navigation` replaced with `react-router`
- [x] `/components/ui/sonner.tsx` - `next-themes` removed, theme hardcoded

Verify no regressions:

```bash
grep -rn "from ['\"]next" --include="*.tsx" --include="*.ts" .
```

Expected result: zero matches in source files (`/docs/*.md` references are harmless).

### 2c. Scripts in `package.json`

Ensure scripts use Vite, not Next:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

Remove if present: `"next dev"`, `"next build"`, `"next start"`, `"next lint"`.

### 2d. Config Files to DELETE (if they exist)

- [ ] `next.config.js` / `next.config.mjs` / `next.config.ts`
- [ ] `.next/` directory
- [ ] `pages/` directory (Next.js routing - not our `/app/` which uses react-router)

Keep these (they are Vite/React):

- `vite.config.ts`
- `tsconfig.json`
- `postcss.config.js`
- `tailwind.config.js`

---

## 3. Target `package.json` Dependencies (Minimal)

```json
{
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router": "^7.x.x"
  },
  "devDependencies": {
    "vite": "^6.x.x",
    "@vitejs/plugin-react": "^4.x.x",
    "typescript": "^5.x.x",
    "@types/react": "^18.x.x",
    "@types/react-dom": "^18.x.x",
    "tailwindcss": "^4.x.x",
    "autoprefixer": "^10.x.x",
    "postcss": "^8.x.x"
  }
}
```

Plus any project-specific packages (lucide-react, recharts, motion, sonner, etc.) - none of which conflict with React 18.

---

## 4. Vercel Settings

| Setting            | Value              |
|--------------------|--------------------|
| Framework Preset   | **Vite**           |
| Build Command      | `vite build`       |
| Output Directory   | `dist`             |
| Install Command    | `npm install`      |
| Node.js Version    | 18.x or 20.x      |

To set: Vercel Dashboard > Project > Settings > General > Build & Development Settings.

---

## 5. Verification Steps

### 5a. Local

```bash
# 1. Clean install
rm -rf node_modules package-lock.json
npm install

# 2. Build
npm run build

# 3. Check output
ls dist/index.html  # should exist
```

### 5b. What Success Looks Like on Vercel

```
Installing dependencies...
npm install  # completes with 0 errors

Building...
vite build
dist/index.html        1.23 kB
dist/assets/index-xxx.js   450.2 kB

Build Completed in 12s
Deploying...
Production: https://your-project.vercel.app
```

No `ERESOLVE`, no `peer dep` warnings, no `next-server` in the log.

---

## 6. Quick Diagnostic Commands

```bash
# Find any remaining Next.js imports in source
grep -rn "from ['\"]next" --include="*.ts" --include="*.tsx" src/

# Find next-server in package-lock
grep "next-server" package-lock.json

# Check what pulls in next-server
npm ls next-server
```

If `npm ls next-server` returns anything, that package must be removed.

---

**Resolution:** All 3 source-file Next.js imports were removed on Feb 23, 2026. The remaining fix is ensuring `next-server` (and any other `next-*` packages) are deleted from `package.json` in the actual repo before the next Vercel deploy.
