# dameng-pager — Design Spec

> Portfolio rebuild for Damon Wu (DamengRandom), Freelance JavaScript Engineer, Sydney.
> Core mechanic: every page refresh renders a randomized layout variant per section.
> Stack: Vue 3 + Nuxt 3 + Reka UI + Tailwind CSS. Dark mode first.

---

## 1. Design System

### 1.1 Color Tokens

```css
/* Base palette — dark mode first */
--color-bg-base:       #0d0f14;   /* near-black, slate-tinted */
--color-bg-surface:    #13161d;   /* card / panel surface */
--color-bg-elevated:   #1c2030;   /* elevated card, hover surface */
--color-border:        #252a38;   /* subtle dividers */
--color-border-strong: #353d55;   /* active / focused borders */

/* Brand accent — electric cyan */
--color-accent:        #00d4ff;   /* primary accent */
--color-accent-dim:    #00d4ff26; /* accent at 15% opacity, for glows/fills */
--color-accent-hover:  #33ddff;   /* lighter on hover */

/* Secondary accent — violet */
--color-secondary:     #a855f7;   /* purple-500 */
--color-secondary-dim: #a855f726;

/* Semantic */
--color-success:       #22c55e;   /* green-500 */
--color-warning:       #f59e0b;   /* amber-500 */

/* Text */
--color-text-primary:  #e8eaf0;   /* near-white */
--color-text-muted:    #8892a4;   /* secondary labels */
--color-text-faint:    #4a5568;   /* disabled / placeholder */
```

**Tailwind equivalents used throughout this spec:**
- `bg-[#0d0f14]` → bg-base
- `bg-[#13161d]` → bg-surface
- `bg-[#1c2030]` → bg-elevated
- `border-[#252a38]` → border
- `text-[#e8eaf0]` → text-primary
- `text-[#8892a4]` → text-muted
- `text-cyan-400` → accent (closest Tailwind approximation)
- `text-purple-500` → secondary

### 1.2 Typography

```
Font stack:
  Mono/code labels:  "JetBrains Mono", "Fira Code", monospace
  Body / UI:         "Inter", system-ui, sans-serif

Scale (rem, based on 16px root):
  --text-xs:   0.75rem   / 12px
  --text-sm:   0.875rem  / 14px
  --text-base: 1rem       / 16px
  --text-lg:   1.125rem  / 18px
  --text-xl:   1.25rem   / 20px
  --text-2xl:  1.5rem    / 24px
  --text-3xl:  1.875rem  / 30px
  --text-4xl:  2.25rem   / 36px
  --text-5xl:  3rem       / 48px

Hero name: text-4xl–text-5xl, font-bold, tracking-tight
Section headings: text-xl–text-2xl, font-semibold
Labels / tags: text-xs–text-sm, font-mono
Body: text-base, leading-relaxed (1.625)
```

### 1.3 Spacing Scale

Uses Tailwind's default 4px base unit. Key values:
- Section padding: `py-16 px-6` (mobile) → `py-24 px-12` (md+)
- Card padding: `p-5` (compact) → `p-8` (spacious)
- Element gap: `gap-3` (tight) → `gap-6` (default) → `gap-10` (loose)
- Border radius: `rounded-xl` for cards, `rounded-full` for badges/pills

### 1.4 Motion Tokens

```css
--transition-fast:   150ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-base:   250ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-slow:   400ms cubic-bezier(0.4, 0, 0.2, 1);
```

Tailwind: `transition-all duration-150`, `duration-250`, `duration-400`

### 1.5 Reka UI Primitives Reference

Components used across variants:
- `Separator` — visual dividers
- `Avatar` / `AvatarImage` / `AvatarFallback` — profile image or initials
- `Progress` — skill proficiency bars
- `HoverCard` / `HoverCardTrigger` / `HoverCardContent` — skill detail popups
- `Tooltip` / `TooltipTrigger` / `TooltipContent` / `TooltipProvider` — label hints
- `Collapsible` / `CollapsibleTrigger` / `CollapsibleContent` — expandable sections
- `Toggle` / `ToggleGroup` / `ToggleGroupItem` — filter/sort controls
- `Badge` — tech tags
- `AspectRatio` — image containers

