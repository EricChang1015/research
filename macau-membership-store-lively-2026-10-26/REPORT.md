# 會員端店頁 · merchant-lively 報告

**時間：** 2026-10-26（Asia/Shanghai）  
**路徑：** `macau-membership-store-lively-2026-10-26/`  
**Skill：** `landing-page-design.md` Part B（Manrope、spacing／radius／motion、禁背景漸層、無 Inter／Roboto、文案禁句中連字號）＋ `redesign-existing-projects.md`  
**品牌：** 淺底 `#FAFAF8`、平台 accent `#16A34A`；店主題色僅點綴 chip／錢包（表嫂暖橘 `#C45C26`、快宅琥珀 `#B45309`）

## 產出檔案

| 檔案 | 說明 |
|------|------|
| `index.html` | 總覽 hub |
| `biaosao.html` | 表嫂美食店頁 |
| `kuaizhai.html` | 快宅店頁 |
| `shared.css` | 共用視覺系統 |
| `REPORT.md` | 本報告 |

## 視覺決策（5 點）

1. **不對稱 Hero＋浮起身分卡：** Hero 約 280px 真實菜／店面圖主導；白底圓角 logo 卡與店名／分類／地址／hashtags／評分疊在卡片上，負 margin 浮起，打破灰列表節奏。
2. **到店團購橫滑發現感：** 折扣角標＋原價刪線＋「即將推出」；語意＝店家上架低價套餐券、單人買券到店核銷（非拼單湊人數）。
3. **菜單大圖橫滑／網格：** 真實 Supabase 菜圖；MOP 一位小數＋`tabular-nums`；綠色＋號浮鈕。
4. **餘額／積分精緻 pill＋吸底雙 CTA：** 非死板三鈕表格；吸底「立即點餐」（主）＋「出示會員碼」（次）；充值／交易／掃碼點餐改為快捷列。
5. **留言有頭像占位與星等：** 商家回覆左側琥珀 accent；細微 grain／陰影增加深度；**無背景漸層**（僅 hub 標題允許文字漸層，符合 Part B）。

## 功能覆蓋

| 功能 | 狀態 |
|------|------|
| Hero／logo／店名／分類／地址／hashtags／收藏 | ✅ |
| 儲值餘額＋會員積分 | ✅ |
| 立即點餐（吸底主 CTA） | ✅ |
| 充值／審核入口、交易明細 | ✅ 快捷列 |
| 介紹、社群、聯絡（訊息／電話／WhatsApp／微信） | ✅ |
| 菜單真實菜圖 | ✅ 表嫂 4 張、快宅 2 張（皆 200） |
| 地圖（Google／高德切換＋導航） | ✅ stub |
| 留言（輸入＋列表＋商家回覆） | ✅ |
| 掃碼點餐預留 | ✅ 即將推出 |
| 團購／到店券預留 | ✅ 橫滑卡＋即將推出 |
| 出示會員碼 | ✅ 吸底次 CTA |

## IA 相對上一輪改變

- **移除** 綁死 UAT 的五格 BottomNav（首頁／訂單／會員碼／卡券／設定）於店頁內；改吸底商業 CTA，發現感對齊澳覓／大眾點評店頁。
- **重組** 區塊順序：Hero → 身分 → 錢包 → 快捷 → 團購 → 菜單 → 關於／社群／聯絡 → 地圖 → 留言。
- 上一輪 `preview/` 僅輕抛光同結構；本輪允許重新發明版面，功能不缺失。

## 限制

- 純靜態預覽，按鈕無後端。
- 地圖為示意 stub，非真實 SDK。
- 團購／掃碼點餐標「即將推出」，無購買流。
- 已放入 research repo 的 `macau-membership-store-lively-2026-10-26/`，由 `main` 部署 GitHub Pages。
- 圖一律絕對 HTTPS Supabase URL（本次核對皆 HTTP 200）。

## 素材

**表嫂** `8291f843-9def-4956-9d0b-1cfef2598306`：hero、logo、menu×4  
**快宅** `b86a0d10-9618-4b7c-8569-bcd778ae63bd`：hero、logo、menu×2
