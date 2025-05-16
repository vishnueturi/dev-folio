.# Project Setup Documentation

## 1. Create a New Next.js Project

- Navigate to your desired parent directory in the terminal.
- Create a new Next.js app using npm with all required configurations.
- Move into your new project directory.

## 2. Configure ESLint and Prettier

- Install required dependencies.
- Create Prettier configuration file.
- Update ESLint configuration.
- Add format and lint scripts to `package.json`.

## 3. Project Structure Setup

- Create the required directory structure:
  - `src/app/` for pages and API routes.
  - `src/components/` for layout, shared, and UI components.
  - `src/lib/` for utilities, hooks, and API integrations.
  - `src/config/` for configuration files.
  - `src/types/` for TypeScript type definitions.
  - `public/` for static assets.
  - `styles/` for global styles.

## 4. Layout Components Implementation

- Create a `Container` component for consistent layout.
- Implement a responsive `Header` with navigation and theme toggle.
- Add a `Footer` with quick links and contact information.
- Update the root layout to integrate `Header` and `Footer`.

## 5. Initial Page Setup

- Create a home page with a hero section and call-to-action buttons.
- Configure Tailwind CSS with a custom theme, color palette, and typography.

## 6. Home Page Modernization (UI Revamp)

- Design a hero section with a bold heading, subtitle, and buttons.
- Add a "Featured Projects" section with responsive project cards.
- Ensure consistent spacing, colors, and typography.
- Simplify the footer with muted links and a tagline.

## Available Commands

- `npm run format`: Format all files.
- `npm run format:check`: Check if files need formatting.
- `npm run lint`: Run ESLint.
- `npm run lint:fix`: Run ESLint and fix issues.
- `npm run dev`: Start the development server.

---

## Next Steps

1. Implement theme toggle functionality.
2. Create reusable UI components (Button, Card, etc.).
3. Set up remaining pages (About, Projects, Contact).
4. Add animations and transitions.
5. Implement AI features.
6. Set up a testing environment.