---

## 2. Hero Section

**Data:** name, handle, title, tagline, location, employment status

---

### Hero Variant A — "Terminal Prompt"

**Personality:** hacker aesthetic, monospace-heavy, command-line feel

**Layout:**
```
┌──────────────────────────────────────────────────┐
│  > whoami                                        │
│                                                  │
│  Damon Wu  @DamengRandom                         │
│  JavaScript Engineer · Freelance · Sydney        │
│                                                  │
│  "A passionate JavaScript Engineer from Sydney"  │
│                                                  │
│  [ github ]  [ linkedin ]                        │
└──────────────────────────────────────────────────┘
```

**Visual Specs:**
- Full-width, min-height `min-h-screen`, centered content with `max-w-2xl mx-auto`
- Background: `bg-[#0d0f14]` with a subtle radial glow `bg-[radial-gradient(ellipse_at_top_left,#00d4ff08_0%,transparent_60%)]`
- Blinking cursor after "whoami" using CSS `@keyframes blink`
- Name: `text-5xl font-bold font-mono text-[#e8eaf0]`
- Handle: `text-cyan-400 font-mono text-2xl` prefixed with `@`
- Subtitle row: `text-[#8892a4] font-mono text-sm` with `·` separators
- Tagline: wrapped in a faint `border border-[#252a38] rounded px-4 py-2 font-mono text-sm text-[#8892a4] italic`
- Links: `text-cyan-400 hover:text-cyan-300 font-mono text-sm underline-offset-4 hover:underline transition-colors duration-150`

**Reka UI components:** `Separator` (below tagline), `TooltipProvider` + `Tooltip` on links

**Tailwind class summary:**
```
wrapper:    min-h-screen flex items-center bg-[#0d0f14] px-6
inner:      max-w-2xl mx-auto space-y-6
prompt:     font-mono text-cyan-400 text-sm mb-2 flex items-center gap-2
name:       text-5xl font-bold tracking-tight text-[#e8eaf0] font-mono
handle:     text-cyan-400 font-mono text-2xl
meta:       text-[#8892a4] font-mono text-sm flex gap-3 flex-wrap
tagline:    border border-[#252a38] rounded px-4 py-2 font-mono text-sm text-[#8892a4] italic
links:      flex gap-4 mt-2
link:       text-cyan-400 hover:text-cyan-300 font-mono text-sm transition-colors
```

---

### Hero Variant B — "Split Panel"

**Personality:** editorial, bold left column / subtle right column, modern portfolio

**Layout:**
```
┌───────────────────────┬──────────────────────────┐
│                       │                          │
│  Damon Wu             │  JavaScript Engineer     │
│  DamengRandom         │  Freelance · Sydney      │
│                       │                          │
│  [Accent line]        │  Bio tagline here        │
│                       │                          │
│  github  linkedin     │                          │
│                       │                          │
└───────────────────────┴──────────────────────────┘
```

**Visual Specs:**
- Two-column grid on md+: `grid md:grid-cols-2 gap-16 items-center`
- Left column has a left border accent: `border-l-2 border-cyan-400 pl-6`
- Name: `text-5xl font-bold text-[#e8eaf0] leading-tight`
- Handle: `text-[#8892a4] text-lg font-mono mt-1`
- Right column: `text-[#8892a4] text-base leading-relaxed space-y-3`
- Title badge: `inline-flex items-center gap-2 bg-[#00d4ff26] text-cyan-400 text-xs font-mono px-3 py-1 rounded-full`
- Employment dot: `w-2 h-2 rounded-full bg-green-500 animate-pulse` (online/active indicator)
- Location: `text-[#8892a4] text-sm flex items-center gap-1`

**Reka UI components:** `Separator` (between columns on mobile), `Badge` for title chip, `Tooltip` on location pin icon

