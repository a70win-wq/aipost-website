export type Language = 'zh' | 'en';

export interface PricingPlan {
  id: string;
  nameZh: string;
  nameEn: string;
  priceMonthly: number;
  priceAnnual: number;
  tasksZh: string;
  tasksEn: string;
  targetZh: string;
  targetEn: string;
  popular: boolean;
  featuresZh: string[];
  featuresEn: string[];
}

export interface FAQItem {
  questionZh: string;
  questionEn: string;
  answerZh: string;
  answerEn: string;
}

export interface IgProfile {
  avatarUrl: string;
  displayName: string;
  bio: string;
  postCount: string;
  followerCount: string;
  followingCount: string;
}

export interface IgPost {
  shortcode: string;
  imageUrl: string;
  caption: string;
  likes: string;
  postUrl: string;
}

export interface IgCase {
  id: string;
  handle: string;
  igUrl: string;
  categoryZh: string;
  categoryEn: string;
  descriptionZh: string;
  descriptionEn: string;
  profile?: IgProfile;
  posts?: IgPost[];
  fetchedAt?: string;
}
