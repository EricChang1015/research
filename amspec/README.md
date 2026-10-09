# AMSpec／傑出材料科技 — 公開資料研究簡報

互動式單頁研究報告（繁體中文／台灣），整理自公開來源，供內部理解與協助推廣討論。

## 這是什麼

- 公司：傑出材料科技股份有限公司（AMSpec，統編 27313005）
- 內容：產品／製程、競爭優勢、同業、上下游、推廣注意事項、產能有限時的產值策略
- 標示：事實／公司自述／推論／衝突／建議 — 未發明營收、噸產能、單價或未具名合約

## 怎麼開啟

**本機**

```bash
# 直接用瀏覽器開啟
open index.html   # macOS
xdg-open index.html   # Linux
```

或任意靜態伺服器：

```bash
python3 -m http.server 8080 --directory .
# 然後開 http://localhost:8080/
```

**GitHub Pages**

1. 將本目錄推到 repo（例如 `docs/` 或 repo 根目錄）
2. Settings → Pages → Deploy from branch，選含 `index.html` 的分支與資料夾
3. 無需 build；單一 `index.html`（內嵌 CSS／JS，無必要 CDN）

## 檔案

| 檔案 | 說明 |
| --- | --- |
| `index.html` | 主報告（互動視覺版，Pages 入口） |
| `research.md` | 調查筆記原文 |
| `summary.txt` | 一頁摘要 |

## 來源聲明

內容來自 [amspec-inc.com](https://www.amspec-inc.com/zh-hant/) 公開頁面、經濟部商工登記轉載（g0v GCIS）、以及同業公開官網。Fox／RockShox／SR SUNTOUR／SIA 等具名關係均保留「公司自述」或公司宣稱之核准，非本報告獨立查證之合約。

調查日期：2026-10-09（台北時間）。

## 互動區塊

- 上游 → AMSpec → 下游價值鏈（SVG，點節點看事實／推論）
- 生態系地圖（供應商／核心／客戶／對手）
- 製程步驟（擠錠→擠型→抽→HT→完工→驗證）
- 同業公開主張比較表與質性條圖（無比噸產能）
- 產能有限時 Do／Don't 策略矩陣與工時優先序
- 頂部篩選芯片（全部／事實／公司自述／推論／建議）、閱讀進度條、快捷目錄
