# 巨鑫化學／Acrochem — 公開資料研究簡報

互動式單頁研究報告（繁體中文／台灣），整理自公開來源，供內部理解與協助推廣討論。

## 這是什麼

- 公司：巨鑫化學股份有限公司（Acro Chemical／Acrochem，統編 22529580）
- 主業：活性碳製造與廢碳再生（**不是**鋁烤漆／陽極化學品）
- 內容：產品／服務、優勢弱點、對手、客戶證據、上下游、推廣注意事項、產能有限時的價值策略
- 標示：事實／公司自述／推論／衝突／建議 — 不發明營收；產能硬錨僅政府再利用許可量 365 t／月

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

部署後路徑：`…/research/acrochem/`（與 hub 根目錄並列的 `acrochem/` 資料夾）。

1. 將 `research-repo/` 推到 repo（例如 `docs/` 或 repo 根目錄）
2. Settings → Pages → Deploy from branch，選含 `index.html` 的分支與資料夾
3. 無需 build；單一 `index.html`（內嵌 CSS／JS，無 CDN）

## 檔案

| 檔案 | 說明 |
| --- | --- |
| `index.html` | 主報告（互動視覺版，Pages 入口） |
| `research.md` | 調查筆記原文 |
| `summary.txt` | 一頁摘要 |
| `amspec-crosscheck.md` | 與 AMSpec／傑出材料交叉註記（非供應鏈） |

## 來源聲明

內容來自 [acrochem.com](https://www.acrochem.com/) 公開頁面、透明足跡、工商次級彙整（twincn 等）、政府標案次級轉載、SEMICON 展商頁，以及同業公開官網。標案金額宜對電子採購原公告再核。

調查日期：2026-10-09（台北時間）。

## 互動區塊

- 上游 → Acrochem → 下游價值鏈（SVG，點節點看事實／推論）
- 生態系地圖（供應／核心／客戶／對手）
- 廢碳再生／更換流程步驟
- 同業公開主張比較表與質性條圖（無比噸產能）
- 產能有限時 Do／Don't 策略矩陣與優先序
- 頂部篩選芯片（全部／事實／公司自述／推論／建議）、閱讀進度條、快捷目錄
- §08b 與 AMSpec 地理鄰近但非供應鏈註記
