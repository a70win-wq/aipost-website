import type { PricingPlan, FAQItem, ClientCase } from '@/types';

const en = {
  global: {
    brandName: 'AIPOST',
    nav: { home: 'Home', pricing: 'Pricing', cta: 'Get Started' },
    footer: {
      description: 'AI-powered auto-posting to Instagram & Facebook',
      product: 'Product',
      productLinks: { pricing: 'Pricing', start: 'Get Started' },
      company: 'Company',
      companyLinks: { terms: 'Terms of Service', privacy: 'Privacy Policy', contact: 'Contact Us' },
      contactEmail: 'hello@aipost.com',
      copyright: '© 2026 AIPOST. All rights reserved.',
    },
    pricing: {
      taskDefinition: '1 content task = 1 topic + IG version + FB version + Hashtags + Scheduling',
      monthly: 'Monthly', annual: 'Annual', save: 'Save 20%', perMonth: '/mo', popularBadge: 'Most Popular', cta: 'Subscribe Now',
    },
    trust: { cancelAnytime: 'Cancel anytime', securePayment: 'Secure card payment' },
    seo: {
      home: {
        title: 'AIPOST | AI Instagram & Facebook Content Scheduling',
        description: 'AIPOST helps small businesses generate IG and FB posts, schedule content, and keep their brand consistently visible.',
      },
      pricing: {
        title: 'Pricing | AIPOST Monthly Subscription Plans',
        description: 'Compare AIPOST Starter, Growth, and Pro plans. Choose a paid plan to start.',
      },
      terms: {
        title: 'Terms of Service | AIPOST',
        description: 'AIPOST terms covering subscription cancellation, payment, service scope, account security, and privacy.',
      },
    },
  },

  hero: {
    eyebrow: 'AI social content operations platform',
    badges: ['AI Content Generation', 'IG / FB Dual Platform', 'Monthly Subscription'],
    title: 'Your daily IG / FB content powered by AI',
    titleLead: 'Your daily IG / FB content',
    titleEmphasis: 'handled by AI',
    titleRest: 'From topic to auto-publish, just check your own Instagram.',
    subtitle: 'AIPOST generates posts, adapts tone for each platform, and schedules publishing — so your brand stays consistent.',
    ctaPrimary: 'Get Started', ctaSecondary: 'See Pricing',
    fineText: 'HK$99/mo | Credit card supported | Cancel anytime',
    proof: ['Choose a plan to start'],
    stats: [
      { value: '2x', label: 'IG / FB versions' },
      { value: '30', label: 'Monthly tasks' },
      { value: '24/7', label: 'Scheduled visibility' },
    ],
  },

  // ===== IG Real Cases =====
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

  painPoints: {
    label: 'Common Problems',
    title: 'Running a small business? These pain points might sound familiar.',
    items: [
      { icon: 'Lightbulb', title: 'Not sure what to post', description: 'Struggling with fresh content every day? Ideas running dry, repeating themes, followers getting bored.' },
      { icon: 'Clock', title: 'No time to manage', description: 'Running a business is busy enough. Still need to write posts, edit images, brainstorm hashtags?' },
      { icon: 'TrendingDown', title: 'Inconsistent posting', description: 'Posting a lot one week, disappearing for weeks. Algorithms don\'t favor irregular posting.' },
    ],
  },

  features: {
    label: 'Features',
    title: 'All-in-one social media content management',
    items: [
      { id: 'dual-platform', title: 'Dual platform auto-generation', description: '1 topic → IG short version + FB full version, auto-adapted', color: 'pink', size: 'large' },
      { id: 'hashtag', title: 'Smart Hashtags', description: 'AI generates optimal hashtag combinations, boosting reach', color: 'orange', size: 'default' },
      { id: 'tone', title: 'Brand Tone Settings', description: 'Professional, friendly, sales, educational... Set once, all content follows', color: 'pink', size: 'default' },
    ],
  },

  pricingPlans: [
    { id: 'starter', nameZh: 'Starter', nameEn: 'Starter', priceMonthly: 99, priceAnnual: 79, tasksZh: '10 個內容任務', tasksEn: '10 content tasks', targetZh: '小店 / 個人品牌', targetEn: 'Small shops / Personal brands', popular: false, featuresZh: ['10 個內容任務', 'IG + FB 雙版本', 'AI Hashtag 生成', '內容排程月曆', '品牌語氣設定'], featuresEn: ['10 content tasks', 'IG + FB dual versions', 'AI Hashtag generation', 'Content scheduling calendar', 'Brand tone settings'] },
    { id: 'growth', nameZh: 'Growth', nameEn: 'Growth', priceMonthly: 199, priceAnnual: 159, tasksZh: '20 個內容任務', tasksEn: '20 content tasks', targetZh: '穩定經營品牌', targetEn: 'Growing brands', popular: true, featuresZh: ['20 個內容任務', 'IG + FB 雙版本', 'AI Hashtag 生成', '內容排程月曆', '品牌語氣設定', '優先客服支援'], featuresEn: ['20 content tasks', 'IG + FB dual versions', 'AI Hashtag generation', 'Content scheduling calendar', 'Brand tone settings', 'Priority support'] },
    { id: 'pro', nameZh: 'Pro', nameEn: 'Pro', priceMonthly: 299, priceAnnual: 239, tasksZh: '30 個內容任務', tasksEn: '30 content tasks', targetZh: '每日曝光品牌', targetEn: 'Daily exposure brands', popular: false, featuresZh: ['30 個內容任務', 'IG + FB 雙版本', 'AI Hashtag 生成', '內容排程月曆', '品牌語氣設定', '優先客服支援', '數據分析報告'], featuresEn: ['30 content tasks', 'IG + FB dual versions', 'AI Hashtag generation', 'Content scheduling calendar', 'Brand tone settings', 'Priority support', 'Analytics reports'] },
  ] as PricingPlan[],

  faqItems: [
    { questionZh: 'AIPOST 會自動發佈到我的 IG / FB 嗎？', questionEn: 'Will AIPOST automatically publish?', answerZh: 'AIPOST 會根據你設定的排程自動發佈。', answerEn: 'AIPOST automatically publishes on your schedule.' },
    { questionZh: '我的帳戶安全嗎？', questionEn: 'Is my account safe?', answerZh: 'AIPOST 完全符合平台政策，不儲存密碼。', answerEn: 'AIPOST is fully compliant — we never store your passwords.' },
    { questionZh: '可以隨時取消訂閱嗎？', questionEn: 'Can I cancel anytime?', answerZh: '當然可以！無合約束縛，一鍵取消。', answerEn: 'Absolutely! No contracts, cancel with one click.' },
    { questionZh: 'AI 生成的內容質素如何？', questionEn: 'How good is AI content?', answerZh: 'AIPOST 使用最新 AI 模型，貼近真人語氣，可設定品牌風格。', answerEn: 'Latest AI models, natural tone, customizable brand voice.' },
    { questionZh: '支援什麼語言？', questionEn: 'What languages are supported?', answerZh: '目前支援繁體中文和英文。', answerEn: 'Traditional Chinese and English.' },
  ] as FAQItem[],

  clientCases: [
    { id: 'beauty', categoryZh: '美容院', categoryEn: 'Beauty Salon', topicZh: '夏日護膚優惠', topicEn: 'Summer Skincare Promo', igCaptionZh: '☀️ 夏日護膚不可少！保濕 + 防晒一步到位 💧 限時買一送一 🔥\n📍 中環店\n\n#夏日護膚 #美容優惠 #香港美容 #aipost', igCaptionEn: '☀️ Summer skincare essentials! Hydrate + Protect 💧 Buy 1 Get 1 FREE 🔥\n📍 Central Store\n\n#SummerSkincare #BeautyPromo #HKBeauty #aipost', fbCaptionZh: '【夏日護膚優惠】保濕防晒一步到位，限時買一送一！📍 中環店', fbCaptionEn: '【Summer Skincare Promo】Hydrate & Protect, Buy 1 Get 1 FREE! 📍 Central', hashtagsZh: '#夏日護膚 #美容優惠 #香港美容', hashtagsEn: '#SummerSkincare #BeautyPromo #HKBeauty' },
    { id: 'coffee', categoryZh: '咖啡店', categoryEn: 'Coffee Shop', topicZh: '推出全新手工咖啡系列', topicEn: 'New Handcrafted Coffee Series', igCaptionZh: '☕ 手工咖啡新登場！每一杯都係匠心沖製 ✨ 新品限時優惠 🔥\n📍 旺角旗艦店\n\n#手工咖啡 #咖啡控 #香港美食 #aipost', igCaptionEn: '☕ New handcrafted coffee! Artisan-brewed ✨ Launch offer now live 🔥\n📍 Mong Kok Flagship\n\n#HandcraftedCoffee #CoffeeLovers #HKFood #aipost', fbCaptionZh: '【全新手工咖啡系列隆重登場】從選豆到沖製精心設計，新品限時優惠！📍 旺角旗艦店', fbCaptionEn: '【New Handcrafted Coffee】From bean to brew. Launch offer now live! 📍 Mong Kok', hashtagsZh: '#手工咖啡 #咖啡控 #香港美食', hashtagsEn: '#HandcraftedCoffee #CoffeeLovers #HKFood' },
    { id: 'education', categoryZh: '教育中心', categoryEn: 'Education Center', topicZh: '暑期課程招生', topicEn: 'Summer Course Enrollment', igCaptionZh: '📚 暑期課程招生中！STEM + 英文 + 數學 💪 早鳥減 $500 🎉\n📍 太子教學中心\n\n#暑期課程 #STEM教育 #香港補習 #aipost', igCaptionEn: '📚 Summer courses enrolling! STEM + English + Math 💪 Early bird $500 off 🎉\n📍 Prince Edward\n\n#SummerCourses #STEMEducation #HKLearning #aipost', fbCaptionZh: '【暑期課程招生】STEM × 英文 × 數學三合一，早鳥減 $500！📍 太子教學中心', fbCaptionEn: '【Summer Course Enrollment】STEM × English × Math, early bird $500 off! 📍 Prince Edward', hashtagsZh: '#暑期課程 #STEM教育 #香港補習', hashtagsEn: '#SummerCourses #STEMEducation #HKLearning' },
  ] as ClientCase[],

  testimonials: {
    label: 'Customer Stories',
    title: 'Small business owners get one less daily headache',
    subtitle: 'Realistic industry moments showing how AIPOST helps brands keep showing up consistently.',
    items: [
      {
        name: 'Lassy Chan',
        role: 'Beauty salon founder',
        company: 'Central beauty studio',
        quote: 'Promotions used to mean rewriting IG and FB in a rush. Now I just enter the topic and it auto-schedules.',
        metric: '4 hours saved weekly',
        image: '/visuals/beauty-owner.png',
        alt: 'Beauty salon founder in a pink studio setting',
      },
      {
        name: 'Marco Lee',
        role: 'Cafe owner',
        company: 'Mong Kok cafe',
        quote: 'New products, seasonal moments, and member offers can be planned ahead with a much steadier brand voice.',
        metric: '30 days of consistent posts',
        image: '/visuals/cafe-owner.png',
        alt: 'Cafe owner behind a warm coffee bar',
      },
      {
        name: 'Carmen Wong',
        role: 'Education center lead',
        company: 'Prince Edward learning center',
        quote: 'Enrollment season needs detailed FB copy and short IG captions. AIPOST handles both platforms in one go.',
        metric: 'Two platforms from one topic',
        image: '/visuals/education-founder.png',
        alt: 'Education center founder in a purple office setting',
      },
    ],
  },

  pricingPage: {
    label: 'Pricing',
    title: 'Simple monthly subscription plans',
    subtitle: 'Choose the plan that fits your publishing rhythm.',
    faqLabel: 'Pricing FAQ',
    faqTitle: 'Questions about payment you might have',
  },

  finalCTA: {
    title: 'Ready to let AI handle your IG / FB?',
    titleLead: 'Ready for AI to handle',
    titleEmphasis: 'your IG / FB content?',
    titleRest: 'Choose a plan and start publishing consistently.',
    subtitle: 'HK$99/mo, cancel anytime, no contracts.',
    cta: 'Get Started',
    secondaryCta: 'See Pricing',
    fineText: 'HK$99/mo | Cancel anytime | No contracts',
  },

  terms: {
    title: 'Terms of Service',
    lastUpdated: 'Last updated: June 2026',
    sections: [
      { title: 'No Refunds', content: 'All plans are non-refundable once payment is processed.' },
      { title: 'Cancellation', content: 'Cancel anytime. Service continues until the end of the current billing period.' },
      { title: 'Payment Methods', content: 'We accept credit card payments (Visa/Mastercard) via Stripe.' },
      { title: 'Scope of Service', content: 'AIPOST provides AI content generation and IG/FB scheduling & publishing.' },
      { title: 'Account Security', content: 'We never store your social media passwords.' },
      { title: 'Privacy Policy', content: 'All personal data processing complies with relevant regulations.' },
    ],
  },
};

export default en;
