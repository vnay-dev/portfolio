# Feature Flags Tracker

This file is the single source of truth for feature flags implemented in this project.

## How it works

- Flags are defined in `app/constants/featureFlags.ts`.
- Flags are read via `isFeatureEnabled("<flagKey>")`.
- Environment values support `true/false` and `1/0`.
- If an environment variable is not set, the flag falls back to its `defaultValue`.

## Current Flags

| Flag key | Env var | Default | Status | Used in |
|---|---|---:|---|---|
| `navHideAboutMe` | `NEXT_PUBLIC_FF_NAV_HIDE_ABOUT_ME` | `false` | Active | `components/shared/composite/Navbar.tsx` |
| `navHideResume` | `NEXT_PUBLIC_FF_NAV_HIDE_RESUME` | `false` | Active | `components/shared/composite/Navbar.tsx` |
| `homeHideThinkingBeyondConstraints` | `NEXT_PUBLIC_FF_HOME_HIDE_THINKING_BEYOND_CONSTRAINTS` | `false` | Active | `app/page.tsx` |
| `homeHideReflections` | `NEXT_PUBLIC_FF_HOME_HIDE_REFLECTIONS` | `false` | Active | `app/page.tsx` |
| `homeHideFormAndAesthetics` | `NEXT_PUBLIC_FF_HOME_HIDE_FORM_AND_AESTHETICS` | `false` | Active | `app/page.tsx` |
| `homeArtGallery` | `NEXT_PUBLIC_FF_HOME_ART_GALLERY` | `true` | Active | `app/page.tsx` |
| `tdbridgeImplementationFramework` | `NEXT_PUBLIC_FF_TDBRIDGE_IMPLEMENTATION_FRAMEWORK` | `true` | Active | `app/projects/tdbridge/page.tsx` |
| `tdbridgeOutcomePlaceholder` | `NEXT_PUBLIC_FF_TDBRIDGE_OUTCOME_PLACEHOLDER` | `true` | Active | `app/projects/tdbridge/page.tsx` |
| `tdbridgeWhatsNext` | `NEXT_PUBLIC_FF_TDBRIDGE_WHATS_NEXT` | `true` | Active | `app/projects/tdbridge/page.tsx` |

## Status definitions

- `Active`: currently used in the codebase.
- `Planned`: approved, not yet implemented.
- `Deprecated`: should be removed after rollout cleanup.
- `Removed`: deleted from codebase (kept temporarily for history only).

## Example usage

```bash
# Disable Art Gallery on home page
NEXT_PUBLIC_FF_HOME_ART_GALLERY=false
```

```tsx
import { isFeatureEnabled } from "@/app/constants";

const enabled = isFeatureEnabled("homeArtGallery");
```
