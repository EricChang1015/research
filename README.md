# Research

公開資料研究報告集合（靜態頁，GitHub Pages）。

## 報告

| 報告 | 路徑 | 說明 |
| --- | --- | --- |
| [AMSpec／傑出材料科技](./amspec/) | `amspec/` | 高強度鋁無縫管／精抽；上下游與生態系互動簡報 |
| [巨鑫化學／Acrochem](./acrochem/) | `acrochem/` | 活性碳製造與廢碳再生；標案／許可／策略互動簡報 |

Pages 路徑示例：`…/research/amspec/`、`…/research/acrochem/`。

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
