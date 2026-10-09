---
name: public-data-osint
description: >-
  Use when gathering public information for a Taiwan (or export) company
  research brief—registry, jobs, environment, tenders, customs, supplier
  ecosystem. Ordered playbook from website → GCIS → 104 → Thaubing → gov →
  shows → customs mirrors → competitors → patents/news.
---

# Public-data OSINT playbook

For briefs in this repo (`amspec/`, `acrochem/`, new `<slug>/`). **Public web only.** Tag claims per `company-research-report`. Prefer **primary URLs** over aggregators.

Do not invent revenue, tonnage, named customers, or “they buy from X”. Dead ends are valid — write them in `#s9` / `research.md`.

## Order of escalation

Run in this order. Skip a step only if it cannot apply (no factory → thinner Thaubing; no export story → thinner customs). Record the URL even when the page is empty.

### 1. Company website

Read **all** product / about / cert / news / career / contact pages — not just the homepage.

- Note 型錄 PDF URLs. If you did not read the PDF, say so; do not treat unread PDF sentences as 事實.
- Specs that disagree across pages = 衝突, both values kept.
- Certificates: “目標符合 AMS…” ≠ held certificate. No IATF / Nadcap / ISO unless the page claims it.
- Marketing density ≠ capability.

### 2. Taiwan registry (GCIS / g0v / findbiz)

- 統編、中英文名稱、地址、資本總額／實收、核准設立、董監、所營事業、稅籍行業.
- g0v mirror: `http://gcis.nat.g0v.tw/id/<統編>`
- Official findbiz / 商工 if the mirror is stale.
- Secondary name-list sites (twincn, bunnycha, inc.com.tw, findcompany) = **次級彙整**. Prefer them only to *find* the primary page, then cite the primary.
- 稅籍行業 code ≠ process description (AMSpec 242211 鋁合金鑄造 vs actual extrusion/draw).
- Same-address / same-director companies are 側翼 candidates, not subsidiaries, until sourced.

### 3. 104 / job boards

- Company page: published headcount, industry blurb, welfare, albums.
- Prefer the **number 104 itself prints** when aggregators disagree (acrochem: 104「27」over Bunnycha「22」).
- JDs: process hints (爐、再生、抽管、設備工程) and pay bands — tag 公司自述／次級／104.
- Long-open requisitions are a signal, not a headcount audit.

### 4. Environment — Thaubing 透明足跡

- `https://thaubing.gcaa.org.tw/corp/<統編>`
- Permits, facility IDs, air/water/waste flags, penalties, 解除列管 dates.
- Factory-registration address and 列管 address may differ — list both; do not merge door numbers.
- No penalty row ≠ “zero environmental risk”.

### 5. Government: permits, tenders, subsidies, green marks

- 再利用許可、工廠登記、食品業者登錄、GRP 綠色產品.
- 公開標案 / 電子採購 — award amounts on scrapers are **次級**; say「宜對電子採購原公告再核」. Tender sum ≠ company revenue.
- 工業局／產發署 補捐助 PDF (primary PDF, not a blog restating it).
- Keep the permit number and monthly cap when they exist (acrochem R-2408 · 365 t／月 is a hard public anchor).

### 6. Trade shows / exhibitor pages

- SEMICON, water shows, AIX, etc. Booth numbers and product blurbs = 公司自述.
- Useful for “what they want to be seen as” vs tender evidence.

### 7. Customs mirrors (export / import)

ImportYeti / ImportGenius / ImportInfo and similar.

**Caveats (required in the brief when you cite them):**

- These are **aggregators**, not CBP/customs.gov. Tag 次級／彙整.
- Shipper/consignee names are the claim; **cargo description ≠ alloy grade / SKU**.
- Counts are approximate and site-dependent.
- A consignee is not “exclusive” or “the customer”. Absence of a brand on the visible table is not proof they never shipped there.
- No stable list = write「本次未找到可引用列表」— that is a finding.

### 8. Competitors’ sites

- Certification gaps (IATF, Nadcap, ISO 14001, green marks) vs the target.
- Qualitative comparison only. No invented tonnage or share.
- Neighbor plants on the same street ≠ suppliers.

### 9. Patents and news

- TIPO / Google Patents / news. Empty search is OK; say so.
- Do not upgrade a press mention to a contract.

## Upstream ecosystem (required)

§06 / `supplier-ecosystem.md` must include **process equipment and consumable vendors**, not only feedstock and end customers.

Typical buckets (adapt to the process):

| Bucket | Examples of *categories* |
| --- | --- |
| Feedstock | Billet, coconut char, scrap/waste feed |
| Capital equipment | Presses, draw benches, rotary kilns, MHF, CNC |
| Tooling | Dies, molds |
| Consumables | Activating chemicals, packaging (FIBC), quench media |
| Environment | Baghouse, scrubber, afterburner |
| Metrology | CMM, BET, iodine / CTC benches |
| Outsourced process | Paint, NC, haulage with 清除許可 |
| Services | Labs, EPC, change-out crews |

**Tag named OEMs `推論｜非具名採購`** (or `推論｜產業常見`) unless a URL shows the target company buys from them (tender, news, company page).

Industry-famous brands are **ecosystem candidates** so a reader can see the supply market. They are not a vendor list.

Same-park neighbors (AMSpec vs 揚崧／元創) = 推論 that the park is not an island, **not** a buy.

## What never to invent

- Revenue, margin, utilization, market share
- Named customers without a URL (customs consignee is OK if tagged as aggregator)
- “Qualified Fox / TSMC supplier” without a public award or filing
- Supplier contracts inferred from equipment type alone
- Oral commissioner facts on the public HTML

## Write-up habit

In `research.md`, each new fact is: **claim · tag · URL · date/as-of**.  
Promote into `index.html` only what you can show on a public page.  
Keep unused URLs and dead ends in the notes so the next pass does not repeat the miss.
