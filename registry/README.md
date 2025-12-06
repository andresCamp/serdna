# Registry

## Adding a Component

1. Create component in `registry/default/components/[name]/[name].tsx`
2. Use `@/registry/default/...` for imports
3. Add entry to `/registry.json`
4. Run `pnpm registry:build`

## Adding a UI Primitive

1. Create component in `registry/default/ui/[name]/[name].tsx`
2. Add entry to `/registry.json` with `"type": "registry:ui"`
3. Run `pnpm registry:build`

## Directory Structure

```
registry/default/
├── components/   # Custom components
├── ui/           # Base UI primitives
├── hooks/        # Custom hooks
└── lib/          # Utilities
```

## registry.json Entry

```json
{
  "name": "component-name",
  "type": "registry:component",
  "title": "Component Name",
  "description": "Description for LLMs.",
  "registryDependencies": ["input"],
  "dependencies": ["package-name"],
  "files": [
    {
      "path": "registry/default/components/component-name/component-name.tsx",
      "type": "registry:component"
    }
  ]
}
```

## Build

```bash
pnpm registry:build
```

Output: `public/r/[name].json`

## Install from Registry

```bash
npx shadcn@latest add https://serdna.dev/r/[name].json
```