**Tailwind class summary:**
```
wrapper:    min-h-screen flex items-center bg-[#0d0f14] px-6 py-16
inner:      max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center
left:       border-l-2 border-cyan-400 pl-6 space-y-4
name:       text-5xl font-bold text-[#e8eaf0] leading-tight
handle:     text-[#8892a4] text-lg font-mono
right:      space-y-4
title-chip: inline-flex items-center gap-2 bg-[#00d4ff26] text-cyan-400 text-xs font-mono px-3 py-1 rounded-full
```

---

### Hero Variant C — "Centered Minimal"

**Personality:** quiet confidence, generous whitespace, focus on name as art

**Layout:**
```
         ┌──────────────────────────────┐
         │                              │
         │         Damon Wu             │
         │    JavaScript Engineer       │
         │  ──────────────────────────  │
         │  Sydney · Freelance          │
         │  A passionate JS Engineer... │
         │                              │
         │      ⟨ github ⟩  ⟨ linkedin ⟩│
         └──────────────────────────────┘
```

**Visual Specs:**
- `min-h-screen flex flex-col items-center justify-center text-center px-6`
- Large name with a gradient: `text-5xl font-bold bg-gradient-to-r from-[#e8eaf0] to-cyan-400 bg-clip-text text-transparent`
- Title: `text-xl text-[#8892a4] font-mono mt-3`
- `Separator` with `my-6 w-24 mx-auto border-[#252a38]`
- Meta line: `text-sm text-[#8892a4] flex items-center justify-center gap-3`
- Tagline: `text-base text-[#8892a4] max-w-md leading-relaxed mt-4`
- CTA links styled as ghost buttons: `border border-[#252a38] hover:border-cyan-400 hover:text-cyan-400 text-[#8892a4] px-5 py-2 rounded-lg text-sm font-mono transition-all duration-250`

**Reka UI components:** `Separator`, `TooltipProvider` + `Tooltip` on each link

**Tailwind class summary:**
```
wrapper:  min-h-screen flex flex-col items-center justify-center text-center px-6 bg-[#0d0f14]
name:     text-5xl font-bold bg-gradient-to-r from-[#e8eaf0] to-cyan-400 bg-clip-text text-transparent
title:    text-xl text-[#8892a4] font-mono mt-3
sep:      my-6 w-24 mx-auto border-[#252a38]
tagline:  text-base text-[#8892a4] max-w-md leading-relaxed mt-4
links:    flex items-center justify-center gap-4 mt-8
link:     border border-[#252a38] hover:border-cyan-400 hover:text-cyan-400 text-[#8892a4] px-5 py-2 rounded-lg text-sm font-mono transition-all duration-250
```

---

## 3. About Section

**Data:** bio, currentWork, learning (array), collaboration

---

### About Variant A — "Stat Cards Row"

**Personality:** dashboard-style, each data point gets its own card, skimmable

**Layout:**
```
  About Me
  ─────────────────────────────────────────
  [ Bio card: full-width paragraph ]

  [ Current Work ]  [ Learning ]  [ Collab ]
     card              card          card
```

**Visual Specs:**
- Section heading: `text-2xl font-semibold text-[#e8eaf0] mb-1` + `font-mono text-cyan-400 text-sm mb-6` for a `// about` sub-label
- Bio card: `bg-[#13161d] border border-[#252a38] rounded-xl p-6 text-[#8892a4] leading-relaxed`
- Stat cards row: `grid grid-cols-1 md:grid-cols-3 gap-4 mt-4`
- Each card: `bg-[#13161d] border border-[#252a38] rounded-xl p-5 hover:border-[#353d55] transition-colors duration-150`
- Card label: `text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3`
- Card value: `text-[#e8eaf0] text-sm leading-relaxed`
- Learning tags inside card: `flex flex-wrap gap-2` with each tag `bg-[#1c2030] text-[#8892a4] text-xs font-mono px-2 py-1 rounded`

**Reka UI components:** `Separator` after heading, `Badge` for learning tags, `HoverCard` on "AI technologies" tag showing a tooltip blurb

---

### About Variant B — "Collapsible Details"

**Personality:** focused, progressive disclosure — bio is always visible, details expand on demand

