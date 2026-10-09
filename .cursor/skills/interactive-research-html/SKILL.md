---
name: interactive-research-html
description: >-
  Use when building or editing the interactive HTML UI for a research brief
  (value chain, ecosystem, process, filters, TOC). Match amspec/ and acrochem/
  self-contained dark pages: no CDN, sticky chips, progress bar, SVG
  click-to-panel, keyboard a11y.
---

# Interactive research HTML

Goldens: `amspec/index.html`, `acrochem/index.html`. One file per company. Copy their tokens and JS patterns; do not invent a new visual language.

Report method and claim tags live in `company-research-report`. This skill is the **UI contract**.

## File contract

- Single self-contained `<slug>/index.html`: **inline `<style>` + `<script>`**.
- **No CDN.** No Google Fonts, no icon kits, no chart libraries, no Tailwind play CDN.
- `lang="zh-Hant-TW"`. Font stack already in the goldens: `"Noto Sans TC", "PingFang TC", "Microsoft JhengHei", …` (system fallback only).
- Must open via `file://` and via GitHub Pages with no build step.
- Editing an existing brief: **do not break** value-chain SVG, ecosystem map, process stepper, filter chips, or progress/TOC. Change data arrays and copy; keep constructors (`buildChainSvg`, `buildEco`, `buildProcess`, `renderPanel`) intact unless you are fixing a bug.

## Dark theme tokens

Reuse these `:root` values (already shared by both goldens):

```css
--bg: #0f1419; --bg2: #1a2332; --bg3: #243044; --card: #1e2a3a;
--border: #2d3f56; --text: #e8eef5; --muted: #9aadc2;
--accent: #5eb3f6; --accent2: #7dd3a8; --warn: #f0b060;
--fact: #5eb3f6; --infer: #c9a0e8; --danger: #f08080;
--self: #f0b060; --rec: #7dd3a8;
```

Kind colors on SVG nodes (`kindColor()`):

| kind | fill | stroke |
| --- | --- | --- |
| fact | `#1a2a3a` | `#5eb3f6` |
| infer | `#2a2340` | `#c9a0e8` |
| self | `#3a2e1a` | `#f0b060` |
| rec | `#1a3328` | `#7dd3a8` |

## Chrome (required)

1. **Skip link** — `<a class="skip" href="#main">跳到主要內容</a>`
2. **Progress bar** — `#progressBar`, `role="progressbar"`, width = scroll percentage, `aria-valuenow`
3. **Sticky filter chips** — `全部／事實／公司自述／推論／建議` (`data-filter` = `all|fact|self|infer|rec`). Toggle `body.filter-*`. `aria-pressed` on the active chip. Toolbar: `role="toolbar"`.
4. **Mini TOC** — `.toc-mini` links with `data-toc="<section-id>"`; highlight on scroll. Hidden below 900px (chips still wrap).
5. **In-page TOC card** — `.toc ol` two columns from 640px.

Filter CSS (do not drop the `conflict` exception on fact filter):

```css
body.filter-fact [data-kind]:not([data-kind~="fact"]):not([data-kind~="conflict"]) { opacity: 0.28; }
body.filter-infer [data-kind]:not([data-kind~="infer"]) { opacity: 0.28; }
/* same for rec / self */
body.filter-fact .viz-node:not(.kind-fact):not(.kind-conflict) { opacity: 0.22; }
```

Mark claim blocks with `data-kind="fact"` (space-separated if mixed). Visual tags use `.tag.tag-fact` etc.

## SVG value chain → panel

Pattern from both goldens:

1. Data: `chainNodes[]` with `id, col, row, label, sub, kind, title, meta, fact?, self?, infer?, rec?, conflict?, note?`
2. Edges: `[fromId, toId, dashedBool]`
3. `buildChainSvg()` draws into `#chainSvgWrap` (`viewBox`, `role="img"`, `aria-label`)
4. Each node is an SVG `<g class="viz-node kind-{kind}" tabindex="0" role="button">`
5. Click / Enter / Space → `renderPanel(#chainPanel, node)` and `.selected`
6. **Dashed stroke = outsourced, inferred, or weak link** (`.edge.dashed` / `stroke-dasharray: 5 4`; dashed edges often `#c9a0e8`). Solid = sourced, in-house, or confirmed flow.
7. Horizontal scroll on `.viz-canvas` (`overflow-x: auto`). `min-width` on the SVG so mobile can pan, not squash labels.

`renderPanel` empty state: `點節點查看事實／推論細節。` Filled state prints tags 事實／公司自述／推論／建議／衝突 in that order.

## Ecosystem, process, strategy

- **Ecosystem** — CSS grid `.eco-map`: 供應 / 核心 / 客戶 / 對手. Buttons `.eco-node.kind-*` click → `#ecoPanel`. Desktop 3-column from 800px; single column on mobile.
- **Process** — `.process-step` row; **`.process-step.out` dashed border = outsourced step** (paint line, NC, haulage). Click fills the process detail panel.
- **Strategy** — `.matrix` Do / Don’t / Mid cards (`.m-card.do|.dont|.mid`).
- **Competitors** — qualitative bars only. Caption: 無比噸產能、無營收. Scores = public-narrative clarity, not share.

## Keyboard and a11y

- Chips, eco nodes, process steps, prio rows: native `<button>` or `tabindex="0"` + `focus-visible` ring.
- SVG nodes: `tabindex="0"`, `role="button"`, `aria-label`. Enter/Space select; Escape clears selection and empties the panel. ArrowLeft/Right between chain nodes (amspec pattern — keep it when you copy that builder).
- Progress bar and live finance KPIs: `aria-valuenow` / `aria-live="polite"`.
- Do not rely on color alone: every node still has a text tag or `kind-*` label in the panel.

## Optional finance / CAPEX charts

Allowed only as **情境假設**:

- Banner: 本節全部數字皆為**情境假設／推論**，不是公司財報.
- Tag the section `data-kind="infer"` (and `rec` for strategy cards).
- Dashed disclosure box (amspec `.fin-disclosure` / acrochem `.cap-anchor`).
- Sliders and SVG bars stay inline JS — still **no CDN**.
- Companion `finance-assumptions.txt` if numbers are non-trivial.
- Never present a slider output as 營收 or 毛利 of the real company.

## Mobile

- Sticky bar wraps; mini TOC hides under 900px.
- KPI 2-up under 640px; process steps ~45% width.
- Tables sit in `.table-wrap` with `overflow-x: auto`.
- Ecosystem stacks to one column.
- `scroll-margin-top: 4.5rem` on `section` so headings clear the sticky bar.
- Print: hide sticky bar + progress; avoid breaking cards.

## When editing

1. Prefer updating the JS data arrays and the prose sections over rewriting CSS.
2. After any viz edit, click every chain node, every eco card, and every process step; Esc must clear; chips must dim the right blocks.
3. Do not introduce `script src=` or `@import` URLs.
4. Keep IDs stable (`#s1`…`#s9`, `#viz-chain`, `#viz-eco`) so TOC and deep links survive.
