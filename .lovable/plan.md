# Premium Light-Mode Redesign + 3D Hero

Full visual redesign of the portfolio. Every existing section, heading, project, skill, tool, timeline entry, achievement and contact detail stays exactly as written — only the look, motion and layout change.

## New design language

- Background off-white `#F8F9FA`, text deep charcoal `#212529`, dark surfaces gunmetal `#343A40` (white text on them), borders cool platinum `#E9ECEF`.
- Typography: Space Grotesk for headings, Inter for body. Consistent scale, generous line-height.
- Consistent radii, soft layered shadows, one shared animation timing curve.
- The current dark "ink and fire" theme, red accent, grain overlay and custom red cursor are retired.

## 3D hero — what is realistic

The hero centerpiece will be a real Three.js / React Three Fiber scene (not an image), with a **stylized low-poly teenage developer at a desk**: hoodie, headphones, laptop/monitor, mechanical keyboard, subtle RGB underglow, studio lighting with soft shadows.

Honest scope note: a photoreal, fully rigged character with facial blinking and finger-level typing cannot be authored here without a purchased/rigged GLB asset. The character will be a clean geometric "Apple keynote" style figure, animated procedurally:

- Idle loop: breathing, head sway, arm/hand micro-motion, screen glow.
- Cursor tracking: head and upper body turn slightly toward the pointer.
- Scroll reactions: typing at Skills, project colours on the monitor at Work, turn toward the second screen at Journey, wave at Contact.
- Camera drifts smoothly with scroll — small parallax, no motion sickness.
- Behind it: animated grid, floating particles, blurred gradient glows.

If you would rather have a photoreal rigged avatar, that needs a purchased GLB (Ready Player Me / Mixamo) — say so and I'll wire that instead.

## Section-by-section

- **Nav** — glass blur bar, active-section indicator, animated underline hovers, refined mobile sheet.
- **Hero** — split composition: name/tagline/typewriter on the left, 3D scene centre-right, availability pill and socials, scroll cue.
- **Work** — premium cards with hover elevation, animated border, category badges, arrow reveal.
- **About** — improved measure and typography, animated counters, highlight accents.
- **Skills** — grouped grid with animated proficiency bars, icons, staggered reveal.
- **Tools** — refined marquee/chips on platinum borders.
- **Journey** — vertical timeline with animated progress line, icons, hover expansion.
- **Achievements** — certificate card matching the new card system, lightbox on click.
- **Contact** — floating dark card, animated inputs, polished CTA and success state.
- **Footer** — minimal, social icons, hover motion.

## Technical

- Add `three`, `@react-three/fiber@^8.18`, `@react-three/drei@^9.122` (React 18 compatible pins).
- 3D scene lazy-loaded via `React.lazy` + Suspense, `dpr` capped, frameloop paused off-screen; static fallback for mobile and `prefers-reduced-motion`.
- Rewrite tokens in `index.css` + `tailwind.config.ts` (HSL semantic tokens only, no hardcoded colours in components).
- Shared primitives: `SectionHeading`, card and button variants, motion presets — no duplicated animation code.
- Accessibility: single `<main>`, semantic landmarks, aria-labels on icon buttons, visible focus rings, AA contrast, full reduced-motion path, canvas `aria-hidden` with text equivalents.
- Verification: typecheck, lint, and a Playwright pass at mobile/tablet/desktop/ultrawide checking for console errors and horizontal overflow.