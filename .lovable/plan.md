# Portfolio Refinement — Alignment, Achievements, Contact

Theme stays exactly as-is: off-white background, blue accent, dark charcoal text, current cards, borders, shadows, buttons and typography. This is refinement, not a redesign.

## 1. Remove the 3D workspace

Delete the WebGL hero visual and everything only it used: the canvas host, the workspace scene, the static fallback, the screen-texture helper, the palette file, the scene-state bridge, and the unused avatar asset. Remove `three`, `@react-three/fiber`, `@react-three/drei` and `@types/three` from dependencies, plus the scroll listener that only fed the scene.

The hero keeps its typography, buttons and the floating dev cards (terminal, code snippet, activity grid) on the right — no 3D, no character, no replacement animation. The right column gets rebalanced so the cards sit as an intentional, calm composition with generous whitespace rather than filling a hole.

## 2. Loading screen

A short "MANAS" intro overlay in the current white/blue system: wordmark, thin blue progress line, subtle fade, then a smooth wipe into the homepage. It waits only on real readiness (fonts + window load) with a hard cap of about 1.2s, and skips instantly if the page is already ready. With reduced motion it shows a static frame and exits immediately. Full-viewport, no scroll-lock issues on mobile.

## 3. Section order and alignment

New vertical progression:

```text
HOME → ABOUT → ACHIEVEMENTS → SKILLS → TOOLS → WORK → JOURNEY → CONTACT
```

Tools stays folded in right after Skills; Journey (the timeline) stays between Work and Contact. Section numbering is redone to match the new order.

Every section is put on one shared container: identical max width, identical horizontal padding, identical heading block position, and a consistent vertical rhythm between sections. Headings, body copy, cards and dividers all snap to the same left edge so the page reads as one continuous site.

## 4. About — exact bio

The current copy is replaced with your paragraph verbatim, no edits or additions. It is set at a comfortable reading measure (~60–70 characters), larger and looser than default body text, with the section built around the words rather than around cards. "10+ Reels" and "3K Followers" are removed entirely; the remaining stat/label row is rebalanced (no invented replacements) and the language chips align to the same grid.

## 5. Skills update

Reorganized into numbered groups:

```text
01  Website Development   HTML · CSS · JavaScript · React · Bootstrap
02  Programming           Python (intermediate, developing backend)
03  Creative Workflow     Vibe Coding
```

Standalone "HTML" is removed as its own skill. The positioning line reads as Frontend Developer. Python is labelled honestly as intermediate/developing. All other genuine existing skills (video editing, motion graphics, Canva, script writing, prompt engineering, 3D modelling, AI ads, documents, affiliate marketing, social media) are kept, grouped under their own numbered blocks in the same style. The Tools marquee is updated to match (adds CSS, JavaScript, React, Bootstrap).

## 6. Achievements — editorial numbered list

"Certifications & recognition" becomes **Achievements**, moved up to third position, and rebuilt as an interactive numbered list instead of a card grid:

```text
01   Generative AI Mastermind        Outskill · Certificate      →
──────────────────────────────────────────────────────────────
02   ...
```

Each row: index, large title, quiet metadata, thin divider, hover state (title shifts, blue accent appears), and a selected state. Clicking a row expands its detail panel with a smooth height/opacity transition, showing description, metadata and the certificate image when one exists. Clicking the image opens an accessible lightbox (Escape to close, focus trap) so certificates are viewable at full size. One item is open by default on desktop; on mobile the detail expands inline under the tapped row.

The list is driven by a single data array with optional fields (category, issuer, year, level, image), so school / inter-school / interstate / national / music achievements can be added later by appending entries — no redesign needed. Nothing is fabricated; only the existing Generative AI Mastermind certificate is listed for now.

## 7. Work / Projects

Content stays exactly as written. The grid becomes the same numbered-list interaction as Achievements: numbered rows, hover, selected state, and a preview panel revealing the existing description, tags and mockup for the selected project. Alignment, typography and spacing tighten to the shared grid.

## 8. Contact — restructured

Structure follows the reference composition, rendered in the current white/blue system:

```text
        LET'S CONNECT.            (large editorial heading, blue accent)

  [ Email ]   [ WhatsApp ]   [ Instagram ]      ← 3-up on desktop
  [ Discord ] [ LinkedIn ]                        stacked on mobile

  ┌───────────── Name ──────── Email ─────────┐
  │              Message                      │
  │                        [ Send ]           │
  └───────────────────────────────────────────┘

        Let's Create Something Worth Building.
        Katsu Made Owarnai
        Never a no when there's something creative to build.
```

Contact entries: email, WhatsApp and Instagram (existing), plus Discord `manasmads1` and LinkedIn `https://www.linkedin.com/in/manasmads1/` (clickable, new tab). Discord copies the handle to the clipboard with a toast since it has no direct link. Icons come from lucide-react, with a small inline Discord mark since lucide lacks one.

The form keeps Name / Email / Message / Send, spans the full width, and gains proper validation with inline error messages, a clear blue focus ring, and a success state after submitting. Closing lines sit below the form, small and quiet — personal branding, not a banner.

## 9. Navigation

Nav items become Home, About, Achievements, Skills, Work, Contact, all pointing at real section IDs, with the existing active-pill styling and smooth scrolling. Journey and Tools remain scrollable sections tracked for active state but stay out of the nav to keep it tight.

## 10. Cleanup and verification

Unused assets, imports, components and dependencies removed; build and typecheck clean with no console warnings. Verified at desktop, laptop, tablet and mobile widths for overflow, clipping, overlap, keyboard access to the achievement rows and lightbox, and reduced-motion behaviour.

## Technical notes

- Removed: `src/components/three/*`, `src/lib/sceneState.ts`, `src/assets/avatar.png`; packages `three`, `@react-three/fiber`, `@react-three/drei`, `@types/three`.
- New: `src/components/LoadingScreen.tsx`, `src/components/InteractiveList.tsx` (shared numbered-list primitive for Achievements and Work), `src/components/ui/Lightbox.tsx` (Radix Dialog based), `src/data/achievements.ts`.
- Rewritten: `HeroSection`, `AboutSection`, `SkillsSection`, `AchievementsSection`, `ProjectsSection`, `ContactSection`, `Navbar`, `Index`.
- Form validation with `zod` + existing toast; no new UI frameworks added.