**Layout:**
```
  // about
  ─────────
  Bio paragraph (always visible)

  ▶ What I'm building now    [collapsed]
  ▶ Currently learning       [collapsed]
  ▶ Open to collaborate on   [collapsed]
```

**Visual Specs:**
- Bio: `text-[#8892a4] text-base leading-relaxed mb-6`
- Each collapsible row uses Reka `Collapsible`: trigger is a full-width `flex items-center justify-between py-3 border-b border-[#252a38] cursor-pointer group`
- Trigger label: `text-[#e8eaf0] text-sm font-mono group-hover:text-cyan-400 transition-colors`
- Chevron icon: `text-[#4a5568] group-hover:text-cyan-400 transition-transform data-[state=open]:rotate-180`
- `CollapsibleContent` animates in with `data-[state=open]:animate-in data-[state=closed]:animate-out`
- Content: `py-3 pl-4 text-[#8892a4] text-sm leading-relaxed`
- Learning items inside: `flex flex-wrap gap-2` with `Badge` components

**Reka UI components:** `Collapsible` + `CollapsibleTrigger` + `CollapsibleContent`, `Separator`, `Badge`

---

### About Variant C — "Timeline Feed"

**Personality:** narrative, reads like a developer's activity feed or micro-resume

**Layout:**
```
  About

  ● Bio line (full paragraph)
  │
  ● Currently building: Vue/React + AI
  │
  ● Learning: Next.js · GraphQL · Prisma · ...
  │
  ● Open to: Open-source frontend projects
```

**Visual Specs:**
- Left vertical line: `border-l-2 border-[#252a38] ml-3 pl-6 space-y-6`
- Each item has a dot marker: `relative before:absolute before:-left-[33px] before:top-1.5 before:w-3 before:h-3 before:rounded-full before:bg-cyan-400 before:ring-4 before:ring-[#0d0f14]`
- Item label: `text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1`
- Item content: `text-[#8892a4] text-sm leading-relaxed`
- Learning row uses inline `Separator` between items: `flex flex-wrap items-center gap-x-2 gap-y-1`
- Separator between items: `text-[#4a5568]` character `·`

**Reka UI components:** `Separator`, `Tooltip` on each learning item (tooltip shows "currently studying")

---

## 4. Skills Section

**Data:** proficiency array (name + level 0–100), technologies array

---

### Skills Variant A — "Progress Bars"

**Personality:** traditional but polished — labelled bars with percentage, clean and readable

**Layout:**
```
  Skills
  ──────────────────────────────
  React          ████████████░░  95%
  TypeScript     ███████████░░░  90%
  Vue.js         ████████░░░░░░  80%
  ...

  Technologies
  [ JS ] [ Node ] [ Docker ] [ AWS ] ...
```

**Visual Specs:**
- Proficiency heading: `text-2xl font-semibold text-[#e8eaf0]`
- Each skill row: `grid grid-cols-[120px_1fr_40px] items-center gap-4 py-2`
- Skill name: `text-sm font-mono text-[#8892a4]`
- `Progress` (Reka): `h-1.5 rounded-full bg-[#1c2030]` track, indicator `bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full transition-all duration-700`
- Level label: `text-xs font-mono text-[#4a5568] text-right`
- Tech section: `mt-8 flex flex-wrap gap-2`
- Tech badge: `bg-[#1c2030] border border-[#252a38] hover:border-cyan-400 hover:text-cyan-400 text-[#8892a4] text-xs font-mono px-3 py-1.5 rounded-full transition-all duration-150 cursor-default`

**Reka UI components:** `Progress`, `Separator`, `HoverCard` on each skill name (shows level category: "Expert", "Proficient", etc.), `Badge` for tech tags

---

### Skills Variant B — "Radar / Bubble Grid"

**Personality:** visual, playful — skills rendered as variable-size glowing bubbles in a grid

