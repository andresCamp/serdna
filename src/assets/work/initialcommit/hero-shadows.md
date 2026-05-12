# InitialCommit Hero Shadow / Gradient Config

Source: `initialcommit/apps/www/components/hero-section.tsx`

## Image container
```tsx
{/* Parent runs at 40% opacity */}
<div className="absolute inset-0 z-0 overflow-hidden opacity-40">
```

## Two-layer gradient overlay
```tsx
{/* Diagonal: bottom-left → top-right */}
<div className="absolute inset-0 bg-linear-to-tr from-[#09090B] via-[#09090B]/70 to-transparent" />

{/* Vertical: bottom → top */}
<div className="absolute inset-0 bg-linear-to-t from-[#09090B] via-transparent to-transparent" />
```

## Bottom section fade
```tsx
{/* 80px fade at bottom of hero for content transition */}
<div className="absolute bottom-0 left-0 right-0 z-[1] h-[80px] bg-gradient-to-t from-[#09090B] to-transparent" />
```

## Brand tokens
- `#09090B` — zinc-950 / `--brand-void`
- `#22E58B` — `--brand-accent`
- `#FAFAFA` — text color
- Font: JetBrains Mono
