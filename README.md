# Most Popular Articles

A React application that displays the most popular articles.

## Prerequisites

- Node.js 18.18 or higher

## Setup

1. Install dependencies:

```bash
yarn install
```

or

```bash
npm install
```

2. Set up Husky for pre-commit hooks:

```bash
yarn prepare
```

## Development

Start the development server:

```bash
yarn dev
```

## Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn preview` - Preview production build
- `yarn lint` - Run ESLint
- `yarn format` - Format code with Prettier
- `yarn format:check` - Check code formatting
- `yarn type-check` - Run TypeScript type checking
- `yarn validate` - Run all validation checks

## Code Quality

This project uses:

- ESLint for code linting
- Prettier for code formatting
- TypeScript for type checking
- Husky for git hooks
- lint-staged for running checks on staged files

Pre-commit hooks will automatically:

- Run TypeScript type checking
- Fix ESLint issues
- Format code with Prettier
