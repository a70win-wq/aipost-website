import type { PricingPlan, FAQItem, ClientCase } from '@/types';

const zh = {
  // ===== 全局 =====
  global: {
    brandName: 'AIPOST',
    nav: {
      home: '首頁',
      pricing: '價格',
      cta: '立即開始',
    },
    footer: {
      description: 'AI 全自動化發post到 IG / FB',
      product: '產品',
      productLinks: {
        pricing: '價格',
        start: '立即開始',
      },
      company: '公司',
      companyLinks: {
        terms: '服務條款',
        privacy: '隱私政策',
        contact: '聯絡我們',
      },
      contactEmail: 'hello@aipost.com',
      copyright: '© 2026 AIPOST. All rights reserved.',
    },
    pricing: {
      taskDefinition: '1 個內容任務 = 1 個主題 + IG 版本 + FB 版本 + Hashtag + 排程',
      monthly: '月費',
      annual: '年費',
      save: '節省 20%',
      perMonth: '/月',
      popularBadge: '最受歡迎',
      cta: '立即訂閱',
    },
    trust: {
      cancelAnytime: '可隨時取消',
      securePayment: '信用卡安全付款',
    },
    seo: {
      home: {
        title: 'AIPOST｜AI 自動生成 IG / FB 內容與排程',
        description: 'AIPOST 幫香港小店和品牌生成 IG / FB 貼文、安排排程，讓社交內容穩定上線。',
      },
      pricing: {
        title: '價格｜AIPOST 月費訂閱方案',
        description: '查看 AIPOST Starter、Growth、Pro 月費及年費方案。直接選方案開始使用。',
      },
      terms: {
        title: '服務條款｜AIPOST',
        description: 'AIPOST 服務條款、取消訂閱、付款方式、帳戶安全與隱私政策摘要。',
      },
    },
  },

  // ===== Hero =====
  hero: {
    eyebrow: 'AI 社交內容營運平台',
    badges: ['AI 生成文案', 'IG / FB 雙平台', '信用卡月費訂閱'],
    title: '每日 IG / FB 內容 交俾 AI 自動完成',
    titleLead: '每日 IG / FB 內容',
    titleEmphasis: '交俾 AI 穩定完成',
    titleRest: '由主題到自動發佈，你只需睇返自己 IG 就得。',
    subtitle: 'AIPOST 幫你生成貼文、改寫平台語氣、安排排程，讓品牌穩定出內容，不再臨急諗 Post。',
    ctaPrimary: '立即開始',
    ctaSecondary: '查看價格',
    fineText: 'HK$99/月起 ｜ 支援信用卡 ｜ 可隨時取消',
    proof: ['直接選方案開始'],
    stats: [
      { value: '2x', label: 'IG / FB 版本' },
      { value: '30', label: '每月內容任務' },
      { value: '24/7', label: '排程保持上線' },
    ],
  },

  // ===== IG 真实案例 =====
  igCases: [
    {
      id: 'choliverhk',
      handle: '@choliverhk',
      igUrl: 'https://www.instagram.com/choliverhk/',
      categoryZh: '美容/個人品牌',
      categoryEn: 'Beauty / Personal Brand',
      descriptionZh: '穩定每日出 Story + Post，品牌形象一致，互動率提升',
      descriptionEn: 'Daily Stories & Posts with consistent branding and improved engagement',
    },
  ],

  // ===== 痛点 =====
  painPoints: {
    label: '常見問題',
    title: '做小生意的你，係咪都面對緊呢啲問題？',
    items: [
      {
        icon: 'Lightbulb',
        title: '唔知出咩 Post',
        description: '每日要諗新內容好頭痛？靈感枯竭、重複又重複，粉絲開始覺得悶。',
      },
      {
        icon: 'Clock',
        title: '冇時間經營',
        description: '創業已經夠忙，仲要抽時間寫 Post、改圖、諗 hashtag？',
      },
      {
        icon: 'TrendingDown',
        title: '出 Post 唔穩定',
        description: '一時出好多、一時消失幾星期，品牌形象唔一致，演算法唔鍾意。',
      },
    ],
  },

  // ===== 功能 =====
  features: {
    label: '功能特色',
    title: '一站搞定社交媒體內容營運',
    items: [
      { id: 'dual-platform', title: '雙平台版本自動生成', description: '1 個主題 → IG 短版 + FB 完整版，自動適配平台語氣', color: 'pink', size: 'large' },
      { id: 'hashtag', title: '智能 Hashtag', description: 'AI 根據內容自動生成最佳 hashtag 組合，提高觸及率', color: 'orange', size: 'default' },
      { id: 'tone', title: '品牌語氣設定', description: '專業、親切、銷售型、教育型... 設定一次，所有內容自動跟從', color: 'pink', size: 'default' },
    ],
  },

  // ===== 價格 =====
  pricingPlans: [
    { id: 'starter', nameZh: 'Starter', nameEn: 'Starter', priceMonthly: 99, priceAnnual: 79, tasksZh: '10 個內容任務', tasksEn: '10 content tasks', targetZh: '小店 / 個人品牌', targetEn: 'Small shops / Personal brands', popular: false, featuresZh: ['10 個內容任務', 'IG + FB 雙版本', 'AI Hashtag 生成', '內容排程月曆', '品牌語氣設定'], featuresEn: ['10 content tasks', 'IG + FB dual versions', 'AI Hashtag generation', 'Content scheduling calendar', 'Brand tone settings'] },
    { id: 'growth', nameZh: 'Growth', nameEn: 'Growth', priceMonthly: 199, priceAnnual: 159, tasksZh: '20 個內容任務', tasksEn: '20 content tasks', targetZh: '穩定經營品牌', targetEn: 'Growing brands', popular: true, featuresZh: ['20 個內容任務', 'IG + FB 雙版本', 'AI Hashtag 生成', '內容排程月曆', '品牌語氣設定', '優先客服支援'], featuresEn: ['20 content tasks', 'IG + FB dual versions', 'AI Hashtag generation', 'Content scheduling calendar', 'Brand tone settings', 'Priority support'] },
    { id: 'pro', nameZh: 'Pro', nameEn: 'Pro', priceMonthly: 299, priceAnnual: 239, tasksZh: '30 個內容任務', tasksEn: '30 content tasks', targetZh: '每日曝光品牌', targetEn: 'Daily exposure brands', popular: false, featuresZh: ['30 個內容任務', 'IG + FB 雙版本', 'AI Hashtag 生成', '內容排程月曆', '品牌語氣設定', '優先客服支援', '數據分析報告'], featuresEn: ['30 content tasks', 'IG + FB dual versions', 'AI Hashtag generation', 'Content scheduling calendar', 'Brand tone settings', 'Priority support', 'Analytics reports'] },
  ] as PricingPlan[],

  // ===== FAQ =====
  faqItems: [
    { questionZh: 'AIPOST 會自動發佈到我的 IG / FB 嗎？', questionEn: 'Will AIPOST automatically publish to my IG / FB?', answerZh: 'AIPOST 會根據你設定的排程自動發佈內容到 IG / FB。', answerEn: 'Yes! AIPOST automatically publishes to IG / FB on your schedule.' },
    { questionZh: '我的帳戶安全嗎？', questionEn: 'Is my account safe?', answerZh: 'AIPOST 完全符合平台政策，不會儲存你的社交平台密碼。', answerEn: 'AIPOST is fully compliant with platform policies and never stores your passwords.' },
    { questionZh: '可以隨時取消訂閱嗎？', questionEn: 'Can I cancel anytime?', answerZh: '當然可以！無合約束縛，一鍵取消，下月停止扣款。', answerEn: 'Absolutely! No contracts, cancel with one click.' },
    { questionZh: 'AI 生成的內容質素如何？', questionEn: 'How good is AI-generated content?', answerZh: 'AIPOST 使用最新 AI 模型，貼近真人語氣，可設定品牌風格，發佈前可編輯。', answerEn: 'AIPOST uses the latest AI models with natural tone, customizable to your brand voice.' },
    { questionZh: '支援什麼語言？', questionEn: 'What languages are supported?', answerZh: '目前支援繁體中文和英文內容生成。', answerEn: 'Currently supporting Traditional Chinese and English.' },
  ] as FAQItem[],

  // ===== 客人案例 =====
  clientCases: [
    { id: 'beauty', categoryZh: '美容院', categoryEn: 'Beauty Salon', topicZh: '夏日護膚優惠', topicEn: 'Summer Skincare Promo', igCaptionZh: '☀️ 夏日護膚不可少！保濕 + 防晒一步到位 💧 限時買一送一 🔥\n📍 中環店\n\n#夏日護膚 #美容優惠 #香港美容 #aipost', igCaptionEn: '☀️ Summer skincare essentials! Hydrate + Protect in one step 💧 Buy 1 Get 1 FREE 🔥\n📍 Central Store\n\n#SummerSkincare #BeautyPromo #HKBeauty #aipost', fbCaptionZh: '【夏日護膚優惠】保濕防晒一步到位，限時買一送一！📍 中環店', fbCaptionEn: '【Summer Skincare Promo】Hydrate & Protect, Buy 1 Get 1 FREE! 📍 Central', hashtagsZh: '#夏日護膚 #美容優惠 #香港美容', hashtagsEn: '#SummerSkincare #BeautyPromo #HKBeauty' },
    { id: 'coffee', categoryZh: '咖啡店', categoryEn: 'Coffee Shop', topicZh: '推出全新手工咖啡系列', topicEn: 'New Handcrafted Coffee Series', igCaptionZh: '☕ 手工咖啡新登場！每一杯都係匠心沖製 ✨ 新品限時優惠 🔥\n📍 旺角旗艦店\n\n#手工咖啡 #咖啡控 #香港美食 #aipost', igCaptionEn: '☕ New handcrafted coffee! Every cup is artisan-brewed ✨ Launch offer now live 🔥\n📍 Mong Kok Flagship\n\n#HandcraftedCoffee #CoffeeLovers #HKFood #aipost', fbCaptionZh: '【全新手工咖啡系列隆重登場】從選豆到沖製精心設計，新品限時優惠！📍 旺角旗艦店', fbCaptionEn: '【New Handcrafted Coffee Series】From bean to brew, carefully designed. Launch offer now live! 📍 Mong Kok', hashtagsZh: '#手工咖啡 #咖啡控 #香港美食', hashtagsEn: '#HandcraftedCoffee #CoffeeLovers #HKFood' },
  { id: 'education', categoryZh: '教育中心', categoryEn: 'Education Center', topicZh: '暑期課程招生', topicEn: 'Summer Course Enrollment', igCaptionZh: '📚 暑期課程招生中！STEM + 英文 + 數學 💪 早鳥減 $500 🎉\n📍 太子教學中心\n\n#暑期課程 #STEM教育 #香港補習 #aipost', igCaptionEn: '📚 Summer courses enrolling now! STEM + English + Math 💪 Early bird $500 off 🎉\n📍 Prince Edward\n\n#SummerCourses #STEMEducation #HKLearning #aipost', fbCaptionZh: '【暑期課程招生】STEM × 英文 × 數學三合一，早鳥優惠每科減 $500！📍 太子教學中心', fbCaptionEn: '【Summer Course Enrollment】STEM × English × Math, early bird $500 off! 📍 Prince Edward', hashtagsZh: '#暑期課程 #STEM教育 #香港補習', hashtagsEn: '#SummerCourses #STEMEducation #HKLearning' },
  ] as ClientCase[],

  testimonials: {
    label: '客戶案例',
    title: '小店老闆每日少一件煩心事',
    subtitle: '用真實行業情境展示 AIPOST 如何幫品牌保持穩定曝光。',
    items: [
      {
        name: 'Lassy Chan',
        role: '美容院創辦人',
        company: '中環美容工作室',
        quote: '以前每次優惠都要臨急寫 IG 同 FB，依家我只要輸入主題就可以自動排程。',
        metric: '每週節省 4 小時',
        image: '/visuals/beauty-owner.png',
        alt: '美容院創辦人於粉色工作室的客戶情境照',
      },
      {
        name: 'Marco Lee',
        role: '咖啡店店主',
        company: '旺角咖啡店',
        quote: '新品、節日、會員優惠都可以預先排好，品牌語氣比以前穩定好多。',
        metric: '連續 30 日穩定出 Post',
        image: '/visuals/cafe-owner.png',
        alt: '咖啡店店主於咖啡吧的客戶情境照',
      },
      {
        name: 'Carmen Wong',
        role: '教育中心負責人',
        company: '太子教育中心',
        quote: '招生期要同時寫 FB 詳細版同 IG 短版，AIPOST 幫我快好多，雙平台一次搞掂。',
        metric: '雙平台內容一次完成',
        image: '/visuals/education-founder.png',
        alt: '教育中心負責人於紫色辦公室的客戶情境照',
      },
    ],
  },

  pricingPage: {
    label: '價格方案',
    title: '簡單、透明的月費訂閱',
    subtitle: '選擇適合的方案即可開始使用。',
    faqLabel: '價格常見問題',
    faqTitle: '關於付款你可能想問嘅',
  },

  // ===== Final CTA =====
  finalCTA: {
    title: '準備好讓 AI 幫你打理 IG / FB 了嗎？',
    titleLead: '準備好讓 AI',
    titleEmphasis: '打理 IG / FB 內容？',
    titleRest: '選擇方案，開始穩定出 Post。',
    subtitle: 'HK$99/月起，可隨時取消，無合約束縛。',
    cta: '立即開始',
    secondaryCta: '查看價格',
    fineText: 'HK$99/月起 ｜ 可隨時取消 ｜ 無合約束縛',
  },

  // ===== 服务条款 =====
  terms: {
    title: '服務條款',
    lastUpdated: '最後更新：2026年6月',
    sections: [
      { title: '不接受退款', content: '所有方案一经付款，不提供退款服务。请在使用前确认您选择的方案适合您的需求。' },
      { title: '取消訂閱', content: '您可以随时取消订阅。取消后，当前计费周期内仍可继续使用服务，下个计费周期开始时停止扣款。' },
      { title: '付款方式', content: '我们接受信用卡付款。月费方案按月自动续费，年费方案按年自动续费。' },
      { title: '服務範圍', content: 'AIPOST 提供 AI 内容生成及 Instagram / Facebook 排程发布服务。' },
      { title: '帳戶安全', content: 'AIPOST 不儲存您的社交平台密碼。' },
      { title: '隐私政策', content: '所有个人资料的处理均符合相关法律法规。' },
    ],
  },
};

export default zh;
