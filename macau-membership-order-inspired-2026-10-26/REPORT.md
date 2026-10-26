# 點餐靈感預覽 · Pattern 對照報告

路徑：`macau-membership-order-inspired-2026-10-26/`  
日期：2026-10-26（Asia/Shanghai）  
品牌：澳門會員通 · 表嫂美食示意店  
參考截圖：`../order-refs/`（tikbee-03／04／05、aomi-03／04）

## 產出清單

| 檔案 | 內容 |
|---|---|
| `index.html` | 總覽：融入結構說明、與舊 order-flow 差異 |
| `menu.html` | 主推：小圖列＋左 rail＋吸底車（車內 3 件） |
| `menu-large.html` | 大圖模式（閃蜂菜卡） |
| `modifier.html` | 規格加料底部 sheet |
| `cart.html` | 展開購物車／結帳前＋空車吸底對照 |
| `shared.css` | 共用樣式（#16A34A／#FAFAF8／Manrope） |

## Pattern 對照表

| # | Pattern | Tikbee（閃蜂） | Aomi（澳覓） | 我們（Macau Membership） |
|---|---|---|---|---|
| 1 | 頂列＋分頁 | 返回／搜尋／券圖示；點餐｜評價｜商家，黃底線 | 返回／搜尋；點餐｜評價｜商家，粉／黃底線 | 返回｜店名｜搜尋／收藏；**綠底線** active 點餐 |
| 2 | 店頭券／促銷 | 橫滑紅券卡＋滿減 outline chips（tikbee-03） | 紅券卡列＋粉 outline 促銷 | 同結構橫滑券＋outline chips；文案標 **即將推出／示意**；不假裝可領 |
| 3 | 雙欄分類 | 左窄轨 emoji／短名，黃 active | 左轨約 70px，粉／灰 active | 左轨 **68px**，emoji＋短名；active **品牌綠**條＋白底 |
| 4 | 小圖菜列 | 方圖＋HOT、灰 desc、價＋黃＋（tikbee-05） | 方圖＋招牌／HOT、排名 chip、月售、粉價、圓＋／選規格（aomi-03／04） | **主推澳覓資訊密度**；方圖角標＋排名藍 chip＋暖橙紅價＋**綠圓＋／選規格 pill** |
| 5 | 大圖菜卡 | 寬幅大圖、TOP、月銷浮層、黃方加號（tikbee-04） | 亦有大圖切換 | 同結構大圖卡；加號改 **綠方角鈕**，不用閃蜂黃 |
| 6 | 吸底購物車 | 較少見 charcoal 浮條 | 深色圓角條＋吉祥物＋起送 CTA（aomi-03） | **Charcoal 圓角條**；左側數量／總額＋**可用餘額抵扣 MOP x.x**；右側綠「去結帳」；空車灰「選餐後結帳」 |

## 與舊 `v2-from-functions/order-flow.html` 差異

| 面向 | 舊 order-flow | 本預覽 |
|---|---|---|
| 分類 | 橫向 chip | 左垂直 rail |
| 菜列 | 單欄、圖在右 | 小圖左／大圖上，可切換 |
| 店頭 | 無券區 | 券卡＋促銷 chips（示意） |
| 購物條 | 淺色底 bar | Charcoal 浮條＋餘額副標 |
| 規格 | 整頁 section | 底部 sheet overlay |
| 掃碼 | 獨立「即將推出」全頁 | 菜單內小橫幅，不偽裝上線 |

## 品牌刻意差異

- **主色**：`#16A34A`（CTA／active tab／active 分類／加號），**不**用澳覓粉、**不**用閃蜂黃當主色。
- **底色**：`#FAFAF8` 平面，**禁止背景漸層**。
- **字體**：Manrope；無 Inter／Roboto；文案避免句中連字號。
- **價格**：可用暖橙紅 `#C2410C`（外賣慣例），金額 `MOP` 一位小數、`tabular-nums`。
- **會員差異**：吸底與結帳強調「儲值餘額抵扣」，非純外賣配送語意。

## 素材

全數絕對 HTTPS（Supabase public）：

- Logo／Hero：store `8291f843-9def-4956-9d0b-1cfef2598306`
- Menu：`menu-97b12b61-…`、`menu-b929d859-…`、`menu-62d09e9d-…`、`menu-dc185786-…`

## 連結

- 店頁對接：`../macau-membership-store-lively-2026-10-26/biaosao.html`（立即點餐 → `menu.html`）
- 舊功能參考：會員端 `../macau-membership-client-ui-2026-10-26/order-flow.html`

純靜態。已接入 GitHub Pages。