**Layout:**
```
  // skills

  [React 95%]   [TS 90%]   [Vue 80%]
    (large)      (large)    (medium)

  [Next 60%]   [K8s 60%]  [GQL 55%]  [AI 40%]
   (medium)    (medium)    (small)    (small)

  Tech: [ JS ] [ Node.js ] [ Docker ] [ AWS ] ...
```

**Visual Specs:**
- Bubble grid: `flex flex-wrap gap-4 items-end`
- Each bubble: a `div` sized via inline style `width: ${40 + level * 0.7}px; height: ${40 + level * 0.7}px`
- Base bubble: `rounded-full flex flex-col items-center justify-center bg-[#00d4ff26] border border-cyan-400/30 hover:border-cyan-400 hover:bg-[#00d4ff40] transition-all duration-250 cursor-default text-center`
- Bubble name: `text-xs font-mono text-[#e8eaf0] leading-tight`
- Bubble level: `text-[10px] font-mono text-cyan-400`
- Glow on hover: `hover:shadow-[0_0_20px_#00d4ff40]`
- Tech tags: same as Variant A

**Reka UI components:** `Tooltip` (each bubble tooltip shows full name + "level: X%"), `HoverCard`, `Separator`, `Badge`

---

### Skills Variant C — "Grouped Cards with Toggle Filter"

**Personality:** interactive, allows user to filter by category (though all skills show by default)

**Layout:**
```
  Skills

  [ All ] [ Frontend ] [ Infra ] [ AI ]   ← ToggleGroup filter

  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐
  │ React        │  │ TypeScript   │  │ Vue.js       │
  │ ████████ 95% │  │ ███████  90% │  │ ██████   80% │
  └──────────────┘  └──────────────┘  └──────────────┘
  ...

  Tech Stack
  [ JS ] [ Node.js ] [ Docker ] ...
```

**Visual Specs:**
- `ToggleGroup` row: `flex gap-2 mb-6 flex-wrap`
- Each `ToggleGroupItem`: `px-3 py-1 rounded-full text-xs font-mono border border-[#252a38] text-[#8892a4] data-[state=on]:bg-[#00d4ff26] data-[state=on]:border-cyan-400 data-[state=on]:text-cyan-400 hover:border-[#353d55] transition-all duration-150`
- Skill cards grid: `grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3`
- Each card: `bg-[#13161d] border border-[#252a38] rounded-xl p-4 hover:border-[#353d55] transition-colors`
- Card skill name: `text-sm font-mono text-[#e8eaf0] mb-3`
- `Progress`: `h-1 rounded-full bg-[#1c2030]` / indicator `bg-cyan-400`
- Card level: `text-xs font-mono text-[#4a5568] mt-1 text-right`

**Reka UI components:** `ToggleGroup` + `ToggleGroupItem`, `Progress`, `Separator`, `Badge`

---

## 5. Knowledge Section

**Data:** array of 9 note/topic strings

---

### Knowledge Variant A — "Numbered List"

**Personality:** clean, editorial — like a table of contents or reading list

**Layout:**
```
  Knowledge Base

  01  System Design Notes
  02  React Tricks 2025
  03  Next.js Notes
  ...
  09  Git Cherry Pick Notes
```

**Visual Specs:**
- Section label: `font-mono text-cyan-400 text-xs uppercase tracking-widest mb-2`
- Heading: `text-2xl font-semibold text-[#e8eaf0] mb-8`
- List container: `space-y-1`
- Each row: `flex items-center gap-6 py-3 border-b border-[#252a38] group hover:border-[#353d55] transition-colors`
- Number: `text-xs font-mono text-[#4a5568] w-8 shrink-0`
- Label: `text-[#8892a4] text-sm font-mono group-hover:text-[#e8eaf0] transition-colors duration-150`
- Hover: right-pointing chevron fades in at end of row `opacity-0 group-hover:opacity-100 text-cyan-400`

**Reka UI components:** `Separator` after heading, `Tooltip` on each item ("personal study note")

---

### Knowledge Variant B — "Tag Cloud"

**Personality:** organic, visual density — items float as styled pills at varying font sizes

