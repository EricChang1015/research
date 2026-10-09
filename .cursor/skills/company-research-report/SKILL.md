---
name: company-research-report
description: >-
  Use when researching a company and producing or updating a public HTML
  research brief in this repo (like amspec/ or acrochem/). Covers public-sources-only
  method, claim tags, section spine, companion files, hub cards, and how to add
  a new <slug>/ folder.
---

# Company research report

This repo hosts **public** static GitHub Pages briefs. Golden examples: `amspec/`, `acrochem/`. Hub: root `index.html`. Deploy: commit to `main`; Pages at `https://ericchang1015.github.io/research/<slug>/`.

Load sibling skills as needed:

- Gathering sources → `public-data-osint`
- Building or editing the interactive page → `interactive-research-html`

## Invariants

1. **Public sources only** on published HTML. No family, internal gossip, oral commissioner intel, or unpublished financials.
2. **Tag every claim.** Visible `<span class="tag">` plus matching `data-kind` on the block.
3. **Never invent** revenue, tonnage, market share, named customers, or supplier relationships without a primary URL.
4. **Conflicts stay unresolved.** Present both sides (e.g. OD 75 vs 90). Do not pick a “correct” value without company confirmation.
5. **Reports are independent.** Hub cards are one company each. Do not force a cross-company narrative unless evidence warrants a **short** note.
6. **Lede has no commissioner personal name.** Use「本簡報受委託整理自公開資料…」only.

## Claim tags

| Tag (zh) | `data-kind` | CSS class | Meaning |
| --- | --- | --- | --- |
| 事實 | `fact` | `tag-fact` | Registry, government, or a page that can be re-opened |
| 公司自述 | `self` | `tag-self` | Only on the company site / exhibitor page / 104 self-listing |
| 推論 | `infer` | `tag-infer` | Industry logic; the company did not write this |
| 建議 | `rec` | `tag-rec` | How to talk / not talk; strategy Do/Don’t |
| 次級彙整 | `fact` or `self` + label 次級 | `tag-sec` (acrochem) | Aggregator; prefer the primary URL beside it |
| 衝突 | `conflict fact` (space-separated) | `tag-conflict` | Two sourced values disagree |

A block may carry multiple kinds: `data-kind="fact self"`. Filter CSS uses `~=` so space-separated tokens work.

Marketing slogans（「台灣最佳」「一定的市佔率」）are copy, not evidence.

## Section spine

Use this order. IDs match the golden HTML (`#s1` … `#s9`). Insert optional blocks only when sourced.

| ID | Section |
| --- | --- |
| `#s1` | 01 公司是誰 — legal name, 統編, address, capital, what they actually make |
| `#viz-chain` | V1 價值鏈 SVG（click node → fact panel） |
| `#viz-eco` | V2 生態系（供應／核心／客戶／對手） |
| `#s2` | 02 產品製程 |
| `#s3` | 03 優劣 |
| `#s4` | 04 競爭（質性條圖；**無比噸產能、無營收**） |
| `#s5` | 05 應用客戶 |
| `#s6` | 06 上下游 — **must include process equipment & consumable vendors**, tagged `推論｜非具名採購` unless a URL proves a buy |
| `#s6b` | 06b 第三方交叉（customs, subsidies, Thaubing, neighbors） |
| `#s7` | 07 對外怎麼講 |
| `#s8` | 08 策略 Do/Don’t |
| optional | Finance / CAPEX **情境假設** only — never as actual 財報 |
| `#s9` | 09 來源 — URLs, dead ends stated, survey date |

Company-specific extras are fine (acrochem `#s1b` 104; amspec `#s8b` finance sliders) if they stay on the spine and stay tagged.

## Companion files in `<slug>/`

| File | Required | Role |
| --- | --- | --- |
| `index.html` | yes | Public Pages entry; self-contained; no CDN |
| `research.md` | yes | Investigation notes with URLs and tags |
| `summary.txt` | yes | One-page abstract |
| `README.md` | yes | What / how to open / file table / source disclaimer |
| `supplier-ecosystem.md` | optional | Named OEM/consumable candidates + URLs |
| `upstream-downstream-findings.md` | optional | Third-party extras that did not fit the first pass |
| `finance-assumptions.txt` | optional | Slider/chart inputs; labeled hypothetical |

HTML is the published brief. Markdown is the working file. Do not put unpublished oral notes into `index.html`.

## Lede and voice

Hero eyebrow: `公開資料研究簡報 · 互動視覺版 · 非銷售文案`.

Lede pattern:

> 本簡報受委託整理自公開資料，方便快速掌握這家公司「實際在做什麼」、能幫什麼樣的客戶、以及對外介紹時該怎麼講、不該怎麼講。凡屬公司自述或推論，都會清楚標示。

Do **not** name the commissioner. Footer: not investment advice, not sales copy, no personal/family background. Directors may appear when they are on the public registry (acrochem); do not add private bios.

## How to add a new `<slug>/`

1. Pick a URL-safe lowercase slug (`amspec`, `acrochem`). Folder name = Pages path.
2. Run `public-data-osint` first. Write `research.md` before polishing HTML.
3. Copy visual language from `amspec/index.html` or `acrochem/index.html` (dark tokens, chips, viz shells). Do not start a new design system.
4. Create the companion files listed above.
5. Add an **independent** card to root `index.html` and a row to root `README.md`.
6. Card copy states the company in its own terms. No “related to AMSpec” unless a sourced sentence belongs in the brief — and even then keep the hub card independent.
7. Confirm the page opens offline (`file://` or `python -m http.server`) with **no CDN** requests.

Hub card shape (root `index.html`):

```html
<a class="card" href="<slug>/">
  <h2>中文名／品牌</h2>
  <p>一句定位；註明公開來源互動視覺版；必要時寫「獨立研究頁」或「財務數字皆為假設」。</p>
</a>
```

## Independence

- Default: two companies in this repo are **not** a story together.
- Same industrial park, same street, or a shared customer class is **not** a relationship.
- If a later source truly links them, add a short tagged note in the relevant brief — do not merge pages or rewrite the hub as a group.

## Success check

- [ ] Offline, no CDN
- [ ] Every non-obvious claim tagged; sources in `#s9` with URLs
- [ ] No invented revenue / customers / supplier deals
- [ ] Conflicts shown, not resolved
- [ ] Lede has no personal commissioner name
- [ ] Hub lists this company as its own card
- [ ] Companion `research.md` + `summary.txt` + `README.md` exist
- [ ] Survey date (Taipei time) in hero and footer
