/* Macau Membership unified preview · cart + 滿減 + chrome */
(function () {
  "use strict";

  var IMG = "https://zymdemjflsckicwcinxl.supabase.co/storage/v1/object/public/merchant-assets/";
  var BIA = "8291f843-9def-4956-9d0b-1cfef2598306/";
  var KUA = "b86a0d10-9618-4b7c-8569-bcd778ae63bd/";

  var STORES = {
    biaosao: {
      id: "biaosao",
      uuid: "8291f843-9def-4956-9d0b-1cfef2598306",
      name: "表嫂美食",
      category: "餐飲",
      tags: ["#茶餐廳", "#外賣", "#順德菜", "#大盤雞"],
      address: "澳門 鹽里（爛花園）30號 文英大廈 地下B",
      intro: "海鮮大盤雞，鮮味無極。手打肉餅，顛覆你對肉餅的想像。茶餐廳風味與順德菜並存，外賣堂食都合適。",
      logo: IMG + BIA + "logo-d8966e10-99ef-471f-9b79-2d425ef1c576.webp",
      hero: IMG + BIA + "hero-f3742292-4482-41ca-8989-ff837f72f46d.webp",
      qr: IMG + BIA + "qr-7e55571c-25ee-41de-a37c-46ab70feb830.webp",
      balance: 328.5,
      points: 1240,
      social: ["Facebook"],
      phone: "",
      hours: "",
      /* 滿減：門檻遞減，取已達最高檔。金額沿用上一輪點餐預覽已寫過的門檻示意。 */
      tiers: [
        { min: 50, off: 3 },
        { min: 90, off: 8 }
      ],
      dishes: [
        { id: "bs-chicken", name: "海鮮大盤雞", desc: "鮮味無極，份量足", price: 218.0, cat: "熱銷", img: IMG + BIA + "menu-97b12b61-7f2b-40e1-a11a-bd1d093bba87.webp", spec: true, badge: "招牌" },
        { id: "bs-platter", name: "招牌拼盤", desc: "熱炒精選組合", price: 128.0, cat: "熱銷", img: IMG + BIA + "menu-b929d859-51da-48ce-aba4-91c69e6429da.webp" },
        { id: "bs-pork", name: "手打肉餅", desc: "顛覆你對肉餅的想像", price: 42.0, cat: "小食", img: IMG + BIA + "menu-62d09e9d-5215-4204-a3b8-3966ee05b0ef.webp" },
        { id: "bs-veg", name: "時令小菜", desc: "清爽配飯首選", price: 38.0, cat: "小食", img: IMG + BIA + "menu-dc185786-6d35-480e-9e00-666bcaea2398.webp" }
      ],
      cats: [
        { id: "熱銷", emoji: "🔥" },
        { id: "小食", emoji: "🥗" }
      ],
      comment: { who: "Joy", date: "2026/07/02", text: "請問如何在線上充值？想先儲值再點餐。", reply: "等我確認一下後，OK 了就會通知你", stars: "★★★★☆" },
      rewards: [
        { val: "20", unit: "MOP", title: "儲值滿 200 贈券", sub: "適用堂食 · 本店專屬" },
        { val: "200", unit: "積分", title: "積分兌換小食", sub: "到店由店員核銷" }
      ]
    },
    kuaizhai: {
      id: "kuaizhai",
      uuid: "b86a0d10-9618-4b7c-8569-bcd778ae63bd",
      name: "快宅",
      category: "餐飲",
      tags: ["#手制pizza", "#意粉", "#特色葡菜"],
      address: "澳門 龍嵩正街 57 號 A",
      intro: "本店經營 13 年，主打手制 pizza、意粉、特色葡菜。營業時間 12:00–22:00，電話 63801028。龍嵩正街，步行可達大三巴。",
      logo: IMG + KUA + "logo-6a32e2d4-3489-4141-826f-641e138799c9.webp",
      hero: IMG + KUA + "hero-907e6465-4343-4db2-a9d2-83fbb621812a.webp",
      qr: IMG + BIA + "qr-7e55571c-25ee-41de-a37c-46ab70feb830.webp",
      balance: 86.0,
      points: 210,
      social: ["網站", "Facebook", "Instagram"],
      phone: "63801028",
      hours: "12:00–22:00",
      tiers: [
        { min: 50, off: 3 },
        { min: 90, off: 8 }
      ],
      dishes: [
        { id: "kz-pizza", name: "手制 Margherita", desc: "番茄、水牛芝士、羅勒", price: 98.0, cat: "熱銷", img: IMG + KUA + "menu-65ffa33f-647d-4687-8c04-d6f542dd6bc2.webp", spec: true, badge: "招牌" },
        { id: "kz-pork", name: "豬頸肉飯", desc: "客人回訪最愛", price: 58.0, cat: "飯類", img: IMG + KUA + "menu-24457451-87dc-47aa-b1c0-2e61b3853d36.webp" }
      ],
      cats: [
        { id: "熱銷", emoji: "🔥" },
        { id: "飯類", emoji: "🍚" }
      ],
      comment: { who: "Hugo", date: "2026/08/14", text: "pizza 薄底香，會員碼結帳很快。", reply: "", stars: "★★★★★" },
      rewards: [
        { val: "10", unit: "MOP", title: "本店會員券", sub: "儲值會員可使用" },
        { val: "150", unit: "積分", title: "兌換飲品一杯", sub: "到店核銷" }
      ]
    }
  };

  function mop(n) {
    return (Math.round(n * 10) / 10).toFixed(1);
  }

  function cartKey(storeId) {
    return "mm-unified-cart-" + storeId;
  }

  function getCart(storeId) {
    try {
      return JSON.parse(localStorage.getItem(cartKey(storeId)) || "[]");
    } catch (e) {
      return [];
    }
  }

  function setCart(storeId, items) {
    localStorage.setItem(cartKey(storeId), JSON.stringify(items));
    drawCartUi(storeId);
  }

  function findDish(store, id) {
    for (var i = 0; i < store.dishes.length; i++) {
      if (store.dishes[i].id === id) return store.dishes[i];
    }
    return null;
  }

  function addItem(storeId, dishId, qty, opts) {
    var items = getCart(storeId);
    var key = dishId + "|" + (opts || "");
    var found = null;
    for (var i = 0; i < items.length; i++) {
      if (items[i].key === key) found = items[i];
    }
    if (found) found.qty += qty || 1;
    else items.push({ key: key, dishId: dishId, qty: qty || 1, opts: opts || "" });
    setCart(storeId, items);
    toast("已加入購物車");
  }

  function setQty(storeId, key, qty) {
    var items = getCart(storeId).filter(function (it) {
      if (it.key !== key) return true;
      it.qty = qty;
      return qty > 0;
    });
    setCart(storeId, items);
  }

  function cartTotals(storeId) {
    var store = STORES[storeId];
    var items = getCart(storeId);
    var count = 0;
    var sub = 0;
    var lines = [];
    items.forEach(function (it) {
      var d = findDish(store, it.dishId);
      if (!d) return;
      count += it.qty;
      sub += d.price * it.qty;
      lines.push({ it: it, dish: d, line: d.price * it.qty });
    });
    var promo = applyPromo(store.tiers, sub);
    var payable = Math.max(0, sub - promo.off);
    var balUse = Math.min(store.balance, payable);
    return {
      store: store,
      items: items,
      lines: lines,
      count: count,
      sub: sub,
      promo: promo,
      payable: payable,
      balUse: balUse,
      remain: store.balance - balUse
    };
  }

  function applyPromo(tiers, sub) {
    var reached = null;
    var next = null;
    for (var i = 0; i < tiers.length; i++) {
      if (sub >= tiers[i].min) reached = tiers[i];
      else if (!next) next = tiers[i];
    }
    var off = reached ? reached.off : 0;
    var target = reached ? reached.min : (tiers[0] ? tiers[0].min : 0);
    if (next) target = next.min;
    var pct = 0;
    if (tiers.length) {
      var top = tiers[tiers.length - 1].min;
      pct = Math.min(100, (sub / top) * 100);
    }
    var hint;
    if (!tiers.length) hint = "";
    else if (!reached && tiers[0]) hint = "再消費 MOP " + mop(tiers[0].min - sub) + " 即可減 " + mop(tiers[0].off);
    else if (next) hint = "已減 " + mop(off) + " · 再消費 MOP " + mop(next.min - sub) + " 可減 " + mop(next.off);
    else hint = "已滿 " + mop(reached.min) + "，本單減 " + mop(off);
    return { off: off, reached: reached, next: next, pct: pct, hint: hint };
  }

  function tierLabel(tiers) {
    return tiers.map(function (t) {
      return "滿 " + mop(t.min) + " 減 " + mop(t.off);
    }).join(" · ");
  }

  function toast(msg) {
    var el = document.getElementById("toast");
    if (!el) {
      el = document.createElement("div");
      el.id = "toast";
      el.className = "toast";
      var host = document.querySelector(".phone-screen") || document.body;
      host.appendChild(el);
    }
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(toast._t);
    toast._t = setTimeout(function () { el.classList.remove("show"); }, 1400);
  }

  function renderPromoBox(el, t) {
    if (!el) return;
    el.innerHTML =
      '<div class="k" >本店滿減</div>' +
      '<div class="rules">' + tierLabel(t.store.tiers) + "</div>" +
      '<div class="prog" aria-hidden="true"><i style="width:' + t.promo.pct + '%"></i></div>' +
      '<div class="hint">' + (t.count ? t.promo.hint : "點餐後即時計算達標進度") + "</div>";
  }

  function renderCartDock(el, t, cartHref) {
    if (!el) return;
    var disabled = t.count === 0;
    var sub = t.count
      ? (t.promo.off
        ? t.count + " 件 · 已減 " + mop(t.promo.off)
        : t.count + " 件 · " + t.promo.hint)
      : "選餐後可用餘額抵扣";
    el.innerHTML =
      '<div class="badge-bubble" aria-hidden="true">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h2l2 10h10l2-7H8"/><circle cx="10" cy="20" r="1.5"/><circle cx="17" cy="20" r="1.5"/></svg>' +
        (t.count ? '<span class="count-dot">' + t.count + "</span>" : "") +
      "</div>" +
      '<div class="info">' +
        '<div class="total tabular">MOP ' + mop(t.payable) + "</div>" +
        '<div class="sub">' + sub + " · 餘額可抵 MOP " + mop(t.store.balance) + "</div>" +
      "</div>" +
      (disabled
        ? '<span class="cta is-disabled">選餐後結帳</span>'
        : '<a class="cta" href="' + cartHref + '">去結帳</a>');
  }

  function renderCartPage(root, storeId) {
    var t = cartTotals(storeId);
    var list = root.querySelector("[data-cart-list]");
    var sum = root.querySelector("[data-cart-summary]");
    var pay = root.querySelector("[data-cart-pay]");
    var cta = root.querySelector("[data-cart-cta]");
    if (list) {
      if (!t.lines.length) {
        list.innerHTML = '<div class="state-panel"><div class="illus">🛒</div><h3>購物車是空的</h3><p>回菜單加購後，滿減與餘額抵扣會即時計算。</p><a class="btn btn-primary" href="order-' + storeId + '.html">回菜單</a></div>';
      } else {
        list.innerHTML = t.lines.map(function (ln) {
          return (
            '<article class="cart-item">' +
              '<div class="thumb"><img alt="" src="' + ln.dish.img + '" /></div>' +
              '<div class="body">' +
                "<h3>" + ln.dish.name + "</h3>" +
                (ln.it.opts ? '<p class="opts">' + ln.it.opts + "</p>" : "") +
                '<div class="dish-foot">' +
                  '<span class="amt tabular" style="font-weight:700;color:var(--price)">MOP ' + mop(ln.line) + "</span>" +
                  '<div class="qty-ctrl">' +
                    '<button type="button" data-qty="' + ln.it.key + '" data-delta="-1" aria-label="減少">−</button>' +
                    '<strong class="tabular">' + ln.it.qty + "</strong>" +
                    '<button type="button" data-qty="' + ln.it.key + '" data-delta="1" aria-label="增加">+</button>' +
                  "</div>" +
                "</div>" +
              "</div>" +
            "</article>"
          );
        }).join("");
      }
    }
    if (sum) {
      sum.innerHTML =
        '<div class="line"><span>小計</span><span class="tabular">MOP ' + mop(t.sub) + "</span></div>" +
        '<div class="line green"><span>滿減 · ' + (t.promo.reached ? "滿 " + mop(t.promo.reached.min) : "未達檔") + '</span><span class="tabular">− MOP ' + mop(t.promo.off) + "</span></div>" +
        '<div class="line"><span>餘額抵扣</span><span class="tabular">− MOP ' + mop(t.balUse) + "</span></div>" +
        '<div class="line total"><span>應付</span><span class="tabular">MOP ' + mop(t.payable) + "</span></div>" +
        '<p class="tiny muted" style="margin-top:8px">' + t.promo.hint + "</p>";
    }
    if (pay) {
      pay.innerHTML =
        "<strong>支付方式</strong> · " + t.store.name + "儲值餘額<br />目前餘額 <span class=\"tabular\">MOP " +
        mop(t.store.balance) + "</span> · 送出後約剩 <span class=\"tabular\">MOP " + mop(t.remain) + "</span>";
    }
    if (cta) {
      cta.disabled = t.count === 0;
      cta.textContent = t.count ? "送出訂單 · MOP " + mop(t.payable) : "請先選餐";
    }
  }

  function drawCartUi(storeId) {
    var t = cartTotals(storeId);
    document.querySelectorAll("[data-promo]").forEach(function (el) {
      renderPromoBox(el, t);
    });
    document.querySelectorAll("[data-cart-dock]").forEach(function (el) {
      renderCartDock(el, t, el.getAttribute("data-cart-href") || ("cart-" + storeId + ".html"));
    });
    var page = document.querySelector("[data-cart-page]");
    if (page) renderCartPage(page, storeId);
  }

  function openSheet(storeId, dishId) {
    var store = STORES[storeId];
    var d = findDish(store, dishId);
    if (!d) return;
    var mask = document.getElementById("sheet-mask");
    if (!mask) return;
    mask.classList.add("open");
    mask.querySelector("[data-sheet-img]").src = d.img;
    mask.querySelector("[data-sheet-name]").textContent = d.name;
    mask.querySelector("[data-sheet-desc]").textContent = d.desc;
    mask.querySelector("[data-sheet-price]").textContent = "MOP " + mop(d.price) + " 起";
    mask.setAttribute("data-dish", dishId);
    var qty = mask.querySelector("[data-sheet-qty]");
    if (qty) qty.textContent = "1";
    updateSheetTotal(storeId);
  }

  function sheetQty() {
    var el = document.querySelector("[data-sheet-qty]");
    return el ? parseInt(el.textContent, 10) || 1 : 1;
  }

  function updateSheetTotal(storeId) {
    var mask = document.getElementById("sheet-mask");
    if (!mask) return;
    var d = findDish(STORES[storeId], mask.getAttribute("data-dish"));
    if (!d) return;
    var extra = 0;
    mask.querySelectorAll("[data-extra]:checked").forEach(function (n) {
      extra += parseFloat(n.value) || 0;
    });
    var btn = mask.querySelector("[data-sheet-add]");
    if (btn) btn.textContent = "加入 · MOP " + mop((d.price + extra) * sheetQty());
  }

  function seedIfEmpty(storeId) {
    if (localStorage.getItem(cartKey(storeId)) !== null) return;
    if (storeId === "biaosao") {
      setCart(storeId, [
        { key: "bs-pork|", dishId: "bs-pork", qty: 1, opts: "" },
        { key: "bs-veg|", dishId: "bs-veg", qty: 1, opts: "" }
      ]);
    } else if (storeId === "kuaizhai") {
      setCart(storeId, [
        { key: "kz-pork|", dishId: "kz-pork", qty: 1, opts: "" }
      ]);
    }
  }

  function bindOrder(storeId) {
    seedIfEmpty(storeId);
    drawCartUi(storeId);
    document.querySelectorAll("[data-add]").forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        var id = btn.getAttribute("data-add");
        var d = findDish(STORES[storeId], id);
        if (d && d.spec) openSheet(storeId, id);
        else addItem(storeId, id, 1, "");
      });
    });
    document.querySelectorAll("[data-spec]").forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        openSheet(storeId, btn.getAttribute("data-spec"));
      });
    });
    var mask = document.getElementById("sheet-mask");
    if (mask) {
      mask.addEventListener("click", function (e) {
        if (e.target === mask) mask.classList.remove("open");
      });
      var close = mask.querySelector("[data-sheet-close]");
      if (close) close.addEventListener("click", function () { mask.classList.remove("open"); });
      mask.querySelectorAll("[data-sheet-delta]").forEach(function (b) {
        b.addEventListener("click", function () {
          var q = sheetQty() + parseInt(b.getAttribute("data-sheet-delta"), 10);
          if (q < 1) q = 1;
          mask.querySelector("[data-sheet-qty]").textContent = String(q);
          updateSheetTotal(storeId);
        });
      });
      mask.querySelectorAll("[data-extra], [name=spice]").forEach(function (n) {
        n.addEventListener("change", function () { updateSheetTotal(storeId); });
      });
      var add = mask.querySelector("[data-sheet-add]");
      if (add) add.addEventListener("click", function () {
        var spice = (mask.querySelector("[name=spice]:checked") || {}).value || "";
        var extras = [];
        mask.querySelectorAll("[data-extra]:checked").forEach(function (n) { extras.push(n.getAttribute("data-label")); });
        var opts = [spice].concat(extras).filter(Boolean).join(" · ");
        addItem(storeId, mask.getAttribute("data-dish"), sheetQty(), opts);
        mask.classList.remove("open");
      });
    }
    document.addEventListener("click", function (e) {
      var b = e.target.closest("[data-qty]");
      if (!b) return;
      var key = b.getAttribute("data-qty");
      var delta = parseInt(b.getAttribute("data-delta"), 10);
      var items = getCart(storeId);
      for (var i = 0; i < items.length; i++) {
        if (items[i].key === key) {
          setQty(storeId, key, items[i].qty + delta);
          break;
        }
      }
    });
    var submit = document.querySelector("[data-cart-cta]");
    if (submit) submit.addEventListener("click", function () {
      var t = cartTotals(storeId);
      if (!t.count) return;
      localStorage.setItem("mm-unified-last-order", JSON.stringify({
        storeId: storeId, payable: t.payable, count: t.count, at: Date.now()
      }));
      setCart(storeId, []);
      toast("訂單已送出（預覽）");
      setTimeout(function () { location.href = "mine.html#orders"; }, 700);
    });
  }

  function dishRowHtml(d, large) {
    if (large) {
      return (
        '<article class="dish-card" id="dish-' + d.id + '">' +
          '<div class="hero">' +
            '<img alt="' + d.name + '" src="' + d.img + '" />' +
            (d.badge ? '<span class="badge-corner">' + d.badge + "</span>" : "") +
            (d.spec
              ? '<button class="add" type="button" data-spec="' + d.id + '" aria-label="選規格">+</button>'
              : '<button class="add" type="button" data-add="' + d.id + '" aria-label="加入">+</button>') +
          "</div>" +
          '<div class="body">' +
            "<h3>" + d.name + "</h3>" +
            '<p class="desc">' + d.desc + "</p>" +
            '<div class="dish-foot">' +
              '<div class="price-block"><span class="cur">MOP</span> <span class="now tabular">' + mop(d.price) + "</span></div>" +
              (d.spec ? '<button class="spec-pill" type="button" data-spec="' + d.id + '">選規格</button>' : "") +
            "</div>" +
          "</div>" +
        "</article>"
      );
    }
    return (
      '<article class="dish-row" id="dish-' + d.id + '">' +
        '<div class="dish-thumb">' +
          '<img alt="' + d.name + '" src="' + d.img + '" />' +
          (d.badge ? '<span class="badge-corner">' + d.badge + "</span>" : "") +
        "</div>" +
        '<div class="dish-body">' +
          "<h3>" + d.name + "</h3>" +
          '<p class="desc">' + d.desc + "</p>" +
          '<div class="dish-foot">' +
            '<div class="price-block"><span class="cur">MOP</span> <span class="now tabular">' + mop(d.price) + "</span></div>" +
            (d.spec
              ? '<button class="spec-pill" type="button" data-spec="' + d.id + '">選規格</button>'
              : '<button class="add-btn" type="button" data-add="' + d.id + '" aria-label="加入">+</button>') +
          "</div>" +
        "</div>" +
      "</article>"
    );
  }

  function renderMenu(storeId, large) {
    var store = STORES[storeId];
    var pane = document.querySelector("[data-menu-pane]");
    var rail = document.querySelector("[data-cat-rail]");
    if (!pane || !store) return;
    var view = large ? "order-" + storeId + "-large.html" : "order-" + storeId + ".html";
    var other = large ? "order-" + storeId + ".html" : "order-" + storeId + "-large.html";
    if (rail) {
      rail.innerHTML = store.cats.map(function (c, i) {
        return '<a href="#cat-' + c.id + '" class="' + (i === 0 ? "is-active" : "") + '"><span class="emoji">' + c.emoji + "</span>" + c.id + "</a>";
      }).join("");
    }
    var html = "";
    store.cats.forEach(function (c, idx) {
      html +=
        '<div class="sec-head" id="cat-' + c.id + '">' +
          "<h2>" + c.emoji + " " + c.id + "</h2>" +
          (idx === 0
            ? '<div class="view-toggle"><a href="' + view + '" class="is-active">' + (large ? "大圖" : "小圖") + '</a><a href="' + other + '">' + (large ? "小圖" : "大圖") + "</a></div>"
            : "") +
        "</div>";
      store.dishes.filter(function (d) { return d.cat === c.id; }).forEach(function (d) {
        html += dishRowHtml(d, large);
      });
    });
    pane.innerHTML = html;
    bindOrder(storeId);
    if (rail) {
      rail.querySelectorAll("a").forEach(function (a) {
        a.addEventListener("click", function () {
          rail.querySelectorAll("a").forEach(function (x) { x.classList.remove("is-active"); });
          a.classList.add("is-active");
        });
      });
    }
  }

  function svg(path) {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">' + path + "</svg>";
  }

  function injectNav(active) {
    var host = document.querySelector("[data-nav]");
    if (!host) return;
    var items = [
      { id: "home", href: "index.html", label: "今日", icon: svg('<path d="M4 11l8-7 8 7v8a1 1 0 01-1 1h-5v-5H10v5H5a1 1 0 01-1-1v-8z"/>') },
      { id: "explore", href: "explore.html", label: "逛店", icon: svg('<circle cx="12" cy="12" r="8"/><path d="M12 8v4l2 2"/>') },
      { id: "member", href: "member.html", label: "出示", pay: true, icon: svg('<rect x="5" y="5" width="14" height="14" rx="2"/>') },
      { id: "benefits", href: "benefits.html", label: "權益", icon: svg('<path d="M4 9a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 100 4v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2a2 2 0 100-4V9z"/>') },
      { id: "mine", href: "mine.html", label: "我的", icon: svg('<circle cx="12" cy="8" r="3.5"/><path d="M5 19c1.5-3 4-4.5 7-4.5s5.5 1.5 7 4.5"/>') }
    ];
    host.innerHTML = items.map(function (it) {
      if (it.pay) return '<a class="nav-pay" href="' + it.href + '" aria-label="出示會員碼">' + it.icon + "</a>";
      return '<a class="nav-item' + (it.id === active ? " active" : "") + '" href="' + it.href + '">' + it.icon + it.label + "</a>";
    }).join("");
  }

  window.MM = {
    STORES: STORES,
    mop: mop,
    getCart: getCart,
    addItem: addItem,
    cartTotals: cartTotals,
    applyPromo: applyPromo,
    tierLabel: tierLabel,
    renderMenu: renderMenu,
    bindOrder: bindOrder,
    injectNav: injectNav,
    toast: toast,
    openSheet: openSheet
  };

  document.addEventListener("DOMContentLoaded", function () {
    var nav = document.body.getAttribute("data-nav-active");
    if (nav) injectNav(nav);
    var storeId = document.body.getAttribute("data-store");
    var view = document.body.getAttribute("data-view");
    if (storeId && view === "menu") renderMenu(storeId, false);
    if (storeId && view === "menu-large") renderMenu(storeId, true);
    if (storeId && (view === "cart" || view === "store")) bindOrder(storeId);
    document.querySelectorAll("[data-fav]").forEach(function (b) {
      b.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        b.classList.toggle("on");
        b.textContent = b.classList.contains("on") ? "♥" : "♡";
      });
    });
  });
})();
