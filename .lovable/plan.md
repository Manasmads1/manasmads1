# Premium Light-Mode Redesign + 3D Hero

Full visual redesign of the portfolio. Every existing section, heading, project, skill, tool, timeline entry, achievement and contact detail stays exactly as written — only the look, motion and layout change.

## New design language

- Background off-white `#F8F9FA`, text deep charcoal `#212529`, dark surfaces gunmetal `#343A40` (white text on them), borders cool platinum `#E9ECEF`.
- Typography: Space Grotesk for headings, Inter for body. Consistent scale, generous line-height.
- Consistent radii, soft layered shadows, one shared animation timing curve.
- The current dark "ink and fire" theme, red accent, grain overlay and custom red cursor are retired.

## 3D hero — workspace first

A real Three.js / React Three Fiber scene (never an image). Because a photoreal rigged human is not authorable here without a purchased GLB, the budget goes into an **exceptional developer workspace** rather than a weak character: dual-monitor desk, mechanical keyboard, mouse, laptop, headphones on a stand, mug, ambient RGB underglow, floating holographic code panels, animated monitor content, studio three-point lighting, soft contact shadows, subtle reflections and depth of field.

A minimal, confidently stylized seated figure sits at the desk as scene anchor — geometric, not cartoonish, with breathing, head sway and typing motion. If you later want a photoreal rigged avatar, that needs a purchased GLB (Ready Player Me / Mixamo) and I can swap it in.

- Cursor tracking: camera, figure and holo panels tilt subtly toward the pointer.
- Scroll reactions: typing at Skills, project colours on the monitor at Work, turn toward the second screen at Journey, wave at Contact.
- Camera dollies smoothly along a scroll-driven path — cinematic, no motion sickness.

### Floating hero UI layer (DOM over canvas)

Glass cards composed asymmetrically around the scene, each with its own entrance and idle drift: terminal window, editor panel snippet, GitHub-style contribution grid, technology badges, availability badge, and Resume + social action buttons. Restrained density — they frame the scene, never crowd it.

### Layered background system

Moving mesh gradients, blurred gradient blobs, floating wireframe geometry, animated grid, faint drifting code glyphs, ambient light bloom, gentle noise texture — stacked with parallax depth, all very low contrast.

## Storytelling scroll

The page reads as one continuous experience, not stacked blocks: a scroll-progress-driven timeline coordinates camera movement, background layer parallax, section lighting shifts and content reveals. Sections blend via gradient washes, varying rhythm of whitespace and overlapping background layers rather than hard edges.

## Motion system

One shared spring/easing vocabulary (Apple/Linear register) used everywhere: staggered layered reveals combining blur, scale, opacity and small transforms — no generic fade-ins. Magnetic buttons, hover lift, card tilt, glass reflection sweeps, animated borders, spring icon transitions.

## Section-by-section

- **Nav** — glass blur bar, scroll progress indicator, active-section highlight, magnetic hovers, elegant mobile sheet, scroll-to-top button.
- **Hero** — asymmetric composition: name/typewriter left, 3D workspace centre-right, floating glass UI layer, availability badge, resume + social actions, scroll cue.
- **Work** — showcase cards with browser/device mockup frames, large preview area, tilt + hover reveal, tech badges, clearly ranked action buttons.
- **About** — refined measure and typography, animated counters, highlight accents, layered depth.
- **Skills** — grouped interactive skill cards and technology clusters with iconography and staggered motion; proficiency conveyed by weight and motion, not percentage bars.
- **Tools** — refined marquee with depth blur at the edges.
- **Journey** — vertical timeline with scroll-drawn progress line, icons, hover expansion.
- **Achievements** — certificate showcase card with lightbox.
- **Contact** — floating gunmetal card, animated inputs, strong CTA, success animation.
- **Footer** — closing section: signature branding, socials, availability, "Built with React + Vite", last-updated line, smooth hovers.

## Technical

- Add `three`, `@react-three/fiber@^8.18`, `@react-three/drei@^9.122` (React 18 compatible pins).
- 3D scene lazy-loaded via `React.lazy` + Suspense, `dpr` capped, frameloop paused off-screen, instanced geometry, no post-processing stack beyond a cheap bloom; lighter fallback scene on mobile and a static composition under `prefers-reduced-motion`.
- Scroll orchestration via framer-motion `useScroll`/`useTransform` (transform/opacity only, no layout thrash) to hold 60 FPS and zero CLS.
- Targets: Lighthouse Performance 90+, Accessibility / Best Practices / SEO 100.
- Rewrite tokens in `index.css` + `tailwind.config.ts` (HSL semantic tokens only, no hardcoded colours in components).
- Shared primitives: `SectionHeading`, card and button variants, motion presets — no duplicated animation code.
- Accessibility: single `<main>`, semantic landmarks, aria-labels on icon buttons, visible focus rings, AA contrast, full reduced-motion path, canvas `aria-hidden` with text equivalents.
- Verification: typecheck, lint, and a Playwright pass at mobile/tablet/desktop/ultrawide checking for console errors and horizontal overflow.