# Research

公開資料研究報告集合（靜態頁，GitHub Pages）。

## 報告

| 報告 | 路徑 | 說明 |
| --- | --- | --- |
| [AMSpec／傑出材料科技](./amspec/) | `amspec/` | 高強度鋁無縫管／精抽；上下游與生態系互動簡報 |
| [巨鑫化學／Acrochem](./acrochem/) | `acrochem/` | 活性碳製造與廢碳再生；標案／許可／策略互動簡報 |
| [澳門會員通 · 整體預覽（2026-10-26）](./macau-membership-unified-2026-10-26/) | `macau-membership-unified-2026-10-26/` | **主入口**：會員端＋店頁＋點餐互通；滿減露出；無團購 |
| [封存 · 會員端 UI](./macau-membership-client-ui-2026-10-26/) | `macau-membership-client-ui-2026-10-26/` | 舊功能向 v2 |
| [封存 · 店頁有生氣](./macau-membership-store-lively-2026-10-26/) | `macau-membership-store-lively-2026-10-26/` | 舊表嫂／快宅店頁 |
| [封存 · 點餐預覽](./macau-membership-order-inspired-2026-10-26/) | `macau-membership-order-inspired-2026-10-26/` | 舊閃蜂／澳覓結構點餐 |

Pages 路徑示例：`…/research/amspec/`、`…/research/macau-membership-unified-2026-10-26/`。

## 本機

用瀏覽器開啟根目錄 `index.html`，或：

```bash
python -m http.server 8080
```

## Pages

Settings → Pages → Deploy from branch `main` / root。網站公開，即使內容僅來自公開網頁資料。

## Cursor skills

專案 Agent Skills 在 `.cursor/skills/`（資料夾名＝skill `name`）。在 Cursor 用 `/skill-name` 叫用：

| Skill | 叫用 | 何時用 |
| --- | --- | --- |
| [company-research-report](./.cursor/skills/company-research-report/SKILL.md) | `/company-research-report` | 研究一家公司，並產出或更新本 repo 的公開 HTML 簡報（如 `amspec/`、`acrochem/`） |
| [interactive-research-html](./.cursor/skills/interactive-research-html/SKILL.md) | `/interactive-research-html` | 製作或修改簡報互動 UI（價值鏈、生態系、製程、篩選、目錄） |
| [public-data-osint](./.cursor/skills/public-data-osint/SKILL.md) | `/public-data-osint` | 為台灣（或出口）公司簡報蒐集公開資料：登記、職缺、環境、標案、海關、供應商生態 |

精簡規則見 `.cursor/rules/research-briefs.mdc`（公開來源、無 CDN、主張標籤）。
