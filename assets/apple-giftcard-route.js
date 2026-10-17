(() => {
  const appRoot = document.querySelector("#app");
  if (!appRoot) return;

  const style = document.createElement("style");
  style.textContent = [
    ".creator-credit { margin: .55rem 0 0; color: #52627b; font-size: .95rem; line-height: 1.6; }",
    ".creator-credit a, .apple-route-links a { color: #3156c8; font-weight: 700; text-decoration: underline; text-underline-offset: .15em; }",
    ".apple-giftcard-route { margin: 1rem 0 1.25rem; padding: 1rem 1.1rem; border: 1px solid #c9d6ff; border-radius: 16px; background: #f6f8ff; }",
    ".apple-giftcard-route .apple-route-intro { margin: .55rem 0; color: #44546b; line-height: 1.7; }",
    ".apple-giftcard-route .apple-route-note { margin-top: .9rem; padding: .8rem 1rem; border-left: 4px solid #e6a23c; border-radius: 8px; background: #fff8e8; line-height: 1.7; }",
    ".apple-giftcard-route .apple-route-links { margin: .8rem 0 0; font-size: .9rem; line-height: 1.7; }",
    ".apple-mumu-route-heading { margin: 1rem 0 .6rem; padding: .8rem 1rem; border: 1px solid #fed7aa; border-radius: 12px; background: #fff7ed; color: #9a3412; line-height: 1.6; }",
    ".apple-mumu-route-heading strong { display: block; margin-bottom: .2rem; }"
  ].join("\n");
  document.head.append(style);

  const makeElement = (tag, className, text) => {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text) element.textContent = text;
    return element;
  };

  const appendLink = (parent, label, href) => {
    const link = makeElement("a", "", label);
    link.href = href;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    parent.append(link);
  };

  const addEnhancements = () => {
    const hero = document.querySelector(".hero-card .hero-titles");
    if (hero && !hero.querySelector(".creator-credit")) {
      const credit = makeElement("p", "creator-credit");
      credit.append(document.createTextNode("Created by Flyer2333 · 觉得教程有帮助？欢迎在 GitHub "));
      appendLink(credit, "给项目点个 Star ⭐", "https://github.com/Flyer2333/codex-tutorial");
      hero.append(credit);
    }

    const group = Array.from(document.querySelectorAll(".block-group")).find((section) => {
      const title = section.querySelector(".block-title")?.textContent ?? "";
      return title.includes("6-4 苹果与鸿蒙用户走这里") || section.querySelector(".apple-giftcard-route");
    });
    if (!group) return;

    group.querySelector(":scope > .shared-badge")?.remove();

    const title = group.querySelector(".block-title");
    if (title && title.textContent !== "6-4 苹果与鸿蒙用户：iPhone 两种订阅方式任选，鸿蒙走 MuMu") title.textContent = "6-4 苹果与鸿蒙用户：iPhone 两种订阅方式任选，鸿蒙走 MuMu";

    const intro = group.querySelector(":scope > .group-intro");
    if (intro) {
      const updatedIntro = "iPhone 用户可以先看上方方式 A，符合条件时步骤更少；如果没有可用的外区 Apple ID、Plus 内购未开放，或 Apple 账户余额不能支付该订阅，就选方式 B。鸿蒙用户直接走方式 B。";
      if (intro.textContent !== updatedIntro) intro.textContent = updatedIntro;
    }

    let route = group.querySelector(":scope > .apple-giftcard-route");
    if (!route) {
      route = makeElement("section", "subgroup apple-giftcard-route");

      const routeTitle = makeElement("h5", "subgroup-title");
      routeTitle.append(makeElement("span", "subgroup-no", "🍎"));
      routeTitle.append(document.createTextNode(" iPhone 方式 A：外区 Apple ID + Apple 礼品卡订阅 Plus"));
      route.append(routeTitle);
      route.append(makeElement("div", "group-device", "📱 手机上操作"));
      route.append(makeElement("p", "apple-route-intro", "如果你已有符合条件的外区 Apple ID，这条路线可省去 MuMu 模拟器和 Google Play 的配置步骤。先确认 App Store 能下载 OpenAI 官方 ChatGPT App，且 App 内已经开放 Plus 内购。"));

      const steps = makeElement("ol", "action-list");
      [
        "准备一个外区 Apple ID，确认其 App Store 商店地区可下载 OpenAI 官方 ChatGPT App，并且 App 内显示 Plus 升级入口。登录准备订阅 Plus 的 ChatGPT 账号。",
        "购买与该 Apple ID 商店国家或地区相同的 Apple Gift Card。礼品卡有地区限制，不能在购买地区以外兑换。",
        "在 App Store 兑换礼品卡，将金额加入 Apple 账户余额。Apple 说明余额可用于 App Store 订阅，但部分订阅不支持余额，有些购买还要求账户保留其他付款方式。",
        "打开 ChatGPT App，点 Plus 升级。先核对套餐、价格和续费周期；只有 Apple 付款页接受账户余额且金额符合预期时，再确认订阅。",
        "订阅后，在 iPhone 的 Apple 账户订阅管理中确认 ChatGPT 已订阅。确认 ChatGPT App 登录的是你要使用的账号，并检查是否已有网页或 Google Play 订阅，避免重复扣费。"
      ].forEach((text) => steps.append(makeElement("li", "", text)));
      route.append(steps);

      const note = makeElement("div", "apple-route-note");
      note.append(makeElement("strong", "", "地区与付款提醒："));
      note.append(document.createTextNode("外区 Apple ID 只决定 App Store 商店地区，不会改变 OpenAI 对 ChatGPT 服务使用地区的限制。OpenAI 当前支持地区列表未列出中国大陆，并提示在未支持地区访问可能导致账号被封锁或暂停；请先核对官方支持地区。礼品卡余额能否支付 ChatGPT 订阅，以 Apple 付款页实际显示为准。"));
      route.append(note);

      const links = makeElement("p", "apple-route-links", "官方说明：");
      [
        ["ChatGPT iOS 内购", "https://help.openai.com/en/articles/7905739-chatgpt-ios-app-upgrading-to-a-paid-subscription"],
        ["ChatGPT 支持地区", "https://help.openai.com/en/articles/7947663-chatgpt-supported-countries"],
        ["Apple 礼品卡地区限制", "https://support.apple.com/en-us/108285"],
        ["Apple 账户余额用途", "https://support.apple.com/en-nz/118245"]
      ].forEach(([label, href], index) => {
        if (index) links.append(document.createTextNode(" · "));
        appendLink(links, label, href);
      });
      route.append(links);

      const anchor = intro ?? group.querySelector(":scope > .group-device") ?? title;
      if (anchor) anchor.insertAdjacentElement("afterend", route);
      else group.prepend(route);
    }

    if (!group.querySelector(":scope > .apple-mumu-route-heading")) {
      const mumuHeading = makeElement("div", "apple-mumu-route-heading");
      mumuHeading.append(makeElement("strong", "", "方式 B：用 MuMu 模拟器 + Google Play 订阅 Plus"));
      mumuHeading.append(document.createTextNode("适用于 iPhone 无法使用方式 A 的情况；鸿蒙用户也走这条路线。下面保留原有步骤和配图。"));
      route.insertAdjacentElement("afterend", mumuHeading);
    }
  };

  const observer = new MutationObserver(addEnhancements);
  observer.observe(appRoot, { childList: true, subtree: true });
  addEnhancements();
})();
