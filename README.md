# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

## Supabase GitHub OAuth setup

1. Copy `.env.example` to `.env`.
2. Add your Supabase project values:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
  - Optional: `VITE_SUPABASE_AUTH_REDIRECT_URL=http://localhost:5173/getting-started`
3. In Supabase Auth > URL Configuration, set:
  - Site URL: `http://localhost:5173`
  - Redirect URLs: add `http://localhost:5173/getting-started` (or your value from `VITE_SUPABASE_AUTH_REDIRECT_URL`)
4. In Supabase Auth > Providers > GitHub, enable the provider.
5. In your GitHub OAuth App, set:
  - Homepage URL: `http://localhost:5173` (for local dev)
  - Authorization callback URL: `https://<your-project-id>.supabase.co/auth/v1/callback`
6. Sign in from `/getting-started`; on success, the app redirects to `/dashboard` and loads your GitHub user profile + repositories.

### Common OAuth failures

- `Supabase is not configured yet`: `.env` still has placeholder values. Replace with real project values.
- `redirect_to is not allowed`: add the exact redirect URL to Supabase Redirect URLs.
- `The redirect_uri is not associated with this application`: in GitHub OAuth App settings, callback URL does not exactly match Supabase callback URL. Set it to `https://<your-project-id>.supabase.co/auth/v1/callback`.
- `Error getting user profile from external provider`: ensure GitHub OAuth is configured in Supabase with the correct Client ID/Secret, and login requests include `user:email` scope.
- Login succeeds but returns to login page: ensure callback returns to `/getting-started` and the app is running on the same origin.

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
