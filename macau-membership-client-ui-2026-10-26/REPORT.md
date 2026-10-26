# Macau Membership 會員端 v2 · 功能向全新設計報告

日期：2026-10-26（Asia/Shanghai）  
目錄：`/workspace/ui-redesign-2026-10-26/v2-from-functions/`  
依據：`FUNCTION_INVENTORY.md` · 視覺：elayadesign（淺底品牌覆蓋）

---

## 一句話 IA

**以「今日做事 → 逛店發現 → 出示結帳 → 權益資產 → 我的帳戶」重組會員端；會員碼升為中央主動作，不再用舊版五鍵或頂部分頁。**

---

## 為何這樣組功能

舊版把「訂單／卡券／會員碼／設定」攤成同等底欄鍵，首屏又用「錢包餘額｜收藏｜全部商家」頂 tab，資訊架構貼錢包，發現與行動被切開。

本輪從能力出發重排：

| 意圖 | 導覽鍵 | 放什麼 | 理由 |
|------|--------|--------|------|
| 今天要幹嘛 | **今日** | 跨店餘額卡、進行中訂單、快捷（出示／卡券／找店）、收藏與附近、訊息角標、掃碼點餐預留 | 登入後第一屏回答「我現在能消費／跟進什麼」 |
| 找哪間店 | **逛店** | 搜尋、分類、排序、分頁、地圖、收藏篩選、商家卡 | 發現獨立成一級，不再塞進首頁頂 tab |
| 結帳核心 | **出示**（中央凸起） | 會員 QR、常用店餘額摘要 | 庫存列為核心動作；視覺權重最高且與舊「會員碼」鍵位語意切割（中鍵＋獨立舞台） |
| 我有什麼／進度 | **權益** | 卡券、訂單、交易明細、積分摘要、團購預留 | 把「資產＋履約」收成一域，避免訂單／卡券搶兩個底欄位 |
| 帳號與系統 | **我的** | 名稱、語言、推播、訊息、切換商戶、客服、登出 | 設定與身分集中，職員切換不混在消費導覽 |

店頁（表嫂美食）與點餐流程保持深層：從逛店／今日／餘額卡進入；點餐自帶購物車與餘額支付示意。

---

## 與舊 UI 的刻意差異（禁止項對照）

| 禁止 | 本輪作法 |
|------|----------|
| 照抄 BottomNav「首頁｜訂單｜會員碼｜我的卡券｜設定」 | 改為「今日｜逛店｜出示｜權益｜我的」，中鍵為出示 |
| 照抄頂 tab「錢包餘額｜我的收藏｜全部商家」 | 今日用橫滑餘額卡；收藏進今日區塊＋逛店篩選；全部商家＝逛店 |
| Before／After 對照現況為主 | 交付為完整產品預覽，無並排舊版 |
| 假造掃碼點餐／團購已上線 | 僅「即將推出」橫幅與空狀態預留頁 |

---

## 視覺系統（品牌覆蓋）

- 底 `#FAFAF8`，卡片白，單一 accent `#16A34A`
- 字體 Manrope；金額 `tabular-nums`，MOP 一位小數（如 328.5）
- Spacing／radius／motion 依 landing-page-design；無背景漸層；無 Inter／Roboto；文案避免句中連字號
- 手機框約 390 寬；底欄浮動圓角＋中央出示鍵

---

## 功能覆蓋對照表（FUNCTION_INVENTORY 全項）

### 帳號

| 功能 | 畫面定位 | 覆蓋 |
|------|----------|------|
| 登入／登出 | `settings.html#login` 登入示意；`settings.html#me` 登出 | 是 |
| 顯示名稱設定（首次） | `settings.html#login` 首次名稱卡；`#me` 編輯入口 | 是 |
| 帳號設定／語言 CN／EN | `settings.html#me` 語言分段控制 | 是 |
| 切換到商戶端 | `settings.html#me`「切換到商戶端」列 | 是 |
| 訊息／與店家聊天（未讀） | `home.html` 鈴鐺角標；`settings.html#messages` | 是 |

### 發現商家

| 功能 | 畫面定位 | 覆蓋 |
|------|----------|------|
| 商家列表（搜尋、分類、排序、分頁） | `explore.html#list` | 是 |
| 地圖找店 | `explore.html#map` | 是 |
| 收藏／取消／我的收藏 | 商家卡愛心；`explore.html#fav`；`home.html` 收藏列 | 是 |
| 商家卡（logo、店名、分類、地址、介紹、hashtags） | `explore.html`／`home.html` 卡片；詳見 `merchant.html` | 是 |

### 錢包與會員

| 功能 | 畫面定位 | 覆蓋 |
|------|----------|------|
| 各店儲值餘額 | `home.html` 餘額橫滑；`merchant.html` 錢包格 | 是 |
| 會員積分 | 同上；`wallet-member.html#coupons` 摘要 | 是 |
| 會員碼／QR | `wallet-member.html#pay`；全域底欄中鍵 | 是 |
| 我的卡券（新券提示） | `wallet-member.html#coupons` | 是 |
| 充值／審核入口 | `merchant.html` 充值 CTA；`wallet-member.html#tx` 審核中列 | 是 |
| 交易明細 | `merchant.html` 明細段；`wallet-member.html#tx` | 是 |

### 點餐與訂單

