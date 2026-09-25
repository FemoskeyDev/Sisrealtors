# Dominion Leisure City — Development Guidelines

## Project

This is the marketing website for Dominion Leisure City by SIS REALTORS Limited.

## Stack

- React
- TypeScript
- Vite
- Tailwind CSS 4
- Motion / motion-react
- Lucide React
- pnpm

## Architecture

- Shared UI components live in `src/components`
- Landing-page sections live in `src/sections`
- Application assets live in `src/assets`
- Static assets live in `public`
- Use `Container` for page-width and gutters
- Reuse existing components before creating new ones

## Design direction

The site should feel:

- premium
- editorial
- cinematic
- modern
- confident
- timeless

Avoid:

- generic SaaS layouts
- excessive card grids
- unnecessary gradients
- excessive rounded corners
- visually noisy interfaces
- generic AI-generated layouts

## Styling

- Use Tailwind utilities
- Prefer existing Tailwind utilities over arbitrary values when possible
- Keep responsive behavior intentional
- Do not introduce horizontal page overflow
- Reuse the project's existing design tokens

## Brand

Primary: `#D39B2A`  
Secondary: `#051B41`

Use brand colors intentionally, especially for CTAs.

## Animation

- Use `motion/react` for intentional transitions
- Keep animations subtle and purposeful
- Respect reduced-motion preferences where appropriate

## Content

Do not invent project facts, measurements, locations, companies, partnerships, or development information. Use the supplied Dominion Leisure City brief as the source of truth.

## Code quality

Before completing a coding task:

- inspect existing patterns first
- make the smallest appropriate change
- avoid unnecessary dependencies
- preserve existing functionality
- run `pnpm lint`
- run `pnpm build`

## Git

Do not commit or push unless explicitly asked.

## Deployment

Production deployment is handled by GitHub Actions after changes are pushed to `main`. Do not modify deployment configuration unless explicitly requested.

Do not modify unrelated files while working on a task.
