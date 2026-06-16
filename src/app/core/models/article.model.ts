export interface Article {
  title: string;
  slug: string;
  description: string;
  category: string;
  tags: string[];
  publishedAt: string;
  author: string;
  featured: boolean;
  html: string;
  excerpt: string;
}