**Layout:**
```
  // knowledge

  [System Design Notes]   [React Tricks 2025]  [Next.js Notes]
    [TypeScript Recall]  [Coding Patterns]  [SOLID Principles]
         [Kubernetes CKAD Notes]  [Jenkins Recall]
                  [Git Cherry Pick Notes]
```

**Visual Specs:**
- Flex wrap container: `flex flex-wrap gap-3 justify-center py-6`
- Tags cycle through 3 size/style variants based on index mod 3:
  - Size lg: `text-base px-5 py-2.5`
  - Size md: `text-sm px-4 py-2`
  - Size sm: `text-xs px-3 py-1.5`
- All tags: `font-mono rounded-full border cursor-default transition-all duration-200 hover:scale-105`
- Color rotation (index mod 3):
  - 0: `border-cyan-400/30 text-cyan-400 bg-[#00d4ff0d] hover:bg-[#00d4ff26]`
  - 1: `border-purple-500/30 text-purple-400 bg-[#a855f70d] hover:bg-[#a855f726]`
  - 2: `border-[#252a38] text-[#8892a4] bg-[#13161d] hover:border-[#353d55]`

**Reka UI components:** `HoverCard` on each tag (content: "Personal study note in Damon's knowledge base"), `Tooltip`

---

### Knowledge Variant C — "Collapsible Grid"

**Personality:** compact default, expandable — shows 3 items initially, reveals all on expand

**Layout:**
```
  Knowledge Base
  ─────────────────────────────────────

  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
  │ System Design    │  │ React Tricks 2025│  │ Next.js Notes    │
  │ Notes            │  │                  │  │                  │
  └──────────────────┘  └──────────────────┘  └──────────────────┘

  ▼ Show 6 more
```

**Visual Specs:**
- Initial 3 cards always visible: `grid grid-cols-1 sm:grid-cols-3 gap-4`
- Each card: `bg-[#13161d] border border-[#252a38] rounded-xl p-5 hover:border-cyan-400/50 hover:bg-[#1c2030] transition-all duration-200 cursor-default group`
- Card icon (book emoji or SVG): `text-cyan-400 text-xl mb-3`
- Card label: `text-[#8892a4] text-sm font-mono group-hover:text-[#e8eaf0] transition-colors`
- Reka `Collapsible` wraps remaining 6 items
- Trigger: `mt-4 text-sm font-mono text-[#8892a4] hover:text-cyan-400 flex items-center gap-2 transition-colors cursor-pointer`
- Content: same card grid, animates in with `animate-in fade-in-0 slide-in-from-top-2 duration-300`

**Reka UI components:** `Collapsible` + `CollapsibleTrigger` + `CollapsibleContent`, `Separator`

---

## 6. Contact Section

**Data:** github URL, linkedin URL, alternativeSite URL

---

### Contact Variant A — "CTA Block"

**Personality:** conversational, warm — feels like an invitation rather than a footer

**Layout:**
```
  ┌──────────────────────────────────────────┐
  │                                          │
  │   Let's build something.                 │
  │   Find me on GitHub or LinkedIn.         │
  │                                          │
  │   [ GitHub → ]    [ LinkedIn → ]         │
  │   [ Portfolio → ]                        │
  │                                          │
  └──────────────────────────────────────────┘
```

**Visual Specs:**
- Full-width section: `bg-[#13161d] border-t border-[#252a38] py-20 px-6`
- Inner: `max-w-2xl mx-auto text-center space-y-6`
- Heading: `text-3xl font-bold text-[#e8eaf0]`
- Sub-copy: `text-[#8892a4] text-base`
- Button group: `flex flex-wrap justify-center gap-4 mt-8`
- GitHub button: `bg-cyan-400 hover:bg-cyan-300 text-[#0d0f14] font-semibold text-sm px-6 py-3 rounded-lg flex items-center gap-2 transition-colors duration-150`
- LinkedIn button: `border border-[#353d55] hover:border-cyan-400 text-[#8892a4] hover:text-cyan-400 text-sm px-6 py-3 rounded-lg flex items-center gap-2 transition-all duration-150`
- Portfolio link: `text-sm font-mono text-[#4a5568] hover:text-[#8892a4] transition-colors underline-offset-4 hover:underline`

