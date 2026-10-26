# 澳門會員通 · 整體預覽（2026-10-26）

會員端、店頁、點餐合成**一份**可點穿的靜態預覽。點餐滿減回第一版 chips（滿 50 減 3／滿 90 減 8）＋進度條＋購物車滿減列，並保留商品促銷紅標與用餐方式折扣。團購與掃碼點餐整段拿掉。

## 開啟

GitHub Pages：

`https://ericchang1015.github.io/research/macau-membership-unified-2026-10-26/`

本機：開 `index.html`，或在 repo 根目錄 `python -m http.server 8080`。

## 檔案

| 檔案 | 畫面 |
| --- | --- |
| `index.html` | 今日（跨店餘額、快捷、進行中訂單、收藏） |
| `explore.html` | 逛店（搜尋／分類／地圖／收藏／空態／錯誤） |
| `store-biaosao.html` | 表嫂美食店頁 |
| `store-kuaizhai.html` | 快宅店頁 |
| `order-*.html` | 點餐小圖／大圖、規格 sheet |
| `cart-*.html` | 購物車（滿減＋商品促銷＋用餐方式折扣＋餘額扣點／到店付款） |
| `member.html` | 出示會員碼 |
| `benefits.html` | 卡券＋積分 |
| `mine.html` | 設定、訂單、收藏、客服、登出 |
| `messages.html` | 與店家聊天 |
| `shared.css` / `app.js` | 共用視覺與購物車／滿減＋ADR-035 折扣 |
| `fonts/` | 自架 Manrope（無執行期 CDN） |
| `REPORT.md` | 來源、刻意省略、折扣模型 |

相對路徑，可放在 `/research/` 下。舊三份預覽資料夾未刪，僅降為封存連結。
