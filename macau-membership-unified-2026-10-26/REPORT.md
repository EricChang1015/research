# 澳門會員通整體預覽 · 對照報告

日期：2026-10-26  
目錄：`macau-membership-unified-2026-10-26/`  
Pages：`https://ericchang1015.github.io/research/macau-membership-unified-2026-10-26/`

## 原碼取用情況

嘗試 `git clone --branch uat https://github.com/EricChang1015/Macau-Ledger`：GitHub 回 **404**（此環境的 token 也無法讀該私有庫）。因此**沒有改、也沒有 checkout 產品碼**。

對照用的「產品真相」改來自：

1. 本任務 brief 指定應讀的路徑（作為 IA／區塊清單，而非實際 checkout）：
   - `src/app/wallet/**`
   - `src/components/wallet/order-menu-view.tsx`
   - `src/components/wallet/order-cart-view.tsx`
   - `src/components/wallet/order-spec-sheet.tsx`
   - `src/components/wallet/order-merchant-header.tsx`
   - 商戶檔、卡券、會員 QR、餘額、收藏、地圖
   - 結帳／商戶設定的 promotion／threshold／滿減欄位
2. `FUNCTION_INVENTORY.md` 的**現有必備功能**（其「未來團購預留」本輪**整段忽略**）。
3. 本 repo 既有三份預覽與公開 Supabase `merchant-assets` 圖。

無法核對的欄位（真實菜名價、滿減檔位數字、店頁區塊文案）不以假造後端資料假裝已讀原碼。菜名／價沿用 **store-lively** 已與公開圖綁定的配對；滿減檔位沿用 **order-inspired** 已寫過的「滿 50 減 3｜滿 90 減 8」，並做成可計算進度，不再標「示意／即將推出」。

## 刻意拿掉

| 項目 | 原因 |
| --- | --- |
| 團購／到店特價／代金券列／即將推出 deal 卡 | Eric：商戶還沒有的先不要上；原碼沒有就整段拿掉 |
| 掃碼點餐入口與橫幅 | 同樣是未上線能力 |
| 大眾點評式套餐券、拼團進度 | 不存在 |
| 虛構第三間店（如新口岸茶餐廳＋picsum） | 無真實素材 |
| 月售、店內熱銷第 N、假評分 | 無原碼依據 |
| 店頁海報造景橫滑 | 本輪店頁區塊清單未列海報 |
| 舊產品 BottomNav「首頁｜訂單｜會員碼｜卡券｜設定」 | 改功能向 IA |

## 本輪 IA（僅現有能力）

| 鍵 | 放什麼 |
| --- | --- |
| 今日 | 跨店餘額、快捷（出示／卡券／找店／充值）、進行中訂單、收藏 |
| 逛店 | 搜尋、分類、排序語意、地圖、收藏篩選、空態／錯誤 |
| 出示 | 會員 QR、常用店餘額 |
| 權益 | 卡券＋各店積分（訂單不佔這個鍵） |
| 我的 | 名稱、語言、推播、訊息、訂單、收藏、明細、客服、切換商戶端、登出 |

互通：逛店 → 店頁 →「立即點餐」→ 菜單 → 規格 → 購物車 → 我的／訂單；店頁與底欄都可到出示。

## 滿減怎麼呈現

規則（兩檔、取已達最高檔，不疊加）：

- 滿 MOP 50.0 減 3.0
- 滿 MOP 90.0 減 8.0

畫面：

1. **菜單頂**綠底橫幅：寫出兩檔；進度條＝小計／最高門檻；文案「再消費 MOP x 即可減 y」或「已減 y · 再消費可減更高檔」或「已滿 90，本單減 8.0」。
2. **吸底 charcoal 車**：件數、已減金額、餘額可抵、綠「去結帳」。
3. **購物車**：小計 → 滿減列 → 餘額抵扣 → 應付；送出後餘額示意扣減。

加購即時重算（`app.js` 的 `applyPromo`）。這是把產品已有、但舊點餐頁沒露出的滿減，做進點餐 UI；檔位數字在讀不到 `uat` 設定前沿用上一輪點餐稿。

## 店與圖

| 店 | UUID | 用到的公開圖 |
| --- | --- | --- |
| 表嫂美食 | `8291f843-9def-4956-9d0b-1cfef2598306` | hero、logo、menu×4、qr |
| 快宅 | `b86a0d10-9618-4b7c-8569-bcd778ae63bd` | hero、logo、menu×2 |

地址／介紹／留言（Joy 充值問句＋商家回覆）沿用 store-lively，因其比會員端 v2 的黑沙環虛構址更具體。菜價以店頁配對為準（海鮮大盤雞 218.0，不是點餐稿裡的 48.0）。

## 視覺

- 淺底 `#FAFAF8`，單一 accent `#16A34A`，價格暖橙紅
- 自架 Manrope woff2，無 Google Fonts／無背景漸層
- 點餐結構取閃蜂／澳覓（左軌＋菜列＋吸底車），主色仍品牌綠