| 功能 | 畫面定位 | 覆蓋 |
|------|----------|------|
| 店內點餐（菜單、規格加料、購物車、送出） | `order-flow.html#menu` `#modifier` `#cart` | 是 |
| 訂單列表與狀態 | `wallet-member.html#orders`；`home.html`「繼續」 | 是 |
| 訂單推播／即時狀態示意 | 訂單卡進度條＋「推播已開啟」文案 | 是 |

### 商戶展示頁

| 能力 | 畫面定位 | 覆蓋 |
|------|----------|------|
| Hero（logo／店名／地址／分類／認證） | `merchant.html#logged-in` | 是 |
| 儲值餘額＋積分 | 同上錢包格 | 是 |
| 點餐／充值 CTA | 主按鈕列 | 是 |
| 介紹＋hashtags | 「關於本店」 | 是 |
| 社群、聯絡 | 列表列 | 是 |
| 專屬優惠／積分兌換 | 優惠券區 | 是 |
| 推薦菜單 | 推薦菜單＋連到 order-flow | 是 |
| 海報 | 海報橫滑 | 是 |
| 地圖 | 店頁地圖 stub | 是 |
| 留言 | 留言區 | 是 |

### 其他

| 功能 | 畫面定位 | 覆蓋 |
|------|----------|------|
| 客服／支援 | `settings.html#me`；店頁底部 | 是 |
| empty／loading／error | `explore.html#empty` `#loading` `#error` | 是 |
| 推播註冊語意 | `settings.html` 推播列「已開啟」 | 是 |

### 未來（預留，標即將推出）

| 功能 | 預留位置 | 作法 |
|------|----------|------|
| 掃碼點餐 | `home.html` 快捷（muted）＋橫幅；`merchant.html` 橫幅；`order-flow.html` 菜單頂橫幅＋`#scan-soon` 說明頁 | 只說明未來桌邊／櫃檯 QR → 菜單／桌號；可回手點菜單；**無完整可走流程** |
| 團購（到店特價） | `wallet-member.html#coupons` chip／橫幅；`#group` 低價套餐／代金券列表 | 澳覓／mFood／閃蜂／大眾點評式：單人可買、電子券到店核銷；示意卡不可下單 |

**現有必備功能覆蓋：100%。**  
**未來兩項：入口與 IA 槽位 100% 預留，均標「即將推出」。**

---

## 檔案清單

| 檔案 | 內容 |
|------|------|
| `index.html` | 入口說明、導覽、功能覆蓋 checklist |
| `home.html` | 今日（已登入／未登入） |
| `explore.html` | 逛店列表／地圖／收藏／loading／empty／error |
| `merchant.html` | 表嫂美食店頁（登入後／未登入） |
| `order-flow.html` | 菜單、規格加料、購物車、掃碼預留 |
| `wallet-member.html` | 出示、卡券、訂單、明細、團購預留 |
| `settings.html` | 我的、訊息、登入／首次名稱 |
| `shared.css` | 共用視覺系統（含 logo／hero／menu／poster img object-fit） |
| `assets/biaosao/` · `assets/kuaizhai/` | UAT 真實 logo／hero／菜單／QR |
| `REPORT.md` | 本報告 |

開啟方式：用瀏覽器打開 `index.html`，再點各畫面卡片即可逛完整會員端新設計。

---

## 團購語意修正

早期草稿若帶「開團／參團／成團進度」語感，已對齊產品真相（見 `FUNCTION_INVENTORY.md`）：

- **正確**：店家上架低價商品、套餐或代金券；用戶**單人即可購買**，得電子券後**到店核銷**（澳覓團購、mFood 勁爆團、閃蜂、大眾點評式）。
- **錯誤**：拼多多式湊人數成團、開團／參團進度條。
- **畫面**：`wallet-member.html#group` 以特價套餐／代金券卡列表呈現（含真實菜單圖）；chip 與橫幅改為「到店用／單人可買」說明；示意卡標「即將推出」、不可下單。

## 真實素材來源（UAT supabase merchant-assets）

Demo 已嵌入從 UAT Supabase `merchant-assets` 下載的店家圖，相對路徑 `assets/...`：

| 店家 | 檔案 |
|------|------|
| 表嫂美食 `biaosao/` | `logo.webp` · `hero.webp` · `menu1–4.webp` · `qr.webp` |
| 快宅 `kuaizhai/` | `logo.webp` · `hero.webp` · `menu1` · `menu2` · `menu3` · `menu6.webp` |

使用處：`home`／`explore`／`settings` 商家 logo；`merchant` Hero 背景＋logo＋推薦菜單＋海報；`order-flow` 菜單縮圖與規格頁主圖；`wallet-member` 出示 QR、常用店 logo、團購卡縮圖。其他示意店可用 picsum seed。視覺仍為 Manrope、綠 `#16A34A`、無背景漸層、文案避免句中連字號。

截圖：`screenshots/`（google-chrome headless 重截）。

---

## 後續建議（非本輪交付）

1. 將「出示」中鍵與系統亮度／QR 刷新接真 API。  
2. 權益內卡券／訂單／明細可改為頂部 segment，減少頁面跳轉。  
3. 掃碼點餐上線時：複用 `order-flow`，僅多桌號 context；團購掛在權益第三 segment 即可，不必再改底欄。
