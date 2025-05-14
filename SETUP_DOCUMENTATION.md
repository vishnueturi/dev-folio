# Project Setup Documentation

## 1. Create a New Next.js Project

**Step 1: Navigate to your desired parent directory in the terminal.**

```bash
cd /path/to/your/projects
```

**Step 2: Create a new Next.js app using npm with all required configurations:**

```bash
npx create-next-app@latest portfolio-app --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
```

- `portfolio-app` is the name of your new project folder. Change it if you want a different name.
- This command sets up:
  - TypeScript
  - Tailwind CSS
  - ESLint
  - App Router
  - `src/` directory structure
  - Custom import alias `@/*`

**Step 3: When prompted:**
- For "Would you like to use Turbopack for `next dev`?", select **No** (recommended for stability).

**Step 4: Move into your new project directory:**

```bash
cd portfolio-app
```

## 2. Configure ESLint and Prettier

**Step 1: Install required dependencies:**

```bash
npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier
```

**Step 2: Create Prettier configuration file (.prettierrc):**

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "tabWidth": 2,
  "useTabs": false,
  "printWidth": 100,
  "bracketSpacing": true,
  "arrowParens": "always",
  "endOfLine": "auto"
}
```

**Step 3: Update ESLint configuration (.eslintrc.json):**

```json
{
  "extends": [
    "next/core-web-vitals",
    "prettier"
  ],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error",
    "no-unused-vars": "warn",
    "no-console": "warn"
  }
}
```

**Step 4: Add format scripts to package.json:**

```json
{
  "scripts": {
    "format": "prettier --write .",
    "format:check": "prettier --check .",
    "lint": "next lint",
    "lint:fix": "next lint --fix"
  }
}
```

## 3. Project Structure Setup

**Step 1: Create the required directory structure:**

```bash
mkdir -p src/components/{ui,layout,sections,shared} src/lib/{utils,hooks,ai,api} src/types src/config
```

This creates the following structure:
```
src/
├── components/
│   ├── ui/        # Reusable UI components
│   ├── layout/    # Layout components
│   ├── sections/  # Page sections
│   └── shared/    # Shared components
├── lib/
│   ├── utils/     # Utility functions
│   ├── hooks/     # Custom React hooks
│   ├── ai/        # AI-related functionality
│   └── api/       # API integration
├── types/         # TypeScript type definitions
└── config/        # Configuration files
```

## 4. Layout Components Implementation

**Step 1: Create the Container component (src/components/layout/Container.tsx):**

```typescript
interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`container mx-auto px-4 ${className}`}>
      {children}
    </div>
  );
}
```

**Step 2: Create the Header component (src/components/layout/Header.tsx):**
- Implements responsive navigation
- Mobile menu with smooth animations:
  ```typescript
  // Mobile menu container with animations
  <div
    className={`md:hidden fixed top-16 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-foreground/10 transition-all duration-300 ease-in-out ${
      isMenuOpen
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 -translate-y-4 pointer-events-none'
    }`}
  >
  ```
  - Slide-down animation using `translate-y`
  - Fade effect using `opacity`
  - Smooth transitions with `duration-300` and `ease-in-out`
  - Backdrop blur effect with `backdrop-blur-sm`
  - Semi-transparent background with `bg-background/95`
- Animated hamburger menu:
  ```typescript
  <div className="w-6 h-6 flex flex-col justify-center items-center gap-1.5">
    <span className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
    <span className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
    <span className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
  </div>
  ```
  - Smooth rotation and translation animations
  - Consistent timing with menu animation
  - Clean cross icon transformation
- Theme toggle button (structure only)

**Step 3: Create the Footer component (src/components/layout/Footer.tsx):**
- Quick links section
- Social media links
- Contact information
- Copyright notice

**Step 4: Update the root layout (src/app/layout.tsx):**
- Integrate Header and Footer components
- Configure font (Inter)
- Set up basic layout structure
- Add metadata

## 5. Initial Page Setup

**Step 1: Create the home page (src/app/page.tsx):**
- Hero section with introduction
- Call-to-action buttons
- Responsive design
- Modern styling with Tailwind CSS

**Step 2: Configure Tailwind CSS:**
- Update tailwind.config.js with custom theme
- Set up color palette
- Configure typography
- Add responsive breakpoints

## 6. Home Page Modernization (UI Revamp)

**Step 1: Hero Section**
- Large, bold heading for the name
- Subtitle with dot separators and muted color
- Two modern buttons: "View Projects" (primary) and "About Me" (secondary)
- Example:
  ```tsx
  <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
    Hi, I'm Vishnu Eturi
  </h1>
  <p className="text-lg md:text-2xl text-foreground/70 mb-6 flex flex-wrap gap-x-2 gap-y-1 items-center">
    <span>Software Engineer</span>
    <span className="text-2xl leading-none">·</span>
    ...
  </p>
  ```

**Step 2: Featured Projects Section**
- Section title: "Featured Projects"
- Responsive grid of project cards
- Cards have subtle backgrounds, rounded corners, and hover effects
- Example:
  ```tsx
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {projects.map((project) => (
      <div key={project.title} className="rounded-xl bg-foreground/5 p-6 text-left shadow-sm hover:shadow-lg transition-shadow border border-foreground/10">
        <h3 className="font-semibold text-lg text-white mb-2">{project.title}</h3>
        <p className="text-foreground/70 text-base">{project.description}</p>
      </div>
    ))}
  </div>
  ```

**Step 3: Consistent Spacing, Colors, and Typography**
- Use Tailwind for spacing, color, and font consistency
- Ensure a true dark background and soft gray text
- Use `text-white` for headings, `text-foreground/70` for subtitles

**Step 4: Footer**
- Simple, centered layout with muted links and a tagline

---

This revamp ensures a modern, clean, and visually appealing landing page, closely matching the provided design inspiration.

## Available Commands:
- `npm run format`: Format all files
- `npm run format:check`: Check if files need formatting
- `npm run lint`: Run ESLint
- `npm run lint:fix`: Run ESLint and fix issues
- `npm run dev`: Start development server

---

## Next Steps
1. Implement theme toggle functionality
2. Create UI components (Button, Card, etc.)
3. Set up remaining pages (About, Projects, Contact)
4. Add animations and transitions
5. Implement AI features
6. Set up testing environment