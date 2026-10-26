# 澳門會員通整體預覽 · 對照報告

日期：2026-10-26  
目錄：`macau-membership-unified-2026-10-26/`  
Pages：`https://ericchang1015.github.io/research/macau-membership-unified-2026-10-26/`

## 原碼取用情況

雲端 agent 環境對 `https://github.com/EricChang1015/Macau-Ledger`（`uat`）仍是 **404**，無法 clone。產品碼未改。折扣模型依 gatekeep 轉述的 uat 真相改靜態預覽：

| 檔 | 用途 |
| --- | --- |
| `src/lib/order-discounts.ts`（ADR-035） | 千分率折扣：商品 `promo_rate_permille`（可 `promo_limit_qty`）→ 用餐方式全單 `fulfillment_discounts`（dine_in／takeaway／merchant_delivery）；盒費／配送費不折 |
| `src/components/wallet/order-menu-view.tsx` | 菜單頂 `fulfillmentDiscountBadges`；左側虛擬「折扣」分類；商品卡紅標折數＋劃線原價 |
| `src/components/wallet/order-cart-view.tsx` | 小計 → 商品促銷折讓 → 用餐方式折扣 →（盒費／配送）→ 應付；付款＝餘額扣點／到店（或貨到）付款 |

**沒有**「滿 X 減 Y」門檻檔。外送「再購 X 起送」是起送，不是滿減。

菜名／價與圖沿用本 repo 既有 UAT Supabase 素材。折扣**數字為示意示例**（雲端讀不到私庫真實商戶設定）。

## 刻意拿掉

| 項目 | 原因 |
| --- | --- |
| 「滿 50 減 3｜滿 90 減 8」與滿減進度條 | 產品沒有滿額減檔；上一輪誤畫 |
| 團購／到店特價券／掃碼點餐 | 未上線，整段不出現 |
| 虛構第三間店、月售／熱銷排名 | 無原碼依據 |

## 折扣怎麼呈現（示意）

`promo_rate_permille` 在本預覽當作**應付千分率**：900＝9 折、850＝8.5 折、800＝8 折。

**表嫂（示意）**

- 用餐方式：堂食 9 折、自取 9.5 折、外送 9 折；外送起送 MOP 80.0、配送費 12.0、自取盒費 2.0
- 商品促銷：海鮮大盤雞 8.5 折、招牌拼盤 8 折（限購 2）、時令小菜 9 折

**快宅（示意，略不同）**

- 用餐方式：堂食 9.5 折、自取無折扣、外送 9 折；外送起送 MOP 60.0
- 商品促銷：手制 Margherita 8 折、豬頸肉飯 9 折

畫面：

1. **菜單頂**：用餐方式徽章列，可切堂食／自取／外送；註記盒費／配送不折；外送未達顯示「再購 X 起送」。
2. **左軌**：虛擬「折扣」釘選有 `promo_rate_permille` 的商品。
3. **菜卡**：紅標折數＋劃線原價＋折後價。
4. **吸底車／購物車**：促銷折讓＋用餐方式折扣（若有）＋餘額可抵；付款用語＝餘額扣點／到店付款／貨到付款。

順序：先商品促銷（限購份數以外原價），再對折後餐食做用餐方式折扣，最後加不打折的盒費／配送費。

## 店與圖

| 店 | UUID | 用到的公開圖 |
| --- | --- | --- |
| 表嫂美食 | `8291f843-9def-4956-9d0b-1cfef2598306` | hero、logo、menu×4、qr |
| 快宅 | `b86a0d10-9618-4b7c-8569-bcd778ae63bd` | hero、logo、menu×2 |

## 視覺

- 淺底 `#FAFAF8`，單一 accent `#16A34A`；促銷角標用警示紅（折數，不是主色）
- 自架 Manrope woff2，無 Google Fonts／無背景漸層