**Reka UI components:** `Separator` at top, `Tooltip` on each button showing the full URL

---

### Contact Variant B — "Terminal Links"

**Personality:** code-flavored — links presented as command output lines

**Layout:**
```
  $ contact --list

  [github]    → https://github.com/DamengRandom
  [linkedin]  → https://linkedin.com/in/damon-wu-...
  [portfolio] → https://damengrandom.vercel.app
```

**Visual Specs:**
- Section bg: `bg-[#0d0f14]` to contrast from content above
- Container: `max-w-xl mx-auto py-16 px-6`
- Prompt line: `font-mono text-cyan-400 text-sm mb-6 flex items-center gap-2`
- Each link row: `flex items-center gap-4 py-2 group`
- Key: `text-xs font-mono text-[#4a5568] w-20 shrink-0`
- Arrow: `text-[#4a5568] font-mono`
- Link text: `font-mono text-sm text-[#8892a4] hover:text-cyan-400 transition-colors underline-offset-4 hover:underline truncate`
- Row hover: `group-hover:bg-[#13161d] -mx-4 px-4 rounded transition-colors`

**Reka UI components:** `Separator` between rows, `Tooltip` on each URL (tooltip: "open in new tab")

---

### Contact Variant C — "Icon Cards"

**Personality:** modern, card-based — each contact method gets a dedicated tappable card

**Layout:**
```
  Contact

  ┌─────────────────┐  ┌─────────────────┐
  │  GH             │  │  in             │
  │  GitHub         │  │  LinkedIn       │
  │  DamengRandom   │  │  Damon Wu       │
  └─────────────────┘  └─────────────────┘

  ┌─────────────────────────────────────────┐
  │  ↗  Portfolio Site                      │
  └─────────────────────────────────────────┘
```

**Visual Specs:**
- Grid: `grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl`
- Each card: `bg-[#13161d] border border-[#252a38] rounded-xl p-6 flex items-center gap-4 hover:border-cyan-400/50 hover:bg-[#1c2030] transition-all duration-200 group cursor-pointer`
- Icon area: `w-10 h-10 rounded-lg bg-[#1c2030] group-hover:bg-[#00d4ff26] flex items-center justify-center text-[#8892a4] group-hover:text-cyan-400 transition-all font-bold text-sm font-mono shrink-0`
- Label: `text-[#e8eaf0] text-sm font-semibold`
- Sub-label: `text-[#8892a4] text-xs font-mono`
- Arrow indicator: `ml-auto text-[#4a5568] group-hover:text-cyan-400 group-hover:translate-x-1 transition-all`
- Portfolio card: full-width `sm:col-span-2`

**Reka UI components:** `Tooltip` (full URL), `Separator` after heading

---

## 7. Component Variant Map

This JSON is consumed by the `useRandomLayout()` composable to select component variants on each page load.

```json
{
  "sections": {
    "hero": {
      "variants": ["HeroTerminal", "HeroSplitPanel", "HeroCentered"],
      "defaultVariant": "HeroTerminal",
      "weight": [1, 1, 1]
    },
    "about": {
      "variants": ["AboutStatCards", "AboutCollapsible", "AboutTimeline"],
      "defaultVariant": "AboutStatCards",
      "weight": [1, 1, 1]
    },
    "skills": {
      "variants": ["SkillsProgressBars", "SkillsBubbleGrid", "SkillsToggleCards"],
      "defaultVariant": "SkillsProgressBars",
      "weight": [1, 1, 1]
    },
    "knowledge": {
      "variants": ["KnowledgeNumbered", "KnowledgeTagCloud", "KnowledgeCollapsibleGrid"],
      "defaultVariant": "KnowledgeNumbered",
      "weight": [1, 1, 1]
    },
    "contact": {
      "variants": ["ContactCTABlock", "ContactTerminal", "ContactIconCards"],
      "defaultVariant": "ContactCTABlock",
      "weight": [1, 1, 1]
    }
  }
}
```

