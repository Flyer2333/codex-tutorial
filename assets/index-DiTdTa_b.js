(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function o(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=o(s);fetch(s.href,i)}})();const D=[{key:"android",label:"Android 安卓",short:"安卓",emoji:"🤖",hint:"小米 / OPPO / vivo / 荣耀等"},{key:"ios",label:"iPhone 苹果",short:"苹果",emoji:"🍎",hint:"iPhone / iPad"},{key:"harmony",label:"HarmonyOS 鸿蒙",short:"鸿蒙",emoji:"📕",hint:"华为手机、鸿蒙系统"}],W={phone:{icon:"📱",label:"手机上操作"},pc:{icon:"💻",label:"电脑上操作"},"phone-to-pc":{icon:"🔁",label:"从手机切到电脑"},"pc-to-phone":{icon:"🔁",label:"从电脑切回手机"},both:{icon:"📱💻",label:"手机和电脑都要做"}},a={flclashImport:"assets/img/flclash-import-card.jpg",flclashEnable:"assets/img/flclash-enable-proxy.jpg",flclashDownloadOs:"assets/img/flclash-download-os.jpg",gmailIcon:"assets/img/gmail-icon.jpg",gmailPickGoogle:"assets/img/gmail-pick-google.jpg",gmailSignin:"assets/img/gmail-signin.jpg",googleName:"assets/img/google-name.jpg",googleBirthday:"assets/img/google-birthday.jpg",googleCreateGmail:"assets/img/google-create-gmail.jpg",googlePassword:"assets/img/google-password.jpg",googleVerifyPhone:"assets/img/google-verify-phone.jpg",googleSmsCode:"assets/img/google-sms-code.jpg",googleSkipRecovery:"assets/img/google-skip-recovery-email.jpg",googleAccountCreated:"assets/img/google-account-created.jpg",googleAgree:"assets/img/google-agree.jpg",googleAddPhone:"assets/img/google-add-phone.jpg",googleVerifyIdentity:"assets/img/google-verify-identity.jpg",googleRecaptcha:"assets/img/google-recaptcha.jpg",googleSendCode:"assets/img/google-send-code.jpg",googleAccountHome:"assets/img/google-account-home.jpg",googleSecurityLogin:"assets/img/google-security-login.jpg",bocCard:"assets/img/boc-bilibili-card-poster.jpg",cmbCard:"assets/img/cmb-mastercard-card.jpg",googleAppealApproved:"assets/img/google-appeal-approved.jpg",mumuTools:"assets/img/mumu-tools-google-installer.jpg",mumuDesktop:"assets/img/mumu-desktop-apps.jpg",payStepsGraphic:"assets/img/pay-steps-graphic.jpg",payBankPermissionBig:"assets/img/pay-bank-permission-big.jpg",payRegionAddCardBig:"assets/img/pay-region-addcard-big.jpg",paySubscribeConfirm:"assets/img/pay-subscribe-confirm.jpg",payAddCardForm:"assets/img/pay-add-card-form.jpg",payMapsAddress:"assets/img/pay-maps-address.jpg",payAccountRegion:"assets/img/pay-account-region.jpg"},V={chatgpt:"https://chatgpt.com/",chatgptDownload:"https://chatgpt.com/download/",codexInChatgpt:"https://chatgpt.com/zh-Hans-CN/codex/",googleAccount:"https://accounts.google.com/",googlePlay:"https://play.google.com/store",gmail:"https://mail.google.com/",flclashReleases:"https://github.com/chen08209/FlClash/releases",flclashRepo:"https://github.com/chen08209/FlClash",mumuDownload:"https://mumu.163.com/download/",edgeDownload:"https://www.microsoft.com/edge",bilibiliCard:"https://www.bilibili.com/video/BV11pw4zuEAK/",xiaohongshuPlus:"https://www.xiaohongshu.com/discovery/item/6a83d4dc0000000022030256?source=webshare&xhsshare=pc_web&xsec_token=ABpWXojCHu1boX1tX0TwG12rIEkCY0O2YrNhysJsDgaKs=&xsec_source=pc_share",xiaohongshuSearch:"https://www.xiaohongshu.com/search_result?keyword=Codex%20Plus%20%E6%97%A5%E5%8C%BA",cmbHome:"https://www.cmbchina.com/",bocHome:"https://www.boc.cn/"},Y={subscriptionUrl:"",contact:"作者本人"},L={hint:"订阅地址会变化，直接找作者拿最新版 👀",hasUrl:!!Y.subscriptionUrl,url:Y.subscriptionUrl},C={title:"从零开始用上 Codex 🚀",subtitle:"国内新手照着点就能通关：选系统 → 按顺序操作 → 订阅 Plus → 登录 Codex",purposes:["一份“照着点就行”的通关教程，不是技术百科 📖","七步主线出自作者在国内的真机实测，路线已经帮你筛好了，不用自己研究 🔍","遇到问题先别慌，每一步底下都藏着“卡住了再看” 🆘"],totalSteps:7,estimatedTime:"约 3～5 小时（可以分几天慢慢做）",prepItems:[{icon:"💻",text:"一台 Windows 电脑",note:"装网络工具、订阅 Plus、装 Codex 都靠它"},{icon:"📱",text:"一台手机",note:"安卓 / 苹果 / 鸿蒙都行，注册那几步在手机上做"},{icon:"🌐",text:"一个能用的网络工具",note:"手机和电脑都要有，节点得干净"},{icon:"🧭",text:"Edge 浏览器",note:"手机电脑都装一个，后面全在 Edge 里点"},{icon:"📧",text:"一个 Google 账号",note:"第 4 步在手机上注册，第 5 步在电脑上拿它登录 ChatGPT"},{icon:"💳",text:"一张万事达借记卡",note:"招行万事达普卡 / 中行 B 站联名卡，卡里留 150 元左右"}],costNote:"ChatGPT Plus 每月 20 美元，用卡里余额扣。建议卡里留 150 元**左右** —— 这是**预留的余额**，不是一次订阅就要扣这么多：实际按当时汇率折算（日区按日元结算，通常还更便宜），多留一点是为了扛住汇率波动 💱"},ue=["先把你手机上的网络工具**关掉**（这一步很重要，不关会出现下载按钮点不动）。","打开「出境易」App，在搜索框里搜 `Gmail`，进到 Gmail 的页面。","停在页面上**等一会儿**，直到页面出现「下载」按钮。","这时候再把手机上的网络工具**打开**，等它连上。","返回出境易刚才那个 Gmail 页面，点「下载」。","如果一次没成功，别急，等十几秒再点一次「下载」，一般就下来了。"],me="整段的顺序是：关网络工具 → 找到 Gmail → 看到下载按钮 → 开网络工具 → 回页面 → 点下载。顺序别颠倒，颠倒了就点不动 ⚠️",_=["先准备一个能用的网络工具（俗称梯子 / VPN / 机场）。这块每个人路子都不一样，教程不指定具体哪家 —— 要求只有一条：**节点要干净** ✨","怎么算“干净”：能稳定打开 Google、ChatGPT，不老是弹人机验证。用一阵子都正常的，就是干净的 👍","拿到之后先把它装到电脑上，打开、连上一个节点。","接下来用它自带的「订阅 / 导入配置」功能，把服务商给你的订阅链接粘进去（各家客户端叫法不太一样，找「添加配置」「导入订阅」这类字眼就行）。","最后把代理打开（有的客户端叫「启动」「连接」）。"],he={kind:"cards",cards:[{name:"招商银行万事达普卡",emoji:"🏦",look:"官方 App 里的名字是「万事达人民币 IC 借记卡（普卡）」，蓝色渐变卡面，右下角只有万事达双圆标（单标卡）。",available:"可以办理。招商银行 App →「申请储蓄卡」里能找到这张卡，点「立即申请」；线上提交、线下网点领卡。学生也能办，开二类户即可。",channel:"线上：招商银行 App 里申请；也可直接去网点咨询。",need:["本人身份证","本人实名手机号（能收短信）","年龄以网点要求为准（线上申请需 18+）"],flow:["打开招商银行 App，进「申请储蓄卡」，选「万事达人民币 IC 借记卡（普卡）」，选一个方便去的领卡网点。","等 App 里显示「待领卡」后，约个时间去网点，带身份证取卡。","如果没有现卡，常见做法是先开一张银联二类卡，再换成万事达卡（换卡后卡号会变）。","拿到卡在 App 里激活，全程大概半小时。"],topup:"直接存人民币就行，**不用自己购汇** —— 境外消费按万事达的实时汇率折算成人民币入账。用招行 App 转账、或从同名一类卡转入都可以。二类户非柜面限额是每天 1 万元 / 每年 20 万元，订个 Plus 完全够用。",permissions:["最关键的一步：招商银行 App →「我的」→「银行卡」→「快捷支付」→ 打开「万事达卡跨境线上支付」。十个绑卡失败里有九个是这里没开。","确认卡里有足够的人民币余额，别只存刚好 20 美元的钱，多留 20%～30% 缓冲。","确认卡片支持 3DS 验证（这张卡支持，这是能绑上 Google Play 的关键）。","检查有没有「交易安全锁 / 境外锁」把线上支付锁住了，有就关掉。","绑卡时填卡号 + 有效期 + CVV（卡背面 3 位）。**不要把 CVV 截图发给任何“代充”**。"],fee:"年费、小额账户管理费、货币转换费都是 0；境外消费还有 0.5% 返现。个别用户反馈办卡收过 5 元工本费。",cardImage:a.cmbCard,cardImageCaption:"卡面长这样 👆 蓝色渐变 + 白色葵花／地球线稿，右下角是万事达双圆标（单标卡，没有银联标）。点一下可以放大看。",tags:["【作者实测】可绑定到 Google 支付方式","【银行官方信息】卡名与申请入口来自招行 App","【用户经验】权限开关路径"],source:"招商银行官网 https://www.cmbchina.com/ ＋ 作者实测 ＋ 卡圈用户实测",checked:"2026-09-15"},{name:"中国银行哔哩哔哩 2233 联名借记卡（万事达版）",emoji:"🎴",look:"官方产品名「哔哩哔哩 2233 联名借记 IC 卡（万事达版）」，卡号前 6 位是 223300，卡面是 B 站 22 娘 / 33 娘国风设计。注意还有一张同卡面的**银联版**，两张别搞混。",available:"⚠️ **这张卡是 9 月 22 号才开启网申的** —— 如果你特别想要它，一定要等到 9 月 22 号之后再办，早去也申请不了。具体以中国银行 App 内实际页面为准。",channel:"线上网申（需年满 18 岁），入口在 9 月 22 号开放；之后也可能需要去网点。",need:["本人身份证","中国银行手机银行","若走线下，记下产品名和产品编号 500000249，柜员不熟时报给 Ta"],flow:["**等到 9 月 22 号网申开放之后再动手**","线上填资料提交（网申入口开放后才有）","审核通过后收卡并激活","在手机银行里绑定并充值"],topup:"用中国银行手机银行转入人民币即可，中行 ATM 也能存。",permissions:["先在中国银行手机银行的卡片设置里找「境外线上支付 / 跨境交易」并打开。","确认「无卡支付」是开启状态。","把境外交易限额调到够用（至少 ≥ 150 元人民币等值）。"],fee:"以中国银行 App 内展示为准。",note:"这张卡已经验证过可以绑定到 Google Play 支付。",cardImage:a.bocCard,cardImageCaption:"卡面长这样 👆 中国银行 × bilibili 联名，卡号前 6 位是 223300，22 娘／33 娘国风卡面。注意还有一张同卡面的**银联版**，办的时候认准「万事达版」。",tags:["【已实测】可绑定到 Google Play 支付","【作者实测】可绑定到 Google 支付方式"],source:"中国银行官网 https://www.boc.cn/ ＋ 作者提供的海报截图 ＋ 实测验证",checked:"2026-09-15"}],note:"两张卡都验证过可以绑进 Google 支付方式，办一张就够，按你方便办哪张来选。"},E={steps:[{id:"step1",no:1,title:"在电脑上准备合适的网络工具",goal:"让电脑能稳稳连上外网 —— 后面所有操作都指望它 🔌",why:["梯子和谷歌账号，可以说是上外网的两大基本工具 🧰","“合适”的意思就是**节点要干净** —— 节点不干净，OpenAI 一眼就看出来，账号直接给你封了 😵"],device:"pc",blocks:[{kind:"tabs",title:"先选你手机的系统",intro:"先选一下你的手机系统，后面只给你看对应步骤，不绕弯路 📱",picker:!0},{kind:"actions",title:"跟着点",generalOnly:!0,os:{android:_,ios:_,harmony:_}}],success:["电脑上的代理已经连上，客户端的连接按钮变成绿色、开始走时间 🟢","用它查看「网络检测 / 出口 IP」，已经换成境外地址（比如 `104.21.45.123`），不再是 `222.212.5.212` 这种国内地址 🌍","用电脑浏览器打开 `https://www.google.com`，能正常打开 ✅"],checks:[{id:"s1-pc-download",text:"💻 电脑上装好了网络工具"},{id:"s1-pc-subscribe",text:"订阅链接导入成功，节点列表有内容"},{id:"s1-pc-running",text:"代理已启动，出口 IP 已变成境外地址"}],stuck:[{q:"导入订阅失败 / 提示地址不对",a:"先看订阅链接有没有复制完整（别漏掉开头结尾的字符），再检查电脑的系统时间准不准 —— 时间不对会让这类导入直接失败 ⏰"},{q:"更新完一个节点都没有",a:"在订阅那一项右上角手动点一次更新，然后把客户端重启一下。"},{q:"打开了代理却上不了网",a:"换个节点试试；顺便看看客户端的模式是不是选在「规则」上。"},{q:"延迟显示 5000 ms",a:"这一般是测速超时，不代表节点不能用 —— 直接打开网页试试就知道。"},{q:"IPv6 节点用不了",a:"确认本地网络和客户端都开了 IPv6；本地网络没有 IPv6 的话，换个 IPv4 节点。"},{q:"页面和截图不完全一样",a:"各家客户端界面都不同，软件自己也会更新，按钮位置挪动很正常。认关键词就行：配置 / 添加配置 / 订阅 / 启动 😉"}]},{id:"step2",no:2,title:"在手机上准备好网络工具",goal:"让手机也能上外网 —— 注册 Google 账号那几步在手机上做 📱",why:["手机上的网络工具和电脑上是两码事，一个能用不代表另一个也能用 🤷","注册 Google 账号、下 Gmail，都必须在能上外网的手机上搞定。"],device:"phone",blocks:[{kind:"steps-group",title:"跟着点",device:"phone",items:["📱 打开手机上的网络工具，连上一个节点。","打开手机浏览器（Edge 也行），访问 `https://www.google.com`。","能正常打开 Google 首页，手机这端就算通了 ✅","打不开就换个节点再试，直到 Google 能打开为止。"]},{kind:"callout",tone:"info",title:"手机网络工具只要求“能用”",text:"连上之后拿浏览器打开 `https://www.google.com`，能打开就够用了 —— 这一步不用折腾得太讲究 🙂"}],success:["手机能打开 Google 首页，手机这端就准备妥了 🎉"],checks:[{id:"s2-phone-vpn",text:"手机上的网络工具能连上，Google 能打开"}],stuck:[{q:"手机上没有网络工具，也不知道去哪弄",a:"这块每台手机差别太大，教程不好硬性规定：先在自己手机上翻翻有没有装过类似的 App（名字里常带 VPN、加速、Clash、v2ray 这些字样），能用就行。实在没有，可以先用手机浏览器搜「手机 代理 客户端」，或者直接问作者 🙋"},{q:"连上了但 Google 还是打不开",a:"换个节点，或者把 App 里的“全局 / 规则”模式切一下再试。"}]},{id:"step3",no:3,title:"在手机和电脑上准备 Edge 浏览器",goal:"手机电脑都装上 Edge —— 后面的注册、订阅全在 Edge 里点 🧭",why:["Edge 手机电脑都有，用同一个浏览器，能少一半“这按钮到底在哪”的抓狂 😵","它还自带翻译，碰到英文页面直接给你翻成中文。"],device:"both",blocks:[{kind:"actions",title:"跟着点",os:{android:["📱 手机上打开应用商店，搜 `Edge` 或 `Microsoft Edge`，装上。","💻 电脑上打开自带浏览器，访问 `https://www.microsoft.com/edge`，下载安装。","💻 第一次打开 Edge 会问要不要登录账号，先点「跳过」或「以后再说」就行。"],ios:["📱 手机上打开 App Store，搜 `Edge` 或 `Microsoft Edge`，装上。","💻 电脑上打开自带浏览器，访问 `https://www.microsoft.com/edge`，下载安装。","💻 第一次打开 Edge 会问要不要登录账号，先点「跳过」或「以后再说」就行。"],harmony:["📱 手机上打开华为应用市场，搜 `Edge` 或 `Microsoft Edge`，装上。搜不到也别卡住，用手机自带浏览器一样能往下走 🙂","💻 电脑上打开自带浏览器，访问 `https://www.microsoft.com/edge`，下载安装。","💻 第一次打开 Edge 会问要不要登录账号，先点「跳过」或「以后再说」就行。"]}},{kind:"callout",tone:"tip",title:"没有微软账号也照样用",text:"Word 原文里提到“没有的下载后可以用 163 邮箱注册”。其实不注册也完全能用 Edge —— 后面要登录的地方，用的都是你的 Google 账号 🙂"}],success:["手机和电脑上都能看到 Edge 图标，点开是个正常的浏览器窗口 ✅"],checks:[{id:"s3-phone-edge",text:"📱 手机装好了 Edge"},{id:"s3-pc-edge",text:"💻 电脑装好了 Edge"}],stuck:[{q:"鸿蒙手机在应用市场里搜不到 Edge",a:"不用纠结，用手机自带浏览器继续后面的步骤就行，功能和 Edge 一样够用。"},{q:"电脑上装完 Edge 打不开",a:"重启电脑再试；如果还是不行，先把 Windows 更新装好。"}]},{id:"step4",no:4,title:"注册 Google 账号（全教程最难的一步 😤）",goal:"注册一个能长期用的 Google 账号 —— 拿它登录 ChatGPT、绑支付方式 💳",why:["谷歌账号在国外基本等于国内的手机号，注册什么外国应用都靠它（YouTube、Ins、X……）🌍","在咱们这个教程里，它主要用来登录 ChatGPT 和绑支付方式。","注册在手机上做（就是下面这几段），之后在电脑上拿它登录 ChatGPT —— 账号密码两边通用 🙂"],device:"phone",blocks:[{kind:"steps-group",title:"第一部分：先把 Gmail 装上 📥",os:{android:[{text:"先在手机上把 Google 运行环境弄好（就是常说的“谷歌三件套”），让手机能正常打开 Google 的服务。各家安卓机的做法都不太一样，能用就行 🙂",img:null},{text:"用手机浏览器访问 `https://play.google.com/store/apps/details?id=com.google.android.gm`，或者直接在能用的应用商店里搜 `Gmail`，装上。",img:a.gmailIcon},{text:"如果你手机上装的是自带国外应用商店的工具（比如出境易这类），直接在它里面搜 Gmail 装也行。装 Gmail 的路子不止一条，装上了就往下走 ✅",img:null}],ios:[{text:"⚠️ 先看这条：Gmail 在**中国大陆区的 App Store 里是搜不到的**，必须换成非大陆地区的 Apple ID 才能下。这是苹果的区域限制，不是你手机的问题 🙃",img:null,strong:!0},{text:"方案 A（最省事）：在 App Store 里退出当前的 Apple ID，登录一个**非大陆地区**（美区 / 日区 / 港区都行）的 Apple ID，然后再搜 Gmail。",img:null},{text:"方案 B：把你现在这个 Apple ID 的地区改到非大陆地区。路径是「设置 → 顶上你的名字 → 媒体与购买项目 → 查看账户 → 国家/地区」。改之前得把账户余额花完、订阅取消掉，还要填一个该地区的地址和付款方式。",img:null},{text:"💡 只用一次的话，方案 A 简单得多：找朋友借一个、或者自己注册一个外区 Apple ID，下完 Gmail 就能切回原来的账号，**已经装好的 App 不会被删掉** 👌",img:null},{text:"切到外区之后，在 App Store 搜 `Gmail`，认准那个彩色 M 的图标，点「获取」下载安装。",img:a.gmailIcon},{text:"装完先别急着打开，回桌面确认能看到 Gmail 图标。",img:null}],harmony:[{text:"⚠️ 鸿蒙这一段顺序很关键，就按下面 6 小步走，一步都别跳。",img:null,strong:!0},...ue.map(e=>({text:e,img:null})),{text:me,img:null,strong:!0},{text:"下完之后回桌面，确认能看到 Gmail 图标。",img:a.gmailIcon}]}},{kind:"steps-group",title:"第二部分：创建账号、起一个 Gmail 地址 ✍️",os:{android:[{text:"打开 Gmail。",img:null},{text:"点 `Google`（在邮件服务列表里，认准那个彩色的 G）。",img:a.gmailPickGoogle},{text:"点左下角的「创建账号」。",img:a.gmailSignin},{text:"选「个人用途」。",img:null},{text:"填姓名。随便填，真名也行别的也行，不用纠结 🙂",img:a.googleName},{text:"填基本信息（生日和性别）。**年龄往大了填，超过 20 岁**。",img:a.googleBirthday},{text:"这一步建议点「创建您自己的 Gmail 邮箱」，然后起一个自己想要的、打算长期用的邮箱名（字母 + 数字组合更容易过）。",img:a.googleCreateGmail},{text:"设密码。字母 + 数字 + 符号混着来，记在安全的地方 🔐",img:a.googlePassword}],ios:[{text:"打开 Gmail。",img:null},{text:"点 `Google`（在邮件服务列表里，认准那个彩色的 G）。苹果和安卓这一屏长得一样 🙂",img:a.gmailPickGoogle},{text:"点左下角的「创建账号」。iPhone 上按钮也在左下角，就是屏幕比例不一样。",img:a.gmailSignin},{text:"选「个人用途」。",img:null},{text:"填姓名。随便填，真名也行别的也行，不用纠结 🙂",img:a.googleName},{text:"填基本信息（生日和性别）。**年龄往大了填，超过 20 岁**。",img:a.googleBirthday},{text:"这一步建议点「创建您自己的 Gmail 邮箱」，然后起一个自己想要的、打算长期用的邮箱名。",img:a.googleCreateGmail},{text:"设密码。字母 + 数字 + 符号混着来，记在安全的地方 🔐",img:a.googlePassword}],harmony:[{text:"打开 Gmail。",img:null},{text:"点 `Google`（在邮件服务列表里，认准那个彩色的 G）。",img:a.gmailPickGoogle},{text:"点左下角的「创建账号」。",img:a.gmailSignin},{text:"选「个人用途」。",img:null},{text:"填姓名。随便填，真名也行别的也行，不用纠结 🙂",img:a.googleName},{text:"填基本信息（生日和性别）。**年龄往大了填，超过 20 岁**。",img:a.googleBirthday},{text:"这一步建议点「创建您自己的 Gmail 邮箱」，然后起一个自己想要的、打算长期用的邮箱名。",img:a.googleCreateGmail},{text:"设密码。字母 + 数字 + 符号混着来，记在安全的地方 🔐",img:a.googlePassword}]}},{kind:"steps-group",title:"第三部分：手机号验证（国内 +86 直接用）📲",os:{android:[{text:"走到「验证您的电话号码」这一页，直接填自己的国内手机号，点「发送短信」。",img:a.googleVerifyPhone},{text:"手机会收到一条带验证码的短信。打开短信 App 把验证码填进去（截图里是把验证码原样发到指定号码，按页面要求做就行）。",img:a.googleSmsCode},{text:"走到「添加辅助邮箱」这一页，**点「跳过」**。",img:a.googleSkipRecovery},{text:"走到「查看您的账号信息」这一页，看看邮箱是不是你刚注册那个，点「下一步」。",img:a.googleAccountCreated},{text:"最后一页是隐私条款，点「我同意」。",img:a.googleAgree},{text:"中途要是蹦出「要添加电话号码吗？」这种又让你填一遍手机号的页面，**直接点「跳过」**。",img:a.googleAddPhone}],ios:[{text:"走到「验证您的电话号码」这一页，直接填自己的国内手机号，点「发送短信」。iPhone 上短信验证码会自动弹出来，点一下上面那条提示就填上了 👌",img:a.googleVerifyPhone},{text:"按页面要求把验证码发出去或填进去；走到「添加辅助邮箱」这一页就**点「跳过」**。",img:a.googleSkipRecovery},{text:"走到「查看您的账号信息」这一页，看看邮箱是不是你刚注册那个，点「下一步」。",img:a.googleAccountCreated},{text:"最后一页是隐私条款，点「我同意」。",img:a.googleAgree},{text:"中途要是蹦出「要添加电话号码吗？」这种又让你填一遍手机号的页面，**直接点「跳过」**。",img:a.googleAddPhone}],harmony:[{text:"走到「验证您的电话号码」这一页，直接填自己的国内手机号，点「发送短信」。",img:a.googleVerifyPhone},{text:"按页面要求把验证码填进去或发出去；走到「添加辅助邮箱」这一页就**点「跳过」**。",img:a.googleSkipRecovery},{text:"走到「查看您的账号信息」这一页，看看邮箱是不是你刚注册那个，点「下一步」。",img:a.googleAccountCreated},{text:"最后一页是隐私条款，点「我同意」。",img:a.googleAgree},{text:"中途要是蹦出「要添加电话号码吗？」这种又让你填一遍手机号的页面，**直接点「跳过」**。",img:a.googleAddPhone}]}},{kind:"steps-group",title:"第四部分：账号被封了？申诉一下就好 😌（大概率会遇到）",intro:"用国内 +86 手机号注册，**被封号是大概率事件**，先别慌 —— 不是你做错了什么。照下面申诉一下，一两天就能解封，而且解封之后这个账号基本就一劳永逸了，后面不用再折腾 💪",os:{android:[{text:"先确认是不是真被封了：登录时提示账号已停用，或者收到了 Google 的「账号已停用」邮件。",img:null},{text:"找到申诉入口：在提示那一页点「申诉」/「Appeal」，或者直接打开 `https://accounts.google.com/`，登录时按提示走。",img:null},{text:"申诉理由用**英文**写，大白话说清那个意思就够了（下面这段可以直接照抄）👇",img:null,strong:!0}],ios:[{text:"先确认是不是真被封了：登录时提示账号已停用，或者收到了 Google 的「账号已停用」邮件。",img:null},{text:"找到申诉入口：在提示那一页点「申诉」/「Appeal」，或者直接打开 `https://accounts.google.com/`，登录时按提示走。",img:null},{text:"申诉理由用**英文**写，大白话说清那个意思就够了（下面这段可以直接照抄）👇",img:null,strong:!0}],harmony:[{text:"先确认是不是真被封了：登录时提示账号已停用，或者收到了 Google 的「账号已停用」邮件。",img:null},{text:"找到申诉入口：在提示那一页点「申诉」/「Appeal」，或者直接打开 `https://accounts.google.com/`，登录时按提示走。",img:null},{text:"申诉理由用**英文**写，大白话说清那个意思就够了（下面这段可以直接照抄）👇",img:null,strong:!0}]},quote:"I am an American who has settled in China. Due to the restrictions of Chinese policies, I can only use a VPN to register with Google. Since I registered with a Chinese mobile phone number, I have now been banned. I request to have my account unblocked.",quoteNote:"照抄就行；懒得抄也可以让 AI 帮你写一段意思差不多的。",after:[{kind:"steps-group",device:"phone",items:["提交完等一等就好，**一般一两天就有回复**（作者反复实测过，这招非常好使 👍）。","收到标题是「Appeal approved」的邮件，就说明解封通过了，邮件里会让你**尽快登录并验证**。","照着邮件提示登录一次、走完验证，账号就活过来了 🎉","⚠️ 解封后尽快登录：Google 明说了，停用的账号最终会被删掉，别拖太久。"],figure:{src:a.googleAppealApproved,alt:"Google 申诉通过邮件：Appeal approved，提示尽快登录验证",caption:"申诉通过就长这样 👆 邮件标题是 `Appeal approved`，正文写着「your request for restored access was approved」，并催你尽快登录验证。"}},{kind:"callout",tone:"tip",title:"熬过这一遍就稳了 🎉",text:"被封一次、照这个方法解封之后，这个 Google 账号基本就一劳永逸了 —— 作者实测后面不会再反复封。所以真碰上了别放弃，申诉一下就好了 💪"}]},{kind:"steps-group",title:"第五部分（可选，但推荐）：补一个恢复手机号 📞",intro:"上面要是申诉成功了，其实**不加这一步也基本没事**；加上会更稳，也就花你两分钟 ⏱️",os:{android:[{text:"打开 Gmail App。",img:null},{text:"点左上角三条横线。",img:null},{text:"找到「设置」点进去。",img:null},{text:"选你刚注册的那个邮箱。",img:null},{text:"点「管理您的 Google 账号」。",img:a.googleAccountHome},{text:"在账号管理页点「安全性与登录」。",img:a.googleSecurityLogin},{text:"找到「辅助电话号码」，把自己的 +86 手机号填进去，按提示验证一下就完事 ✅",img:null}],ios:[{text:"打开 Gmail App。",img:null},{text:"点左上角三条横线（iPhone 上也在左上角，位置一样的）。",img:null},{text:"滑到底找到「设置」点进去。",img:null},{text:"选你刚注册的那个邮箱。",img:null},{text:"点「管理您的 Google 账号」。",img:a.googleAccountHome},{text:"在账号管理页点「安全性与登录」。",img:a.googleSecurityLogin},{text:"找到「辅助电话号码」，把自己的 +86 手机号填进去，按提示验证一下就完事 ✅",img:null}],harmony:[{text:"打开 Gmail App。",img:null},{text:"点左上角三条横线。",img:null},{text:"找到「设置」点进去。",img:null},{text:"选你刚注册的那个邮箱。",img:null},{text:"点「管理您的 Google 账号」。",img:a.googleAccountHome},{text:"在账号管理页点「安全性与登录」。",img:a.googleSecurityLogin},{text:"找到「辅助电话号码」，把自己的 +86 手机号填进去，按提示验证一下就完事 ✅",img:null}]},alt:["上面这些步骤，说穿了就是**打开你的 Google 账号管理页**。路子很多，电脑上也能干：打开 `https://accounts.google.com/` 登录进去一样操作 🙂"]}],success:["Gmail 里能看到收件箱 —— 账号注册成功 ✅","要是被停用过，按上面的方法申诉通过（收到 `Appeal approved` 邮件）并成功登录验证 👍","（可选）Google 账号管理 →「安全性与登录」里能看到你加的辅助电话号码。","这个账号现在可以登录各种外国 App 了，畅通无阻 🎉"],checks:[{id:"s4-gmail-installed",text:"手机上装好了 Gmail"},{id:"s4-account-created",text:"Google 账号注册成功，能进 Gmail 收件箱"},{id:"s4-appeal-ok",text:"（如果被封）申诉通过并成功登录验证"},{id:"s4-recovery-added",text:"（可选）在「安全性与登录」里加了辅助手机号"}],stuck:[{q:"没看到和截图一样的按钮",a:"Google 会按 A/B 测试给不同的人看不同界面，正常的。认关键词就行：创建账号 / 个人用途 / 跳过 / 我同意。"},{q:"页面加载失败或一直转圈",a:"看看网络工具还连着没；换个节点；把 Gmail 彻底关掉再重新打开。"},{q:"收不到验证码短信",a:"等 1 分钟再点一次「发送短信」；确认手机号没填错；一直收不到就换个手机号试（同一个号码短时间里别反复点）。"},{q:"要求我“验证身份”或做人机验证",a:"按页面走就行：先点「进行人机身份验证」，再让 Google 把验证码发到你手机上，点「发送」收码填进去。"},{q:"提示我的活动情况与平常略有不同",a:"这就是风控提示。照着页面把验证走完；要是反复出现，换个更干净的节点、隔一天再试。"},{q:"账号被封了怎么办",a:"直接申诉，别放弃。理由用英文写，大白话说清那个意思就行（这段可以直接照抄）👇",quote:"I am an American who has settled in China. Due to the restrictions of Chinese policies, I can only use a VPN to register with Google. Since I registered with a Chinese mobile phone number, I have now been banned. I request to have my account unblocked.",quoteNote:"一般一两天就能解封，解封之后这个号就一劳永逸了 —— 正文「第四部分」有完整说明和一个通过案例的截图。"},{q:"作者提示",a:"上面这套流程是作者用鸿蒙系统演示的。要是安卓或 iOS 照着做不成功，可以去油管（YouTube）上找别的方法，往往能找到管用的。"}],figuresStuck:[{src:a.googleVerifyIdentity,alt:"Google 要求验证身份的页面"},{src:a.googleRecaptcha,alt:"Google 人机身份验证（reCAPTCHA）页面"},{src:a.googleSendCode,alt:"Google 把验证码发送到手机号的页面"}]},{id:"step5",no:5,title:"在电脑上注册 ChatGPT 账号",goal:"拿上一步的 Google 账号，在电脑上注册并登录 ChatGPT 💬",why:["有 Google 账号在手，这一步就是点几下的事 —— 最简单的一集 😎","在电脑上做更稳：屏幕大、授权页面看得清，而且第 6 步订阅、第 7 步装 Codex 都在电脑上，登录状态直接接着用 🙂"],device:"phone-to-pc",blocks:[{kind:"callout",tone:"info",title:"🔁 从手机切到电脑",text:"Google 账号虽然是在手机上注册的，但账号密码在电脑上照样能用。手机可以先扔一边了，等第 6 步办卡时再拿起来 📱"},{kind:"steps-group",title:"跟着点",device:"pc",os:{android:["💻 电脑上打开 Edge，访问 `https://chatgpt.com/`。","点「Sign up」或「Log in」，选择「Continue with Google」。","在列表里选你刚注册的那个 Gmail 账号（就是手机上注册的那一个）。","第一次会跳出授权页，点「继续」把信息授权给 ChatGPT。","看到聊天界面后，随便发一句「你好」确认能正常回复。"],ios:["💻 电脑上打开 Edge，访问 `https://chatgpt.com/`。","点「Sign up」或「Log in」，选择「Continue with Google」。","在列表里选你刚注册的那个 Gmail 账号（就是手机上注册的那一个）。","第一次会跳出授权页，点「继续」把信息授权给 ChatGPT。","看到聊天界面后，随便发一句「你好」确认能正常回复。"],harmony:["💻 电脑上打开 Edge，访问 `https://chatgpt.com/`。","点「Sign up」或「Log in」，选择「Continue with Google」。","在列表里选你刚注册的那个 Gmail 账号（就是手机上注册的那一个）。","第一次会跳出授权页，点「继续」把信息授权给 ChatGPT。","看到聊天界面后，随便发一句「你好」确认能正常回复。"]}},{kind:"callout",tone:"tip",title:"顺手把登录状态留在电脑上",text:"第 7 步装好 Codex 之后要跳转网页登录，用的就是这个浏览器里已经登录好的账号 —— 不用再输一次密码。"}],success:["电脑上的 Edge 进了 ChatGPT 聊天界面，左下角或头像那儿能看到你的账号，随手发条消息也有回复 ✅"],checks:[{id:"s5-chatgpt-login",text:"💻 电脑上 ChatGPT 已登录，能发消息"}],stuck:[{q:"提示地区不支持 / not available in your country",a:"说明电脑现在这个节点所在地区不被支持。换个节点（换个国家/地区）再刷新重试。"},{q:"登录后又被要求绑定手机号",a:"按页面提示填你的 +86 手机号验证一下就行，不影响后面的订阅。"},{q:"Google 登录按钮点了没反应",a:"把 Edge 的弹窗拦截关掉再点一次。还不行就开个「无痕窗口」重试，顺便确认电脑上的网络工具是通着的。"},{q:"想用手机注册，但教程写着电脑",a:"手机上也一样能注册，流程一模一样。不过在电脑上做会更顺：第 6 步订阅、第 7 步装 Codex 都在电脑上，账号顺手就登上了 🙂"}]},{id:"step6",no:6,title:"准备万事达借记卡并完成 Plus 订阅",goal:"办一张万事达借记卡 → 绑进 Google 支付方式 → 订上 ChatGPT Plus 💳",why:["ChatGPT Plus 每月 20 美元，得用能扣外币的卡来付 —— 国内普通储蓄卡不行 🙅","万事达借记卡能绑进 Google 支付方式，走 Google Play 订阅最稳。"],device:"phone-to-pc",blocks:[{kind:"steps-group",title:"6-1 办一张万事达借记卡",device:"pc-to-phone",figure:{src:a.payStepsGraphic,alt:"三步搞定 Codex 充值：境外支付卡 → Google Play 绑定 → Codex 充值",caption:"整条链路就这三步 👆 **办一张境外支付卡 → 绑到 Google Play → 完成订阅**。下面 6-1 到 6-5 就是把这三步拆开讲。"},os:{android:[{text:"🔁 从电脑切回手机：办卡和充值要在银行 App 里做。后面的绑卡、改地区、确认订阅都要再回到电脑上。",img:null,strong:!0},{text:"选一张卡来办：招商银行万事达普卡，或者中国银行 B 站联名万事达借记卡（记住要**万事达版**）。两张都验证过可以绑 Google Play，哪张方便办哪张。",img:null},{text:"按银行卡片的说明提交申请、等卡寄到或去网点领取、在银行 App 里激活。",img:null},{text:"⚠️ **线下去网点办卡时，工作人员会问你办这张卡的用途。回答「境外旅游消费」这 6 个字就行** —— 意思就是以后有出国旅游或留学的打算，办张万事达卡在国外支付方便。不用多解释，也别说什么订阅、翻墙之类的话。",img:null,strong:!0},{text:"💡 如果你特别想要**中国银行 B 站联名卡**，注意它是 **9 月 22 号才开启网申**，一定要等到这个日期之后再去办，早去也办不了。",img:null},{text:"在卡里预存 150 元人民币左右（Plus 一个月 20 美元），**不用自己购汇**，存人民币就行。",img:null},{text:"最关键的一步：在银行 App 里开启「跨境线上支付」。招行卡的路径是：我的 → 银行卡 → 快捷支付 → 把「跨境线上支付」开关打开。**不打开的话，后面绑卡付款会失败。**",img:null,strong:!0},{text:"顺便确认一下：无卡支付已开、境外交易限额够 150 元（或更高）、没有被「境外锁」拦住。",img:null}],ios:[{text:"🔁 从电脑切回手机：办卡和充值要在银行 App 里做。后面的绑卡、改地区、确认订阅都要再回到电脑上（苹果和鸿蒙走模拟器）。",img:null,strong:!0},{text:"选一张卡来办：招商银行万事达普卡，或者中国银行 B 站联名万事达借记卡（记住要**万事达版**）。两张都验证过可以绑 Google Play，哪张方便办哪张。",img:null},{text:"按银行卡片的说明提交申请、等卡寄到或去网点领取、在银行 App 里激活。",img:null},{text:"⚠️ **线下去网点办卡时，工作人员会问你办这张卡的用途。回答「境外旅游消费」这 6 个字就行** —— 意思就是以后有出国旅游或留学的打算，办张万事达卡在国外支付方便。不用多解释，也别说什么订阅、翻墙之类的话。",img:null,strong:!0},{text:"💡 如果你特别想要**中国银行 B 站联名卡**，注意它是 **9 月 22 号才开启网申**，一定要等到这个日期之后再去办，早去也办不了。",img:null},{text:"在卡里预存 150 元人民币左右（Plus 一个月 20 美元），**不用自己购汇**，存人民币就行。",img:null},{text:"最关键的一步：在银行 App 里开启「跨境线上支付」。招行卡的路径是：我的 → 银行卡 → 快捷支付 → 把「跨境线上支付」开关打开。**不打开的话，后面绑卡付款会失败。**",img:null,strong:!0},{text:"顺便确认一下：无卡支付已开、境外交易限额够 150 元（或更高）、没有被「境外锁」拦住。",img:null}],harmony:[{text:"🔁 从电脑切回手机：办卡和充值要在银行 App 里做。后面的绑卡、改地区、确认订阅都要再回到电脑上（鸿蒙走模拟器）。",img:null,strong:!0},{text:"选一张卡来办：招商银行万事达普卡，或者中国银行 B 站联名万事达借记卡（记住要**万事达版**）。两张都验证过可以绑 Google Play，哪张方便办哪张。",img:null},{text:"按银行卡片的说明提交申请、等卡寄到或去网点领取、在银行 App 里激活。这一步在手机上完成。",img:null},{text:"⚠️ **线下去网点办卡时，工作人员会问你办这张卡的用途。回答「境外旅游消费」这 6 个字就行** —— 意思就是以后有出国旅游或留学的打算，办张万事达卡在国外支付方便。不用多解释，也别说什么订阅、翻墙之类的话。",img:null,strong:!0},{text:"💡 如果你特别想要**中国银行 B 站联名卡**，注意它是 **9 月 22 号才开启网申**，一定要等到这个日期之后再去办，早去也办不了。",img:null},{text:"在卡里预存 150 元人民币左右（Plus 一个月 20 美元），**不用自己购汇**，存人民币就行。",img:null},{text:"最关键的一步：在银行 App 里开启「跨境线上支付」。招行卡的路径是：我的 → 银行卡 → 快捷支付 → 把「跨境线上支付」开关打开。**不打开的话，后面绑卡付款会失败。**",img:null,strong:!0},{text:"顺便确认一下：无卡支付已开、境外交易限额够 150 元（或更高）、没有被「境外锁」拦住。",img:null}]},under:[{kind:"callout",tone:"tip",title:"「跨境线上支付」到底长什么样 👇",text:"在招行 App 里进「我的 → 银行卡 → 快捷支付」，会看到一个叫「跨境线上支付」的开关 —— 打开它就行。下面这张图就是那个页面（图里已经打开了）。一般柜台工作人员也会主动问你「要不要开」。"},{kind:"figure",src:a.payBankPermissionBig,alt:"招商银行 App 快捷支付页面，「跨境线上支付」开关已打开",caption:"招行 App「快捷支付」页面 👆 点「选择卡」选中刚办的那张万事达卡，然后确认「跨境线上支付」是打开的。"}],after:[{kind:"cards",...he}]},{kind:"steps-group",title:"6-2 把卡绑到 Google 支付方式",device:"phone",os:{android:[{text:"手机上打开 Google Play（在 Edge 里访问 `https://play.google.com/store` 也可以）。",img:null},{text:"确认右上角登录的是你刚注册的 Google 账号。",img:null},{text:"点右上角头像 →「付款和订阅」→「付款方式」。",img:null},{text:"点「添加付款方式」，选「添加信用卡或借记卡」。",img:null},{text:"把万事达卡的**卡号、有效期（MM/YY）、安全码 CVV / CVC（卡背面 3 位）**填进去。",img:a.payAddCardForm},{text:"账单地址按页面要求填写。**国家/地区选日本、邮编和街道地址要填真实存在的**（下面 6-3 有怎么找地址的说明）。",img:null},{text:"保存后「付款方式」里就会出现你刚加的这张万事达卡（一般显示成 `Mastercard ···· 1234`）。",img:null},{text:"卡里的余额要留足，而且要**多留 20%～30% 的汇率波动空间** —— 余额不足是最常见的扣款失败原因。",img:null,strong:!0}],ios:[{text:"这一步在电脑上做，手机上不用操作。",img:null,strong:!0},{text:"💻 电脑上打开 Edge，按下面「6-4 苹果与鸿蒙用户走这里」的 MuMu 模拟器流程，在模拟器里的 Google Play 添加付款方式。",img:null},{text:"把万事达卡的**卡号、有效期（MM/YY）、安全码 CVV / CVC（卡背面 3 位）**填进去。",img:a.payAddCardForm},{text:"账单地址按页面要求填写。**国家/地区选日本、邮编和街道地址要填真实存在的**（下面 6-3 有怎么找地址的说明）。",img:null},{text:"保存后「付款方式」里就会出现你刚加的这张万事达卡。",img:null},{text:"卡里的余额要留足，而且要**多留 20%～30% 的汇率波动空间** —— 余额不足是最常见的扣款失败原因。",img:null,strong:!0}],harmony:[{text:"这一步在电脑上做，手机上不用操作。",img:null,strong:!0},{text:"💻 电脑上打开 Edge，按下面「6-4 苹果与鸿蒙用户走这里」的 MuMu 模拟器流程，在模拟器里的 Google Play 添加付款方式。",img:null},{text:"把万事达卡的**卡号、有效期（MM/YY）、安全码 CVV / CVC（卡背面 3 位）**填进去。",img:a.payAddCardForm},{text:"账单地址按页面要求填写。**国家/地区选日本、邮编和街道地址要填真实存在的**（下面 6-3 有怎么找地址的说明）。",img:null},{text:"保存后「付款方式」里就会出现你刚加的这张万事达卡。",img:null},{text:"卡里的余额要留足，而且要**多留 20%～30% 的汇率波动空间** —— 余额不足是最常见的扣款失败原因。",img:null,strong:!0}]},after:[{kind:"callout",tone:"warn",title:"地址别乱编，也别用假的",text:"账单地址按页面要求填，而且要填**真实存在**的地址。下面这张图就是怎么用 Google 地图核对一个地址 —— 邮编、市/区、街道能对上，就说明这个地址是真的。用真实地址能明显减少「付款被拒」。"},{kind:"figure",src:a.payMapsAddress,alt:"用 Google 地图核对日本地址：邮编 578-0901，大阪府东大阪市加纳 4 丁目 2-8",caption:"核对地址的例子 👆 把地址粘到 Google 地图里搜一下，如果像这样能定位到具体门牌、邮编和市/区对得上，就可以用。图中 `578-0901` 是邮编，`4-chōme-2-8 Kanō, Higashiosaka, Osaka` 是街道地址。"},{kind:"callout",tone:"warn",title:"卡号 / CVV 千万别发给别人 ⚠️",text:"银行卡资料不要截图、不要发给任何「代充」，也不要用所谓的代充服务。这一步全程只需要你自己在 Google Play 里填一次。"}]},{kind:"steps-group",title:"6-3 想更便宜？把 Google Play 地区切到日区",device:"phone",os:{android:[{text:"💡 为什么是日本：ChatGPT Plus 按地区定价，日区月费约 2860 日元，比直接按美元付便宜一些。这是小红书上不少人的实测结论，**价格随汇率浮动，以你页面显示的为准**。",img:null},{text:"打开 Google Play → 点右上角头像 →「设置」。",img:null},{text:"进入「常规」→「账号和设备偏好设置」。",img:null},{text:"点「国家 / 地区和个人资料」，按提示把国家 / 地区改成「日本」。",img:a.payAccountRegion},{text:"改完页面会提示「您已切换到日本地区」，并且说明**此变更最多可能需要 24 小时才能生效**。",img:null},{text:"⚠️ 两个硬限制：**同一个 Google 账号 90 天内只能改一次地区**；改地区需要该账号在 Google Play 里有可用的付款方式，所以先绑卡或同时把卡绑上。",img:null,strong:!0},{text:"确认无误后回到 Google Play 首页，看看商店内容是不是已经变成日区的推荐。",img:null}],ios:[{text:"💡 为什么是日本：ChatGPT Plus 按地区定价，日区月费约 2860 日元，比直接按美元付便宜一些。价格随汇率浮动，以你页面显示的为准。",img:null},{text:"💻 这一段在模拟器里做：打开 Google Play → 点右上角头像 →「设置」。",img:null},{text:"进入「常规」→「账号和设备偏好设置」→「国家 / 地区和个人资料」，把地区改成「日本」。",img:a.payAccountRegion},{text:"改完会提示「您已切换到日本地区」，变更最多可能需要 24 小时生效。",img:null},{text:"⚠️ 同一个 Google 账号 90 天内只能改一次地区；改地区需要账号在 Google Play 里有可用的付款方式。",img:null,strong:!0}],harmony:[{text:"💡 为什么是日本：ChatGPT Plus 按地区定价，日区月费约 2860 日元，比直接按美元付便宜一些。价格随汇率浮动，以你页面显示的为准。",img:null},{text:"💻 这一段在模拟器里做：打开 Google Play → 点右上角头像 →「设置」。",img:null},{text:"进入「常规」→「账号和设备偏好设置」→「国家 / 地区和个人资料」，把地区改成「日本」。",img:a.payAccountRegion},{text:"改完会提示「您已切换到日本地区」，变更最多可能需要 24 小时生效。",img:null},{text:"⚠️ 同一个 Google 账号 90 天内只能改一次地区；改地区需要账号在 Google Play 里有可用的付款方式。",img:null,strong:!0}]},under:[{kind:"figure",src:a.payRegionAddCardBig,alt:"Google Play 设置里把地区改成日本（提示最多 24 小时生效），以及添加银行卡的表单",caption:"改地区 + 加卡长这样 👆 上半是 Google Play「设置 → 地区和个人资料」里改成日本后的提示；下半是「添加银行卡」表单，填卡号、有效期 `MM/YY`、安全码（卡背面 3 位）。"}]},{kind:"steps-group",title:"6-4 苹果与鸿蒙用户走这里：在电脑上用 MuMu 模拟器订阅",device:"phone-to-pc",os:{android:null,ios:[],harmony:[]},sharedGroup:["ios","harmony"],intro:"IOS 和鸿蒙系统的操作流程相同：都是在电脑上下载 MuMu 模拟器，进去之后把小工具里的谷歌安装器装好，模拟器就有谷歌环境了，再用各种方式在模拟器上下载你手机上那个稳定的网络工具。iPhone 装不了 Google Play，所以只有 iPhone 的话就走这条路。",subSteps:[{n:"①",title:"在电脑上下载并安装 MuMu 模拟器",device:"pc",items:["💻 电脑上打开 Edge，访问 MuMu 模拟器官网 `https://mumu.163.com/download/`，下载 **Windows 版** 安装包（新版模拟器是安卓 15，支持 Win11/10/8）。","双击安装包，按提示装完（可以自己改安装路径），然后启动 MuMu 模拟器。","第一次启动比较慢，耐心等到进入模拟器的安卓桌面。","确认模拟器里能正常访问 Google 服务，再进行下一步。"]},{n:"②",title:"给模拟器装上谷歌环境（谷歌安装器）",device:"pc",items:["在模拟器桌面找到「小工具」文件夹，打开它。","里面有一个「谷歌安装器」，点它，等它把 Google 服务框架装完。","装完后模拟器里就会出现 Google Play 商店。","如果小工具里没找到，就在模拟器桌面搜「谷歌安装器」；再不行，从模拟器右上角的菜单进「应用中心」搜它。"],figure:{src:a.mumuTools,alt:"MuMu 模拟器小工具里的谷歌安装器和 RE 文件管理器",caption:"MuMu 模拟器「小工具」里的「谷歌安装器」，点它就能装出谷歌环境。"}},{n:"③",title:"在模拟器里装上你的网络工具（安卓版）",device:"pc",items:["这一步就是：把你手机上正在用的那个网络工具，装一份到模拟器里。安卓版的安装包（`.apk` 文件）从它的官网或者你买服务的地方拿就行。","装进模拟器有 3 个办法，哪个顺手用哪个：① 把 `.apk` 文件直接拖进模拟器桌面；② 点模拟器右上角的菜单 →「其他功能」→「APK 安装」；③ 在模拟器里用浏览器下载完，下拉通知栏点安装包。","装好后打开它，把你买到的**订阅链接**导入进去，把代理打开。","💡 朋友版这里用的是作者给的那套网络工具，步骤和上面一样，具体看第 1 步里作者给的说明 🙂","如果装完打不开或者闪退，换个架构的安装包再试（常见的有 `x86_64`、`arm64-v8a` 两种）。"],figure:{src:a.mumuDesktop,alt:"MuMu 模拟器安卓桌面，已装好 Play 商店、ChatGPT、Clash Meta 等应用",caption:"模拟器桌面装好之后长这样 👆 有「Play 商店」、你装的网络工具、以及从 Google Play 下的 ChatGPT。"}},{n:"④",title:"连上网络工具，打开 Google Play",device:"pc",items:["确认模拟器里的网络工具已经连上，出口 IP 变成境外地址。","回到模拟器桌面，打开 Play 商店。","用你手机上注册的那个 Google 账号登录。","若之前谷歌账号未绑定过地区，建议绑日区，比美区订阅便宜一些 💡"]},{n:"⑤",title:"添加付款方式，完成 Plus 订阅",device:"pc",items:["在 Google Play 里点右上角头像 →「付款和订阅」→「付款方式」→「添加付款方式」→ 选「添加信用卡或借记卡」。","把万事达借记卡的**卡号、有效期（MM/YY）、安全码**填进去，账单地址按页面要求填。地址可以用 Google 地图核对是否真实存在。","保存成功后回到 Google Play，搜索 `ChatGPT` 进入它的详情页。","点订阅 / 内购，选 Plus 套餐，用刚添加的万事达卡付款。**日区会显示约 2860 日元/月**。","付款成功后就订阅完成了。后面的绑卡、下载 ChatGPT、付款流程和安卓基本一致。"]}],after:[{kind:"callout",tone:"tip",title:"为什么用模拟器",text:"苹果和鸿蒙手机不方便直接走 Google Play 的内购付款，用电脑上的 MuMu 模拟器能模拟一台安卓手机，付款流程最稳。"}]},{kind:"steps-group",title:"6-5 确认 Plus 已经订阅成功",device:"pc-to-phone",os:{android:[{text:"在 Google Play 里点右上角头像 →「付款和订阅」→「订阅」，能看到 `ChatGPT Plus` 的记录（会显示价格和下次自动续费日期），就说明订阅成功了。",img:a.paySubscribeConfirm,strong:!0},{text:"📱 再回到手机上的 ChatGPT，下拉刷新一下。",img:null},{text:"点头像 →「设置」→ 账号信息，看到套餐显示 `Plus` 就完成了。",img:null},{text:"只看银行扣款短信不算完成 —— 上面两处都要对得上才算真订上了。",img:null,strong:!0}],ios:[{text:"💻 先在模拟器的 Google Play 里确认：点右上角头像 →「付款和订阅」→「订阅」，能看到 `ChatGPT Plus` 的记录（含价格与下次自动续费日期）。",img:a.paySubscribeConfirm,strong:!0},{text:"📱 再回到手机上的 ChatGPT，下拉刷新一下。",img:null},{text:"点头像 →「设置」→ 账号信息，看到套餐显示 `Plus` 就完成了。",img:null},{text:"只看银行扣款短信不算完成 —— 上面两处都要对得上才算真订上了。",img:null,strong:!0}],harmony:[{text:"🔁 从电脑切回手机。",img:null},{text:"💻 先在模拟器的 Google Play 里确认：点右上角头像 →「付款和订阅」→「订阅」，能看到 `ChatGPT Plus` 的记录（含价格与下次自动续费日期）。",img:a.paySubscribeConfirm,strong:!0},{text:"📱 再回到手机上的 ChatGPT，下拉刷新一下。",img:null},{text:"点头像 →「设置」→ 账号信息，看到套餐显示 `Plus` 就完成了。",img:null},{text:"只看银行扣款短信不算完成 —— 上面两处都要对得上才算真订上了。",img:null,strong:!0}]}},{kind:"reference",title:"作者的原始参考资料",items:[{label:"小红书：国内卡约 121 元充值 Codex 保姆级教程",href:V.xiaohongshuPlus},{label:"小红书：搜「Codex Plus 日区」看更多人的实测",href:V.xiaohongshuSearch},{label:"B 站：招商银行万事达普卡办理视频",href:V.bilibiliCard}],note:"上面是作者原文里给的参考资料，站内已经把里面的操作整理成步骤并配上截图，正常按步骤走就行；想对照原文可以点开看。两篇小红书教程口径一致的地方（绑卡路径、跨境支付开关、日区改区流程、地址怎么核对）已经全部合并进上面的 6-1～6-5 里了。"},{kind:"callout",tone:"warn",title:"最后再念一遍作者的三条提醒 📌",text:"① 「121 元」不是固定价格，随汇率变化，以实际结算为准；② 一定记得在银行 App 里开启「跨境线上支付」，不然绑卡付款会失败；③ 卡号和安全码千万别发给别人，也别找「代充」。"}],success:["Google Play 的付款方式里能看到你添加的万事达卡。","Google Play 的「付款和订阅 → 订阅」里能看到 ChatGPT Plus 的记录。","ChatGPT 的账号信息里套餐显示为 Plus。"],checks:[{id:"s6-card",text:"万事达借记卡办好并激活，卡里存了 150 元"},{id:"s6-permission",text:"银行 App 里已开启跨境线上支付"},{id:"s6-payment-method",text:"卡已经绑进 Google 支付方式"},{id:"s6-region",text:"（可选）Google Play 地区已切到日区"},{id:"s6-plus",text:"Google Play 订阅记录 & ChatGPT 里都显示 Plus"}],stuck:[{q:"绑卡时提示卡片被拒绝",a:"按顺序排查三件事：① 银行 App 里的「跨境线上支付」有没有打开（这是第一排查项）；② 卡里的余额够不够，而且要多留 20%～30% 给汇率波动；③ 账单地址是不是真实存在的地址，可以用 Google 地图核对一下。"},{q:"付款时提示地区不支持",a:"回 Google Play 的「设置 → 账号和设备偏好设置 → 国家 / 地区和个人资料」确认地区，按上面 6-3 的说明切到日区再试。注意 90 天内只能改一次。"},{q:"改地区时提示需要先添加付款方式",a:"这是 Google 的正常要求：先把卡绑上（6-2），再回来改地区（6-3）。顺序反了就会卡在这里。"},{q:"改完地区，商店内容没变化",a:"Google 的提示里写了变更最多可能需要 24 小时生效。等一会儿，或者把 Google Play 完全关掉重新打开。"},{q:"余额明明够，还是扣款失败",a:"借记卡是预授权冻结：招行万事达按 100% 冻结，所以余额要覆盖得住。另外别用「代充」，也不要在订阅过程中反复改地区或换卡。"},{q:"订阅时要求验证手机号",a:"不同账号的风控策略不一样，有的人完全没遇到额外验证。如果遇到了，按 Google 页面提示填你自己的手机号完成验证即可，以自己页面为准。"},{android:null,ios:{q:"模拟器里的下载按钮点不动",a:"先在模拟器里把网络工具连上，等十几秒再点一次；如果还是不行，用「小工具」里的 RE 文件管理器手动安装 APK。"},harmony:{q:"模拟器里的下载按钮点不动",a:"先在模拟器里把网络工具连上，等十几秒再点一次；如果还是不行，用「小工具」里的 RE 文件管理器手动安装 APK。"}},{android:null,ios:{q:"模拟器装不上 / 提示要开启 VT",a:"MuMu 官方要求电脑 CPU 支持并开启 VT（虚拟化）：重启电脑进 BIOS 打开 VT，或者在任务管理器→性能里确认「虚拟化：已启用」。另外模拟器不能装在虚拟机里，Surface 这类没有 VT 的设备装不了。"},harmony:{q:"模拟器装不上 / 提示要开启 VT",a:"MuMu 官方要求电脑 CPU 支持并开启 VT（虚拟化）：重启电脑进 BIOS 打开 VT，或者在任务管理器→性能里确认「虚拟化：已启用」。另外模拟器不能装在虚拟机里，Surface 这类没有 VT 的设备装不了。"}},{android:null,ios:{q:"装不上 Google Play 或商店提示设备不兼容",a:"按 MuMu 官方排障办法：在模拟器的设置中心把机型改成非红米/华为/荣耀，再用谷歌安装器重装一次谷歌套件，然后登录账号。"},harmony:{q:"装不上 Google Play 或商店提示设备不兼容",a:"按 MuMu 官方排障办法：在模拟器的设置中心把机型改成非红米/华为/荣耀，再用谷歌安装器重装一次谷歌套件，然后登录账号。"}},{android:null,ios:{q:"模拟器跑起来很卡",a:"MuMu 新版已经兼容 Hyper-V/VBS，如果卡顿可以按官方办法关掉：模拟器右上角菜单 → 问题诊断 → 关闭 Hyper-V。关完重启模拟器。"},harmony:{q:"模拟器跑起来很卡",a:"MuMu 新版已经兼容 Hyper-V/VBS，如果卡顿可以按官方办法关掉：模拟器右上角菜单 → 问题诊断 → 关闭 Hyper-V。关完重启模拟器。"}},{android:null,ios:{q:"网络工具的安卓包装不上或闪退",a:"十有八九是架构不对。换个包试：模拟器一般是 `x86_64`，不行再试 `arm64-v8a`。"},harmony:{q:"网络工具的安卓包装不上或闪退",a:"十有八九是架构不对。换个包试：模拟器一般是 `x86_64`，不行再试 `arm64-v8a`。"}},{q:"订阅扣款了但 ChatGPT 还是 Free",a:"退出登录再重新登录一次，或者等几分钟刷新；确认用的是同一个 Google 账号。另外记得回 Google Play 的「付款和订阅 → 订阅」里确认订单真的生效了，只看银行扣款短信不算完成。"}]},{id:"step7",no:7,title:"下载 Codex 并登录",goal:"把 Codex 装上电脑，用你的 ChatGPT 账号登录进去。",why:["订阅好 Plus 之后，Codex 就是你要开始用的工具了 🛠️","下载、安装、登录 —— 最简单的一集，三步搞定 😎"],device:"pc",blocks:[{kind:"steps-group",title:"跟着点",device:"pc",os:{android:[{text:"💻 在电脑上打开 Edge，访问 `https://chatgpt.com/zh-Hans-CN/codex/`，直接下载。",img:null},{text:"下载完双击安装包，装好之后打开 Codex。",img:null},{text:"点界面上的登录按钮，它会自动跳转网页。",img:null},{text:"在网页里登录你的 GPT 账号，点授权，浏览器会把登录状态传回 Codex。",img:null},{text:"回到 Codex，看到能正常新建对话就完成了。",img:null}],ios:[{text:"💻 在电脑上打开 Edge，访问 `https://chatgpt.com/zh-Hans-CN/codex/`，直接下载。",img:null},{text:"下载完双击安装包，装好之后打开 Codex。",img:null},{text:"点界面上的登录按钮，它会自动跳转网页。",img:null},{text:"在网页里登录你的 GPT 账号，点授权，浏览器会把登录状态传回 Codex。",img:null},{text:"回到 Codex，看到能正常新建对话就完成了。",img:null}],harmony:[{text:"💻 在电脑上打开 Edge，访问 `https://chatgpt.com/zh-Hans-CN/codex/`，直接下载。",img:null},{text:"下载完双击安装包，装好之后打开 Codex。",img:null},{text:"点界面上的登录按钮，它会自动跳转网页。",img:null},{text:"在网页里登录你的 GPT 账号，点授权，浏览器会把登录状态传回 Codex。",img:null},{text:"回到 Codex，看到能正常新建对话就完成了。",img:null}]}},{kind:"callout",tone:"tip",title:"入口可能会变，认准这个名字",text:"如果上面那个链接打不开，就在 Edge 里打开 `https://chatgpt.com/`，登录后在左侧或设置里找 `Codex`；也可以直接访问官方的桌面版下载页 `https://chatgpt.com/download/`。OpenAI 现在把 Codex 做进了 ChatGPT 桌面 App 里，官方文档里的按钮文案是「Continue to sign in」（以前叫「Sign in with ChatGPT」），看到它点下去就对了。"},{kind:"callout",tone:"warn",title:"每次用之前先看一眼网络工具 🔌",text:"Codex 得联网才能干活，动手之前确认电脑上的网络工具还连着（连接按钮还是绿的）。"}],success:["Codex 窗口里能正常新建对话，不再提示登录。","能够让它读一个本地文件夹或回答一个问题，说明已经通了。"],checks:[{id:"s7-codex-downloaded",text:"Codex 安装包已下载并安装完成"},{id:"s7-codex-login",text:"Codex 登录成功，能看到对话界面"}],stuck:[{q:"下载按钮点不动或页面打不开",a:"先确认电脑上的网络工具是开着的；换个节点再刷新；也可以直接访问 `https://chatgpt.com/download/` 下载桌面版。"},{q:"跳转网页登录后，Codex 还是显示未登录",a:"关掉 Codex 重新打开一次；确认浏览器里登录的账号和订阅 Plus 的是同一个。"},{q:"登录时被要求绑定手机号",a:"按页面提示填 +86 手机号完成验证即可，这是 OpenAI 的风控步骤，不影响使用。"},{q:"Windows 提示安装被拦截",a:"在提示里点「更多信息」→「仍要运行」；如果公司电脑有安全策略，换一台个人电脑。"}]}]},N={prepared:[{icon:"📱",title:"手机网络工具",text:"你的手机上已经有能用的网络工具了，这一步不用再做。"},{icon:"💻",title:"电脑网络工具",text:"电脑上还没有，这是这次要重点搞定的部分。"},{icon:"🎁",title:"已经买好的服务",text:"给你买好的那个一月 8 块 160G 的网络服务已经就绪，订阅地址找作者要最新版。"},{icon:"🀄",title:"手机系统",text:"两台都是鸿蒙手机，所以直接走鸿蒙路径，不用再选系统。"}],subscriptionHint:L.hint,stepOverrides:{step1:{goal:"把作者给你准备好的网络服务装到电脑上，让电脑也能连外网。",why:["手机上的网络工具你早就有了，电脑上还没有 —— 这是这次要重点搞定的一步。","作者已经给你买好了一月 8 块 160G 的订阅，你只要把它导进电脑上的 FlClash 就行。"],prependBlocks:[{kind:"steps-group",title:"① 先把 FlClash 装到电脑上",device:"pc",items:["💻 打开电脑上的 Edge 浏览器，访问 `https://github.com/chen08209/FlClash/releases`。","找到 Windows 那一栏，点 `Setup x64`（文件名以 `-windows-amd64-setup.exe` 结尾）下载。","双击安装包，一路「下一步」装完，然后打开 FlClash。","装好后先别急着点启动，先去拿订阅地址。"],figure:{src:a.flclashDownloadOs,alt:"FlClash 发布页按系统选择下载文件",caption:"Windows 电脑选 `Setup x64` 这一行。"}},{kind:"callout",tone:"friend",title:"② 找作者要订阅地址",text:L.hasUrl?"下面是作者给你的订阅地址，复制它，下一步要用。":`订阅地址会变化，直接找${Y.contact}拿最新版 👀 拿到之后，复制那串地址，下一步要用。`,copyValue:L.hasUrl?L.url:""},{kind:"steps-group",title:"③ 把订阅地址导进 FlClash",device:"pc",items:["在 FlClash 左侧点「配置」。","点「添加配置」，选择 `URL` 这一项。","把作者给你的订阅地址粘贴进去，点提交。","导入后点击订阅卡片右上角的更新按钮，获取最新节点。"],figure:{src:a.flclashImport,alt:"在 FlClash 中通过 URL 添加配置并粘贴订阅地址",caption:"配置 → 添加配置 → 选择 URL → 粘贴订阅地址 → 提交。"}},{kind:"steps-group",title:"④ 开启代理",device:"pc",items:["返回「仪表盘」，出站模式选【规则】。","打开【虚拟网卡】，【系统代理】保持关闭。","点右下角的【启动】按钮。","进入「代理」执行延迟测试，然后选择节点（延迟数字仅供参考）。"],figure:{src:a.flclashEnable,alt:"FlClash 仪表盘：出站模式选规则、打开虚拟网卡、点启动",caption:"出站模式【规则】＋【虚拟网卡】打开＋点【启动】。"}}]},step6:{appendBlocks:[{kind:"steps-group",title:"★ 朋友专属：模拟器里装 FlClash 和选地区",device:"pc",items:["💻 在模拟器里的浏览器打开 `https://github.com/chen08209/FlClash/releases`。","下载里面的**安卓版本**（优先 `x86_64`，装不上再试 `arm64-v8a`）。","装好 FlClash 后打开它，和前面电脑上的操作是一样的：配置 → 添加配置 → URL → 粘贴订阅地址。","订阅地址找作者要 URL 码，和电脑上用的是同一个。","连上网络工具后打开 Google Play，然后按流程操作。","若之前谷歌账号未绑定过地区，建议绑日区，比美区订阅便宜一些。"],figure:{src:a.flclashDownloadOs,alt:"FlClash 发布页 Android 一栏的 APK 选项",caption:"模拟器里下 Android 那一栏的 APK。"}}]},step7:{appendBlocks:[{kind:"callout",tone:"friend",title:"★ 朋友专属：Codex 默认装在 C 盘",text:"Codex 默认下在 C 盘。如果后面想把下载路径改到别的盘，来找作者，作者教你。"}]}}},fe={key:"zbh",modeName:"zbh",label:"zbh 专属版",selfName:"zbh",welcome:{eyebrow:"检测到暗号：zbh",title:"zbh，你的专属航道已点亮 🚀",lines:["欢迎回来，zbh。你手机上的网络工具早就搞定了，这次只要把电脑那一端补上就行。","订阅地址记得找作者拿最新版 —— 那玩意儿会变，别用旧的。","整个教程已经帮你切成鸿蒙路径了，不用再选系统，直接往下走。"],badge:"🌌 星轨已就绪"},titles:{page:"zbh 的通关航线 🚀",progress:"zbh 的星轨进度",finish:"zbh，全部通关！"},card:{emoji:"🌌",tagline:"紫蓝霓虹 · 宇宙航线",perks:["自动走鸿蒙路径","手机网络工具标记为已准备","重点带你搞电脑端网络工具"]},jokes:["zbh 的节点要干净，OpenAI 挑食得很 🍽️","别手抖把订阅地址发到群里，那是你专属的星轨 ✨","代码写不动就先喝口水，Agent 不会跑 😌"],emoji:"🌌✨🛰️",finish:{title:"zbh，全部通关！🌌",text:"星轨已经铺好，Codex 在你电脑里等着了。现在，把你的第一个任务大胆交给 Agent 吧 —— 出了事算它的 🛰️",badge:"通关徽章 · zbh",effect:"stars"},extra:{title:"zbh 专属彩蛋",items:["连点三次标题能进来，说明你已经学会 Agent 的隐藏操作了 🕹️","第 8 块一个月的订阅，是这条航线上最划算的一站。","以后每次用 Codex 之前，先看一眼网络工具是不是还绿着。"]}},be={key:"cbz",modeName:"cbz",label:"cbz 专属版",selfName:"cbz",welcome:{eyebrow:"检测到暗号：cbz",title:"cbz，任务面板已激活 🎮",lines:["欢迎回来，cbz。你的手机网络工具已经就位，这次的主线任务是把电脑端打通。","订阅地址会变化，直接找作者拿最新版 👀","教程已经自动切到鸿蒙路径，系统选择那一关帮你跳过了。"],badge:"⚡ 任务已接取"},titles:{page:"cbz 的任务面板 🎮",progress:"cbz 的任务进度",finish:"cbz，全部通关！"},card:{emoji:"⚡",tagline:"深海青绿 · 电光金任务面板",perks:["自动走鸿蒙路径","手机网络工具标记为已准备","重点带你搞电脑端网络工具"]},jokes:["cbz 出场自带电光金，节点也得配得上这个排面 ⚡","订阅地址是限时任务道具，找作者领取，别过期了 🎒","进度条走满的那一刻，你就是这条街最靓的 Agent 指挥官 🕹️"],emoji:"⚡🎮🟢",finish:{title:"cbz，全部通关！⚡",text:"任务面板全清，Codex 已经在你电脑里待命。接下来，把第一个任务大胆丢给 Agent 吧 —— 指挥官只要验收就行 🎮",badge:"通关徽章 · cbz",effect:"sparks"},extra:{title:"cbz 专属彩蛋",items:["连点三次标题进入任务面板，这个隐藏入口你已经解锁 🕹️","一半的电光金，一半的深海绿，这就是 cbz 的配色信仰。","每次开工前确认网络工具还亮着，这是指挥官的基本素养 ⚡"]}},xe={zbh:fe,cbz:be},se="codex-tutorial::state::v1",z=["general","zbh","cbz"],j=D.map(e=>e.key);function M(){const e={};for(const t of z){e[t]={};for(const o of j)e[t][o]={}}return{version:1,mode:"general",os:null,osLocked:!1,view:"home",done:e}}function ye(e){const t=M();if(!e||typeof e!="object")return t;const o=t;z.includes(e.mode)&&(o.mode=e.mode),j.includes(e.os)&&(o.os=e.os),o.osLocked=e.mode==="zbh"||e.mode==="cbz",o.osLocked&&(o.os="harmony"),(e.view==="steps"||e.view==="home")&&(o.view=e.view);for(const n of z)for(const s of j){const i=e.done?.[n]?.[s];if(i&&typeof i=="object")for(const[l,p]of Object.entries(i))typeof l=="string"&&l.length<=64&&(o.done[n][s][l]=!!p)}return o}function ve(e){try{const t=e?.getItem(se);return t?ye(JSON.parse(t)):M()}catch{return M()}}function $e(e,t){try{e?.setItem(se,JSON.stringify(t))}catch{}}function B(e,t){return e==null||Array.isArray(e)?e:typeof e=="object"?t in e?e[t]:null:e}function $(e){return e==="zbh"||e==="cbz"}function Ce(e){return xe[e]??null}function K(e,{mode:t,os:o}){const n=$(t),s=n?N.stepOverrides?.[e.id]:null,i={...e,goal:s?.goal??e.goal,why:s?.why??e.why,blocks:[...s?.prependBlocks??[],...e.blocks??[],...s?.appendBlocks??[]]};return i.blocks=i.blocks.map(l=>{if(n&&l.generalOnly)return null;if(l.sharedGroup)return l.os&&B(l.os,o)===null?null:l;if(l.kind==="steps-group"&&l.os){const p=B(l.os,o);return p===null||Array.isArray(p)&&p.length===0?null:{...l,items:p,os:void 0}}if(l.kind==="actions"&&l.os){const p=B(l.os,o);return p===null||Array.isArray(p)&&p.length===0?null:{...l,items:p,os:void 0}}return l}).filter(Boolean),i.stuck=J(i.stuck,o),i.figuresStuck=J(i.figuresStuck,o),i}function J(e,t){return Array.isArray(e)?e.map(o=>o&&typeof o=="object"&&!Array.isArray(o)&&!("q"in o)&&!("src"in o)?B(o,t):o).filter(o=>o!=null):e??[]}function Ge(e){return e.checks??[]}function ke({mode:e,os:t}){const o=[];for(const n of E.steps){const s=K(n,{mode:e,os:t});for(const i of Ge(s))o.push({stepId:n.id,...i})}return o}function q(e){const{mode:t,os:o}=e,n=ke({mode:t,os:o}),s=e.done?.[t]?.[o]??{},i=n.filter(l=>s[l.id]).length;return{done:i,total:n.length,percent:n.length===0?0:Math.round(i/n.length*100),complete:n.length>0&&i===n.length}}function we(e,t,o){const n=e.mode,s=e.os??"android",i=e.done[n][s];return(o===void 0?!i[t]:!!o)?i[t]=!0:delete i[t],e}function ne(e,t){return z.includes(t)&&(e.mode=t,t==="zbh"||t==="cbz"?(e.os="harmony",e.osLocked=!0):e.osLocked=!1),e}function X(e,t){return e.osLocked||!j.includes(t)||(e.os=t),e}function Pe(e){for(const t of z)for(const o of j)if(Object.keys(e.done[t][o]).length>0)return!0;return!1}function Ae(e){const t=M();return t.mode=e.mode,t.os=e.os,t.osLocked=e.osLocked,t.view=e.view,t}function ie(e){return String(e??"").trim().toLowerCase()}function Se(e){const t=ie(e);return t==="zbh"||t==="cbz"}function ze(e){const t=ie(e);return t===""?"咦，空格可不算暗号哦 👀 试试 zbh 或者 cbz。":t.length>12?"暗号没这么长啦 😆 只有三个字母。":["zb","zhb","zbb","bhz"].includes(t)?`差一点点！是 zbh，不是 ${t} 😜`:["cb","czb","cbb","bcz","cbs"].includes(t)?`差一点点！是 cbz，不是 ${t} 😜`:t.includes("zbh")?"多了几个字符吧？只要 zbh 三个字母 🙂":t.includes("cbz")?"多了几个字符吧？只要 cbz 三个字母 🙂":`「${e.trim()||"空"}」不是暗号 🙈 这里只认 zbh 和 cbz。`}function r(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function c(e){return r(e).replace(/`([^`]+)`/g,"<code>$1</code>").replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>")}function v(e,t){return e.querySelector(t)}function w(e,t){return Array.from(e.querySelectorAll(t))}function ae(){return typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches}function S(e=12){try{navigator.vibrate?.(e)}catch{}}const H=e=>{const t=W[e]??W.pc;return`<span class="device-chip device-${r(e)}"><b>${t.icon}</b> ${r(t.label)}</span>`};function Te(e){const t=D.find(o=>o.key===e);return t?`<span class="os-tag os-${r(e)}">${t.emoji} ${r(t.short)}路径</span>`:""}function A(e,t,o,n=""){return e?`
    <figure class="shot ${n}">
      <button class="shot-btn" type="button" data-zoom="${r(e)}" data-zoom-alt="${r(t||"")}">
        <img src="${r(e)}" alt="${r(t||"")}" loading="lazy" decoding="async" />
        <span class="shot-zoom-hint">🔍 点击放大</span>
      </button>
      ${o?`<figcaption>${c(o)}</figcaption>`:""}
    </figure>`:""}function U(e,t={}){switch(e.kind){case"tabs":return le(e,t);case"actions":return`
        <section class="block block-actions">
          ${e.title?`<h4 class="block-title">${c(e.title)}</h4>`:""}
          <ol class="action-list">${(e.items??[]).map(o=>`<li>${c(o)}</li>`).join("")}</ol>
        </section>`;case"steps-group":return je(e);case"callout":return`
        <aside class="callout callout-${r(e.tone??"info")}">
          ${e.title?`<p class="callout-title">${c(e.title)}</p>`:""}
          <p>${c(e.text??"")}</p>
          ${e.copyValue?`<div class="copy-row">
                   <code class="copy-value">${r(e.copyValue)}</code>
                   <button class="btn btn-mini" type="button" data-copy="${r(e.copyValue)}">复制</button>
                 </div>`:""}
        </aside>`;case"cards":return Me(e);case"figure":return A(e.src,e.alt,e.caption);case"reference":return`
        <section class="block block-reference">
          <h4 class="block-title">${c(e.title)}</h4>
          <ul class="ref-list">
            ${(e.items??[]).map(o=>`<li><a class="ext-link" href="${r(o.href)}" target="_blank" rel="noopener noreferrer">${c(o.label)}<span class="ext-arrow">↗</span></a></li>`).join("")}
          </ul>
          ${e.note?`<p class="ref-note">${c(e.note)}</p>`:""}
        </section>`;default:return""}}function le(e,{hidePicker:t=!1}={}){const o=e.title===""?"":e.title??"先选你手机的系统";return`
    <section class="os-picker-card" id="os-picker" data-picker${t?" hidden":""}>
      ${o?`<h3 class="picker-title">${c(o)}</h3>`:""}
      <p class="picker-intro">${c(e.intro??"")}</p>
      <div class="picker-tabs" role="tablist">
        ${D.map(n=>`
          <button class="picker-tab os-${r(n.key)}" type="button" role="tab" data-pick-os="${r(n.key)}">
            <span class="picker-emoji">${n.emoji}</span>
            <span class="picker-label">${r(n.label)}</span>
            <span class="picker-hint">${r(n.hint)}</span>
          </button>`).join("")}
      </div>
    </section>`}function je(e){const t=e.items??(e.subSteps?null:[]),o=e.subSteps??null,n=e.intro?`<p class="group-intro">${c(e.intro)}</p>`:"",s=e.device?`<div class="group-device">${H(e.device)}</div>`:"",i=e.sharedGroup?'<p class="shared-badge">🤝 苹果与鸿蒙用户都走这里</p>':"",l=t?`<ol class="action-list">${t.map(x=>Z(x,e.device)).join("")}</ol>`:"",p=o?o.map(x=>`
        <div class="subgroup">
          <h5 class="subgroup-title"><span class="subgroup-no">${r(x.n)}</span>${c(x.title)}</h5>
          <div class="group-device">${H(x.device??"pc")}</div>
          <ol class="action-list">${(x.items??[]).map(pe=>Z(pe,x.device)).join("")}</ol>
          ${x.figure?A(x.figure.src,x.figure.alt,x.figure.caption):""}
        </div>`).join(""):"",m=(e.after??[]).map(x=>U(x)).join(""),g=(e.under??[]).map(x=>U(x)).join(""),y=e.figure?A(e.figure.src,e.figure.alt,e.figure.caption):"",u=e.quote?`<blockquote class="inline-quote">${r(e.quote)}</blockquote>${e.quoteNote?`<p class="inline-quote-note">${c(e.quoteNote)}</p>`:""}`:"";return`
    <section class="block block-group">
      <h4 class="block-title">${c(e.title)}</h4>
      ${i}
      ${s}
      ${n}
      ${y}
      ${l}
      ${u}
      ${p}
      ${g}
      ${m}
    </section>`}function Z(e,t){if(typeof e=="string")return`<li>${c(e)}</li>`;const o=e.strong?" is-strong":"",n=e.img?`<button class="inline-shot" type="button" data-zoom="${r(e.img)}" data-zoom-alt="">
         <img src="${r(e.img)}" alt="操作截图" loading="lazy" decoding="async" />
         <span class="shot-zoom-hint">🔍</span>
       </button>`:"";return`<li class="${o.trim()}">${c(e.text)}${n?`<div class="inline-shot-wrap">${n}</div>`:""}</li>`}function Me(e){return`
    <section class="block block-cards">
      <div class="card-grid">
        ${(e.cards??[]).map(Ee).join("")}
      </div>
      ${e.note?`<p class="cards-note">${c(e.note)}</p>`:""}
    </section>`}function Ee(e){const t=[["外观",e.look],["是否可办理",e.available],["办理渠道",e.channel],["需要准备",(e.need??[]).join("、")],["申请流程",(e.flow??[]).map((o,n)=>`${n+1}. ${o}`).join("　")],["拿到卡后存钱",e.topup],["要检查的权限开关",(e.permissions??[]).map(o=>`· ${o}`).join("　")],["费用",e.fee]].filter(([,o])=>o);return`
    <article class="info-card">
      <header class="info-card-head">
        <span class="info-emoji">${e.emoji??"💳"}</span>
        <h4>${c(e.name)}</h4>
      </header>
      <div class="tag-row">
        ${(e.tags??[]).map(o=>`<span class="tag">${c(o)}</span>`).join("")}
      </div>
      ${e.warn?`<p class="info-warn">${c(e.warn)}</p>`:""}
      ${e.note?`<p class="info-note">${c(e.note)}</p>`:""}
      ${e.cardImage?`<button class="card-face-btn" type="button" data-zoom="${r(e.cardImage)}" data-zoom-alt="${r(e.name)} 卡面">
               <img src="${r(e.cardImage)}" alt="${r(e.name)} 卡面" loading="lazy" decoding="async" />
               <span class="shot-zoom-hint">🔍 点击放大</span>
             </button>
             ${e.cardImageCaption?`<p class="card-face-caption">${c(e.cardImageCaption)}</p>`:""}`:""}
      <dl class="info-rows">
        ${t.map(([o,n])=>`<div class="info-row"><dt>${r(o)}</dt><dd>${c(n)}</dd></div>`).join("")}
      </dl>
      <footer class="info-card-foot">
        <span>来源：${c(e.source??"")}</span>
        <span class="checked">信息核验日期：${r(e.checked??"")}</span>
      </footer>
    </article>`}function qe(e){const{state:t,theme:o,progress:n,anyProgress:s}=e,i=$(t.mode),l=o,p=i?`
    <section class="welcome-card">
      <p class="welcome-eyebrow">${r(l.welcome.eyebrow)}</p>
      <h2>${c(l.welcome.title)}</h2>
      ${l.welcome.lines.map(g=>`<p class="welcome-line">${c(g)}</p>`).join("")}
      <span class="welcome-badge">${r(l.welcome.badge)}</span>
    </section>`:"",m=i?`
    <section class="prep-done">
      <h3 class="section-title">✅ 已经替你准备好的</h3>
      <div class="prep-done-grid">
        ${N.prepared.map(g=>`<div class="prep-done-item"><span class="prep-emoji">${g.icon}</span><div><b>${c(g.title)}</b><p>${c(g.text)}</p></div></div>`).join("")}
      </div>
      <p class="sub-hint">🔑 ${c(N.subscriptionHint)}</p>
    </section>`:"";return`
  <div class="view view-home">
    ${p}
    <section class="hero-card${i?" hero-card-friend":""}">
      <p class="hero-eyebrow">${i?r(l.label):"通用版 · 人人可用"}</p>
      <div class="hero-titles">
        <h1 class="hero-title" id="hero-title" title="连着点三下试试">${i?c(l.titles.page):r(C.title)}</h1>
        <p class="hero-sub">${r(C.subtitle)}</p>
      </div>
      <div class="stat-row">
        <div class="stat"><b>${C.totalSteps}</b><span>步主线</span></div>
        <div class="stat"><b>3</b><span>条手机路径</span></div>
        <div class="stat"><b>${r(C.estimatedTime.replace("约 ","").replace("（可以分几天慢慢做）",""))}</b><span>预计时间</span></div>
      </div>
      <ul class="purpose-list">
        ${C.purposes.map(g=>`<li>${c(g)}</li>`).join("")}
      </ul>
      <div class="hero-actions">
        <button class="btn btn-primary" type="button" data-action="start">${i?"继续我的专属流程":"开始教程"} <span aria-hidden="true">→</span></button>
        ${s?`<button class="btn btn-ghost" type="button" data-action="resume">继续上次进度 · ${n.done}/${n.total}</button>`:""}
      </div>
      ${t.os?`<p class="hero-current">当前路径：${Te(t.os)}${i?"（朋友模式自动选择鸿蒙）":""}</p>`:""}
    </section>

    ${m}

    <section class="progress-card" id="progress-card">
      <div class="progress-head">
        <h3>${i?c(l.titles.progress):"总进度"}</h3>
        <span class="progress-num"><b id="progress-done">${n.done}</b> / <span id="progress-total">${n.total}</span> 项</span>
      </div>
      <div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${n.percent}">
        <div class="progress-fill" id="progress-fill" style="width:${n.percent}%"></div>
      </div>
      <p class="progress-note">${n.total?`${n.percent}% 完成`:"先选好手机系统，就会出现对应的勾选项。"}</p>
    </section>

    <section class="prep-card">
      <h3 class="section-title">🎒 提前准备的东西</h3>
      <div class="prep-grid">
        ${C.prepItems.map(g=>`<div class="prep-item"><span class="prep-emoji">${g.icon}</span><div><b>${c(g.text)}</b><p>${c(g.note)}</p></div></div>`).join("")}
      </div>
      <p class="cost-note">💰 ${c(C.costNote)}</p>
    </section>

    <section class="map-card">
      <h3 class="section-title">🗺️ 通关地图（七步主线）</h3>
      <ol class="map-list">
        ${E.steps.map(g=>(K(g,{mode:t.mode,os:t.os??"android"}),`<li><span class="map-no">${g.no}</span><span class="map-name">${c(g.title)}</span>${H(g.device)}</li>`)).join("")}
      </ol>
    </section>

    ${i?`<section class="egg-card">
        <h3 class="section-title">${c(l.extra.title)}</h3>
        <ul class="egg-list">${l.extra.items.map(g=>`<li>${c(g)}</li>`).join("")}</ul>
      </section>`:""}

    <footer class="site-foot">
      <p>本教程基于作者实测流程整理，界面截图来自实际操作。软件界面与链接会更新，遇到对不上的地方先看每一步的「卡住了再看」。</p>
      <div class="foot-actions">
        ${i?'<button class="btn btn-mini" type="button" data-action="leave-friend">返回通用版</button>':""}
        <button class="btn btn-mini btn-danger" type="button" data-action="reset">重置全部进度</button>
      </div>
    </footer>
  </div>`}function Ie(e){const{state:t,theme:o,progress:n}=e,s=$(t.mode),i=t.os??"android",l=o;if(!t.os&&!s)return`
      <div class="view view-steps">
        <section class="need-os">
          <h2>先选一下你的手机系统</h2>
          <p>后面只给你看对应步骤，不绕弯路 📱</p>
          ${le({title:"",intro:""})}
        </section>
      </div>`;const p=E.steps.map(m=>Le(m,e,{hidePicker:!0}));return`
  <div class="view view-steps">
    ${s?`<section class="friend-banner">${c(l.welcome.title)}<span class="welcome-badge">${r(l.welcome.badge)}</span></section>`:""}
    <section class="os-switcher" id="os-switcher">
      <div class="os-switcher-head">
        <span class="os-switcher-label">${s?"手机系统":"你的手机系统"}</span>
        ${s?'<span class="os-locked">🔒 已锁定为鸿蒙路径（朋友模式自动选择）</span>':""}
      </div>
      <div class="os-tabs" role="tablist">
        ${D.map(m=>{const g=m.key===i,y=s?"locked":g?"active":"peek";return`<button class="os-tab os-${r(m.key)} is-${y}" type="button" data-set-os="${r(m.key)}" ${s?'aria-disabled="true"':""}>${m.emoji} ${r(m.label)}${g?" ✓":""}</button>`}).join("")}
      </div>
      ${s?"":'<p class="os-switcher-note">默认只展开当前系统的路径；点另外两个标签可以临时看一眼，不会把三份教程堆在一起。</p>'}
    </section>

    <div class="steps-list" id="steps-list">
      ${p.join("")}
    </div>

    <footer class="site-foot">
      <div class="foot-progress">
        <span>总进度 <b id="progress-done">${n.done}</b> / <span id="progress-total">${n.total}</span></span>
        <div class="progress-bar slim"><div class="progress-fill" id="progress-fill" style="width:${n.percent}%"></div></div>
      </div>
      <div class="foot-actions">
        <button class="btn btn-mini" type="button" data-action="home">回到首页</button>
        ${s?'<button class="btn btn-mini" type="button" data-action="leave-friend">返回通用版</button>':""}
        <button class="btn btn-mini btn-danger" type="button" data-action="reset">重置全部进度</button>
      </div>
    </footer>
  </div>`}function Le(e,t,o={}){const{state:n}=t,s=K(e,{mode:n.mode,os:n.os??"android"}),i=s.checks??[],l=n.done?.[n.mode]?.[n.os??"android"]??{},p=i.filter(u=>l[u.id]).length,m=i.length>0&&p===i.length,g=(s.why??[]).slice(0,3),y=(s.figureAfter??[]).map(u=>A(u.src,u.alt,u.caption)).join("");return`
  <article class="step-card ${m?"is-done":""}" id="${r(e.id)}" data-step="${r(e.id)}">
    <header class="step-head">
      <span class="step-no">${e.no}</span>
      <div class="step-head-text">
        <h2 class="step-title">${c(e.title)}</h2>
        <div class="step-meta">${H(e.device)}${i.length?`<span class="step-count">${p}/${i.length} 已勾选</span>`:""}</div>
      </div>
      <button class="step-toggle" type="button" data-toggle-step="${r(e.id)}" aria-expanded="true" aria-label="折叠或展开这一步">▾</button>
    </header>

    <div class="step-body">
      <section class="sec sec-goal">
        <h3>这一步要做什么</h3>
        <p>${c(s.goal)}</p>
      </section>

      <section class="sec sec-why">
        <h3>为什么要做</h3>
        <ul>${g.map(u=>`<li>${c(u)}</li>`).join("")}</ul>
      </section>

      ${(s.blocks??[]).map(u=>U(u,o)).join("")}

      ${s.figure?A(s.figure.src,s.figure.alt,s.figure.caption):""}
      ${y}

      <section class="sec sec-success">
        <h3>做对后会看到</h3>
        <ul class="success-list">${(s.success??[]).map(u=>`<li>${c(u)}</li>`).join("")}</ul>
      </section>

      <section class="sec sec-check">
        <h3>我完成了</h3>
        <div class="check-list">
          ${i.map(u=>`
            <label class="check-item ${l[u.id]?"is-checked":""}">
              <input type="checkbox" data-check="${r(u.id)}" ${l[u.id]?"checked":""} />
              <span class="check-box" aria-hidden="true">✓</span>
              <span class="check-text">${c(u.text)}</span>
            </label>`).join("")}
        </div>
      </section>

      ${(s.stuck??[]).length?`<details class="stuck">
              <summary>🙋 卡住了再看（${s.stuck.length} 条）</summary>
              <div class="stuck-body">
                ${s.stuck.map(u=>`
                  <div class="stuck-item">
                    <p class="stuck-q">${c(u.q)}</p>
                    <p class="stuck-a">${c(u.a)}</p>
                    ${u.quote?`<blockquote class="stuck-quote">${r(u.quote)}</blockquote>`:""}
                    ${u.quoteNote?`<p class="stuck-note">${c(u.quoteNote)}</p>`:""}
                  </div>`).join("")}
                ${(s.figuresStuck??[]).map(u=>A(u.src,u.alt,u.caption)).join("")}
                ${s.figureStuck?A(s.figureStuck.src,s.figureStuck.alt,s.figureStuck.caption):""}
              </div>
            </details>`:""}
    </div>
  </article>`}function Oe(e){const{theme:t,state:o}=e,n=$(o.mode),s=t,i=n?s.finish.title:"全部通关！🎉",l=n?s.finish.text:"全部通关！🎉 欢迎来到奇妙的 Codex 世界。现在，把你的第一个任务大胆交给 Agent 吧！",p=n?s.finish.badge:"通关徽章 · 通用版";return`
  <div class="modal-backdrop" data-action="close-finish">
    <div class="finish-card" role="dialog" aria-modal="true" aria-label="通关">
      <div class="finish-badge">🏅</div>
      <h2>${c(i)}</h2>
      <p>${c(l)}</p>
      <p class="finish-badge-name">${r(p)}</p>
      <div class="finish-actions">
        <button class="btn btn-primary" type="button" data-action="close-finish">收下这份祝贺</button>
        <button class="btn btn-ghost" type="button" data-action="celebrate-again">再来一次特效</button>
      </div>
      <p class="finish-foot">继续用起来吧 —— 每次开工前记得打开网络工具。</p>
    </div>
  </div>`}function Ve(e){const{state:t,theme:o,progress:n}=e,s=$(t.mode),i=s?o.label:"通用版";return`
  <header class="site-head" id="site-head">
    <div class="head-inner">
      <button class="brand" type="button" data-action="home">
        <span class="brand-mark">🚀</span>
        <span class="brand-text">
          <b>${s?c(o.titles.page):r(C.title)}</b>
          <small>${s?r(o.card.tagline):"国内新手 · 七步通关"}</small>
        </span>
      </button>
      <div class="head-right">
        <span class="mode-pill mode-${r(t.mode)}">${r(i)}</span>
        ${s?'<button class="btn btn-mini" type="button" data-action="leave-friend">返回通用版</button>':""}
      </div>
    </div>
    <div class="head-progress">
      <div class="head-progress-bar"><div class="head-progress-fill" style="width:${n.percent}%"></div></div>
      <span class="head-progress-text">${n.done}/${n.total}</span>
    </div>
  </header>`}function Be(){return`
  <div class="modal-backdrop secret-backdrop" data-action="close-secret">
    <form class="secret-card" id="secret-form" data-role="secret-form">
      <p class="secret-title">🔐 暗号入口</p>
      <p class="secret-hint">输入暗号，解锁专属版本（连着点三下标题才会出现这里）</p>
      <input
        id="secret-input"
        class="secret-input"
        type="text"
        name="code"
        autocomplete="off"
        autocapitalize="off"
        spellcheck="false"
        maxlength="16"
        placeholder="在这里输入暗号…"
        aria-label="暗号"
      />
      <p class="secret-msg" id="secret-msg" role="status"></p>
      <div class="secret-actions">
        <button class="btn btn-primary" type="button" data-action="secret-submit">按 Enter 进入</button>
        <button class="btn btn-ghost" type="button" data-action="close-secret">先不要</button>
      </div>
    </form>
  </div>`}function Ne(e,t){return`
  <div class="modal-backdrop zoom-backdrop" data-action="close-zoom">
    <div class="zoom-card">
      <img src="${r(e)}" alt="${r(t??"")}" />
      <button class="zoom-close" type="button" data-action="close-zoom" aria-label="关闭">✕</button>
    </div>
  </div>`}function He(){return`
  <div class="modal-backdrop" data-action="close-reset">
    <div class="confirm-card" role="dialog" aria-modal="true" aria-label="重置确认">
      <h3>确定要重置全部进度吗？</h3>
      <p>通用版、zbh、cbz 的勾选都会被清空，这个操作没法撤销。</p>
      <div class="confirm-actions">
        <button class="btn btn-danger" type="button" data-action="reset-confirm">确定重置</button>
        <button class="btn btn-ghost" type="button" data-action="close-reset">我再想想</button>
      </div>
    </div>
  </div>`}const Q={general:["#ff6a00","#ffd166","#22c55e","#3b82f6","#ec4899"],zbh:["#a855f7","#6366f1","#22d3ee","#e879f9","#818cf8"],cbz:["#14b8a6","#0ea5e9","#facc15","#22d3ee","#f59e0b"]};function F(e,t="general",o=5200){if(!e)return;if(ae()){e.dataset.reduced="true";return}const n=Q[t]??Q.general,s=t==="general"?90:120,i=document.createDocumentFragment();for(let g=0;g<s;g++){const y=document.createElement("i");y.className="fx-confetti";const u=6+Math.random()*8;y.style.cssText=`
      left:${Math.random()*100}%;
      width:${u}px;
      height:${u*(.5+Math.random())}px;
      background:${n[g%n.length]};
      animation-duration:${2.4+Math.random()*2.6}s;
      animation-delay:${Math.random()*1.2}s;
      transform:rotate(${Math.random()*360}deg);
      border-radius:${Math.random()>.6?"50%":"2px"};
    `,i.appendChild(y)}const l=t==="general"?26:40;for(let g=0;g<l;g++){const y=document.createElement("i");y.className=t==="cbz"?"fx-spark fx-spark-cbz":"fx-spark",y.style.cssText=`
      left:${Math.random()*100}%;
      top:${Math.random()*60+20}%;
      animation-duration:${1.6+Math.random()*2.2}s;
      animation-delay:${Math.random()*2}s;
      color:${n[g%n.length]};
    `,y.textContent=t==="zbh"?"✦":t==="cbz"?"⚡":"✧",i.appendChild(y)}const p=document.createElement("div");p.className=`fx-glow fx-glow-${t}`,i.appendChild(p),e.appendChild(i);const m=setTimeout(()=>{e.innerHTML=""},o);return()=>{clearTimeout(m),e.innerHTML=""}}function Re(e){!e||ae()||(e.classList.remove("pop"),e.offsetWidth,e.classList.add("pop"))}const h=v(document,"#app"),I=v(document,"#fx-layer");let d=ve(window.localStorage),f=null,T=0,ee=null,k=null,G="";function De(){return{state:d,theme:Ce(d.mode),progress:q(d),anyProgress:Pe(d),os:d.os}}function ce(){$e(window.localStorage,d)}function re(){document.body.dataset.mode=d.mode,document.body.dataset.os=d.os??"none"}function b({scrollTo:e}={}){const t=window.scrollY;re();const o=De(),n=Ve(o),s=d.view==="steps"?Ie(o):qe(o);h.innerHTML=`${n}<main class="site-main">${s}</main>`;const i=!!d.os||$(d.mode);for(const l of w(h,"[data-picker]"))i?l.setAttribute("hidden",""):l.removeAttribute("hidden");if(f?.type==="secret"&&h.appendChild(O(Be())),f?.type==="zoom"&&h.appendChild(O(Ne(f.src,f.alt))),f?.type==="reset"&&h.appendChild(O(He())),f?.type==="finish"&&h.appendChild(O(Oe(o))),f?.type==="secret"&&v(h,"#secret-input")?.focus(),e){const l=v(h,e);l&&l.scrollIntoView({behavior:"smooth",block:"start"})}else window.scrollTo({top:t,behavior:"auto"});ce()}function O(e){const t=document.createElement("template");return t.innerHTML=e.trim(),t.content.firstElementChild}function Fe(){const e=q(d),t=`${d.mode}:${d.os}`;if(e.complete&&G!==t){G=t,f={type:"finish"},b();const o=$(d.mode)?d.mode:"general";return k=F(I,o),S(40),!0}return!e.complete&&G===t&&(G=""),!1}h.addEventListener("click",e=>{const t=e.target,o=t.closest("[data-zoom]");if(o){f={type:"zoom",src:o.dataset.zoom,alt:o.dataset.zoomAlt},b();return}const n=t.closest("[data-copy]");if(n){const m=n.dataset.copy,g=()=>P("订阅地址已复制 ✅");navigator.clipboard?.writeText?navigator.clipboard.writeText(m).then(g,()=>te(m,g)):te(m,g);return}const s=t.closest("[data-pick-os]");if(s){X(d,s.dataset.pickOs),d.view="steps",S(),b({scrollTo:"#os-switcher"});return}const i=t.closest("[data-set-os]");if(i){if(d.osLocked){P("朋友模式已自动选择鸿蒙路径 🔒");return}X(d,i.dataset.setOs),S(),b({scrollTo:"#os-switcher"});return}const l=t.closest("[data-toggle-step]");if(l){const g=l.closest(".step-card").classList.toggle("is-collapsed");l.setAttribute("aria-expanded",String(!g));return}const p=t.closest("[data-action]");if(!p){t.classList.contains("modal-backdrop")&&R();return}switch(p.dataset.action){case"start":{!d.os&&!$(d.mode)?(d.view="steps",b({scrollTo:"#os-picker"}),P("先选一下你的手机系统，后面只给你看对应步骤，不绕弯路 📱")):(d.view="steps",b({scrollTo:"#step1"})),S();break}case"resume":{d.view="steps",b({scrollTo:"#step1"});break}case"home":{d.view="home",b(),window.scrollTo({top:0,behavior:"smooth"}),k?.();break}case"leave-friend":{ne(d,"general"),d.view="home",f=null,b(),P("已返回通用版，进度都还在 ✅");break}case"reset":{f={type:"reset"},b();break}case"reset-confirm":{d=Ae(d),f=null,G="",b(),P("进度已重置");break}case"secret-submit":{de();break}case"close-reset":case"close-secret":case"close-zoom":case"close-finish":{if(p.dataset.action==="close-finish"&&p.classList.contains("finish-card"))return;R();break}case"celebrate-again":{const m=$(d.mode)?d.mode:"general";k?.(),k=F(I,m);break}}});h.addEventListener("change",e=>{const t=e.target.closest("[data-check]");if(!t)return;we(d,t.dataset.check,t.checked);const o=t.closest(".check-item");o?.classList.toggle("is-checked",t.checked),t.checked&&(Re(o),S(8)),_e(),ce(),ge(t.closest(".step-card")),Fe()||Ye(t.closest(".step-card"))});function de(){const e=v(h,"#secret-form");if(!e)return;const t=v(e,"#secret-input"),o=v(e,"#secret-msg"),n=t?.value??"";if(Se(n)){const s=n.trim().toLowerCase();ne(d,s),d.view="home",f=null,G="",b(),k?.(),k=F(I,s,3600),P(`暗号正确，欢迎回来，${s} ${s==="zbh"?"🌌":"⚡"}`);return}o&&(o.textContent=ze(n),o.classList.remove("shake"),o.offsetWidth,o.classList.add("shake"),t?.select())}h.addEventListener("keydown",e=>{e.key==="Enter"&&e.target.closest("#secret-input")&&(e.preventDefault(),de())});h.addEventListener("click",e=>{e.target.closest("#hero-title")&&(T+=1,clearTimeout(ee),ee=setTimeout(()=>{T=0},900),T>=3&&(T=0,f={type:"secret"},b(),S(20)))});document.addEventListener("keydown",e=>{e.key==="Escape"&&f&&R()});h.addEventListener("click",e=>{e.target.classList?.contains("modal-backdrop")&&R()});function R(){f=null,b()}function _e(){const e=q(d);for(const o of w(h,"#progress-done"))o.textContent=String(e.done);for(const o of w(h,"#progress-total"))o.textContent=String(e.total);for(const o of w(h,"#progress-fill"))o.style.width=`${e.percent}%`;const t=v(h,".progress-bar");t&&t.setAttribute("aria-valuenow",String(e.percent));for(const o of w(h,".head-progress-fill"))o.style.width=`${e.percent}%`;for(const o of w(h,".head-progress-text"))o.textContent=`${e.done}/${e.total}`}function ge(e){if(!e)return;const t=E.steps.find(p=>p.id===e.dataset.step);if(!t)return;const o=d.os??"android",n=d.done?.[d.mode]?.[o]??{};(t.checks??[]).filter(p=>!0);const s=w(e,"[data-check]").map(p=>p.dataset.check),i=s.filter(p=>n[p]).length,l=v(e,".step-count");l&&(l.textContent=`${i}/${s.length} 已勾选`),e.classList.toggle("is-done",s.length>0&&i===s.length)}function Ye(e){ge(e)}function te(e,t){try{const o=document.createElement("textarea");o.value=e,o.setAttribute("readonly",""),o.style.cssText="position:fixed;top:-1000px;opacity:0",document.body.appendChild(o),o.select(),document.execCommand("copy"),document.body.removeChild(o),t()}catch{P("复制失败，请手动长按选中地址")}}let oe=null;function P(e){let t=v(document,".flash-bar");t||(t=document.createElement("div"),t.className="flash-bar",document.body.appendChild(t)),t.innerHTML=`<span>${r(e)}</span>`,t.classList.add("is-on"),clearTimeout(oe),oe=setTimeout(()=>t.classList.remove("is-on"),3200)}function Ue(){re(),b(),$(d.mode)&&(k=F(I,d.mode,3600)),q(d).complete&&(G=`${d.mode}:${d.os}`)}Ue();window.__CODEX_TUTORIAL__={get state(){return d},progress:()=>q(d),steps:()=>E.steps,friendShared:()=>N,links:()=>V,modes:z,setModal(e){f=e,b()},hardReset(){return d=M(),f=null,G="",T=0,k?.(),I.innerHTML="",b(),d}};
