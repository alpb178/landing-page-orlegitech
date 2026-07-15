# Project Rules

## Role

Senior Front-End Developer. Stack: Next.js (App Router), React, TypeScript, TailwindCSS, Shadcn, Radix.

## Product Terminology

Zendinit pivoted to a Grabr-style cross-border P2P shopping model in 2026-04. Before writing any UI copy, i18n key, ticket description, or commit message touching domain language, read the glossary:

- **`apps/pwa/docs/glossary.md`** — single source of truth for shopper, traveler, order, product, reward, flight, escrow, payout, platform fee. Lists the prohibited legacy terms (sender, order, paquete, transportista) and their replacements.

## Core Principles

- Follow user requirements exactly.
- Plan step-by-step before writing code.
- Write complete, bug-free, production-ready code. No TODOs, placeholders, or missing pieces.
- DRY. Readability over performance. Include all required imports.
- Be concise. Admit uncertainty instead of guessing.
- TDD is **MANDATORY** (see Testing section).

## Naming

| Convention   | Applies to                            |
| ------------ | ------------------------------------- |
| `PascalCase` | Components, classes                   |
| `camelCase`  | Variables, functions, methods, hooks  |
| `kebab-case` | Files (utils, constants), directories |
| `UPPERCASE`  | Environment variables                 |

- Functions start with a verb.
- Booleans use verb prefixes: `isLoading`, `hasError`, `canDelete`.
- Event handlers use `handle` prefix: `handleClick`, `handleKeyDown`.
- No abbreviations except: `API`, `URL`, `i`, `j`, `err`, `ctx`.
- No magic numbers — define constants.

## Code Style

- TypeScript everywhere. Functional/declarative patterns only — no classes.
- Prefer `const` arrow functions with explicit types: `const toggle = (): void => {}`.
- Prefer interfaces over types for object shapes.
- Named exports only.
- Early returns and guard clauses for error/edge cases.
- Modularization over duplication.
- File export order: components → subcomponents → helpers → static content → types.
- Accessibility required: `tabIndex`, `aria-label`, keyboard handlers on interactive elements.

## TypeScript & Validation

- Zod for schema validation and type inference.
- No enums — use literal types or maps.
- Functional components with TypeScript interfaces for props.

## State & Data Fetching

- **State**: Zustand.
- **Data fetching**: SWR.
- Minimize `useEffect` / `setState` — prefer derived state and memoization.

## Error Handling

- Handle errors at the beginning of functions with guard clauses and early returns.
- Use custom error types/factories for consistency.
- Log errors properly and show user-friendly messages.

## Performance

- Dynamic imports for code splitting (Next.js).
- Lazy loading for non-critical components.

## Testing (MANDATORY TDD)

Every new feature and bug fix must follow **Red → Green → Refactor**:

1. **Red**: Write a failing test that defines expected behavior.
2. **Green**: Write minimum code to pass the test.
3. **Refactor**: Clean up while keeping tests green.

| Scenario                   | Requirement                                                                          |
| -------------------------- | ------------------------------------------------------------------------------------ |
| New code                   | Tests written first (TDD).                                                           |
| Existing code modification | Ensure **80% coverage** on the module before changing it. Write missing tests first. |

- **Stack**: Vitest + React Testing Library. E2E tests in `e2e/`.
- **Unit tests**: Co-located (`Component.test.tsx`).
- **Integration tests**: Feature's `__tests__/` directory.
- Run `vitest --coverage` to verify thresholds before committing.

## File Structure

```
e2e/                              # E2E tests
public/
src/
├── app/                          # Next.js App Router
│   ├── (auth)/                   # Route groups
│   │   ├── login/page.tsx        # Thin page → delegates to feature
│   │   └── layout.tsx
│   └── dashboard/page.tsx
├── components/                   # Shared design system
│   ├── ui/                       # Atoms/molecules (Button, Input, Dialog)
│   └── layout/                   # Header, Sidebar, Footer
├── features/                     # Vertical slices (business logic)
│   └── <module>/
│       ├── __tests__/            # Integration tests
│       ├── components/           # Module-specific components + unit tests
│       ├── hooks/                # State logic
│       ├── actions/              # Server Actions
│       └── types/                # Interfaces, Zod schemas
├── lib/                          # Global utilities and configuration
├── hooks/                        # Global hooks
└── definitions/                  # Global type definitions
```

## Tooling: code-review-graph (MCP)

This repo ships with a [`code-review-graph`](https://github.com/tirth8205/code-review-graph) integration that builds a local Tree-sitter knowledge graph of the codebase and exposes it to Claude Code via MCP. Files committed in the repo (`.mcp.json`, `.claude/settings.json`, `.claude/skills/`, additions in `CLAUDE.md`) configure the integration; the graph data itself lives in `.code-review-graph/` and is gitignored.

**One-time setup per machine:**

```bash
uv tool install code-review-graph        # global CLI (uv recommended; pipx/pip also work)
```

**One-time setup per clone:**

```bash
code-review-graph build                  # parse the codebase (~30s for this monorepo)
```

Once built the graph auto-updates: a Claude Code `PostToolUse` hook calls `code-review-graph update` after every edit, and the husky `pre-commit` hook runs `update` + `detect-changes --brief` before `lint-staged`. If you don't have the CLI installed the hooks no-op silently (each call is wrapped in `|| true`).

When working with Claude Code, the agent will prefer the graph's MCP tools (`semantic_search_nodes`, `query_graph`, `detect_changes`, etc.) over `Grep`/`Read` for codebase exploration — this is what cuts review token cost. See the appended section in `CLAUDE.md` for the full tool list.