**`useRandomLayout()` composable skeleton (Vue 3):**

```typescript
// composables/useRandomLayout.ts
import variantMap from '~/data/variant-map.json'

type SectionKey = keyof typeof variantMap.sections

export function useRandomLayout() {
  const selected = reactive<Record<SectionKey, string>>({} as any)

  function pickVariant(section: SectionKey): string {
    const { variants, weight } = variantMap.sections[section]
    // Weighted random pick
    const total = weight.reduce((a, b) => a + b, 0)
    let rand = Math.random() * total
    for (let i = 0; i < variants.length; i++) {
      rand -= weight[i]
      if (rand <= 0) return variants[i]
    }
    return variants[0]
  }

  // Pick once per page load (SSR-safe: runs on client only)
  onMounted(() => {
    for (const section of Object.keys(variantMap.sections) as SectionKey[]) {
      selected[section] = pickVariant(section)
    }
  })

  return { selected }
}
```

**Usage in a page component:**

```vue
<!-- pages/index.vue -->
<script setup lang="ts">
import { useRandomLayout } from '~/composables/useRandomLayout'

const { selected } = useRandomLayout()
</script>

<template>
  <main>
    <!-- Hero -->
    <component :is="selected.hero" v-bind="heroData" />

    <!-- About -->
    <component :is="selected.about" v-bind="aboutData" />

    <!-- Skills -->
    <component :is="selected.skills" v-bind="skillsData" />

    <!-- Knowledge -->
    <component :is="selected.knowledge" v-bind="knowledgeData" />

    <!-- Contact -->
    <component :is="selected.contact" v-bind="contactData" />
  </main>
</template>
```

> Register components globally in `nuxt.config.ts` or use `defineAsyncComponent` per variant for code-splitting.

---

## 8. Accessibility Notes

- **Contrast**: All text/background combinations target WCAG AA minimum 4.5:1. `text-[#8892a4]` on `bg-[#0d0f14]` = ~5.1:1. `text-cyan-400` on dark bg = ~7.2:1.
- **Focus indicators**: All interactive elements must have `focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d0f14]` — do not suppress default focus outlines without this replacement.
- **Keyboard navigation**: All Reka UI headless components (`Collapsible`, `ToggleGroup`, `HoverCard`) expose keyboard-accessible triggers by default. Verify tab order in each variant.
- **ARIA labels**: External links must have `aria-label` including destination context, e.g. `aria-label="Damon's GitHub profile"`.
- **Reduced motion**: Wrap `transition-*` and `animate-*` classes in `@media (prefers-reduced-motion: no-preference)` or use Tailwind's `motion-safe:` prefix.
- **Collapsible sections**: `CollapsibleTrigger` renders as a `button` by default — preserve this. Do not replace with a `div`.

---

## 9. Responsive Breakpoints

| Breakpoint | Token | px   | Notes                        |
|------------|-------|------|------------------------------|
| Mobile     | (base)| 0+   | Single column, touch targets min 44px |
| Tablet     | `sm`  | 640  | 2-col grids begin            |
| Desktop    | `md`  | 768  | Full layouts, split panels   |
| Wide       | `lg`  | 1024 | Max-width containers kick in |

Container max widths: hero `max-w-5xl`, sections `max-w-4xl`, all `mx-auto`.

---

## 10. File Structure Recommendation

```
components/
  hero/
    HeroTerminal.vue
    HeroSplitPanel.vue
    HeroCentered.vue
  about/
    AboutStatCards.vue
    AboutCollapsible.vue
    AboutTimeline.vue
  skills/
    SkillsProgressBars.vue
    SkillsBubbleGrid.vue
    SkillsToggleCards.vue
  knowledge/
    KnowledgeNumbered.vue
    KnowledgeTagCloud.vue
    KnowledgeCollapsibleGrid.vue
  contact/
    ContactCTABlock.vue
    ContactTerminal.vue
    ContactIconCards.vue

composables/
  useRandomLayout.ts

data/
  portfolio.json
  variant-map.json
```
