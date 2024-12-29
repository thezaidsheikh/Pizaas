# Pizaas Project

A simple React project using Vite as build tool.

## Project Versions

- **pnpm**: 9.15.1 (check with `pnpm --version`)
- **React**: 18.3.1 (check with `pnpm --version`)
- **Vite**: 6.0.6 (check with `pnpm --version`)
- **ESLint**: 9.17.0 (check with `pnpm --version`)

### Dependency Management

This project uses pnpm for package management. Ensure you have the latest version of pnpm installed.

### Installation

1. Install pnpm: `npm install -g pnpm`
2. Install project dependencies: `pnpm install`

## Quick start

1. Clone the repository: `git clone https://github.com/thezaidsheikh/Pizaas.git`
2. Install dependencies: `pnpm install`
3. Run the development server: `pnpm run dev`
4. Open the app in your favorite browser: `http://localhost:3000`

## Build

1. Run the build script: `pnpm run build`
2. The app will be built in the `dist` folder

## Lint

1. Run the lint script: `pnpm run lint`
2. The linter will check the code for errors and warnings

## Preview

1. Run the preview script: `pnpm run preview`
2. The app will be served in production mode

## Folder structure

- `dist/`: The production build of the app
- `node_modules/`: Dependencies installed by npm
- `public/`: Static assets
- `src/`: Source code
  - `App.jsx`: The main component
  - `main.jsx`: The entry point of the app
  - `components/`: React components
    - `PizzaCard.jsx`: A card that displays a pizza
    - `PizzaList.jsx`: A list that displays a list of pizzas
  - `data/`: Data for the app
    - `pizzas.json`: A JSON file containing data about pizzas
  - `styles/`: CSS styles for the app
    - `app.css`: Styles for the app
    * `features/`: Feature-specific logic and components
    - Contains modular, feature-focused code
    - Organizes related functionality together
  - `services/`: External API and data fetching logic
    - Handles communication with backend services
    - Separates data fetching from UI components
  - `ui/`: Reusable UI components
    - Generic, presentational components
    - Focuses on visual elements and layout
  - `utils/`: Helper functions and utility scripts
    - Provides reusable logic across the application
    - Contains helper functions, type conversions, etc.

## License

MIT Licensed. See [LICENSE](LICENSE) for more information.
