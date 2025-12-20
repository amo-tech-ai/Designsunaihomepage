# Prompt 3: Add PostCSS Config
**Priority:** P0 - CRITICAL  
**Time:** 2 minutes  
**File:** `postcss.config.js` (create new)

---

## Task
Create PostCSS configuration for Tailwind CSS processing.

---

## Create File: `postcss.config.js`

Create this file in the project root:

```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

---

## Verification

```bash
# Test build - CSS should process correctly
npm run build

# Check build output for CSS file
ls build/assets/*.css  # Should exist and be processed
```

---

## Mermaid: PostCSS Flow

```mermaid
graph LR
    A[Create postcss.config.js] --> B[Add Tailwind Plugin]
    B --> C[Add Autoprefixer]
    C --> D[Test Build]
    D --> E[✅ Complete]
```

---

## Why This Matters

- PostCSS processes Tailwind CSS directives
- Autoprefixer adds vendor prefixes
- Required for production builds
- Without this, Tailwind classes may not work in production

---

## Next Steps

After completing this prompt, proceed to:
- [Prompt 4: Add Tailwind Config](./03-prompt-04-add-tailwind-config.md)

