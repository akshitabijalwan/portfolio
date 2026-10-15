export interface ProjectMeta {
  slug: string;
  title: string;
  brand: string;
  year: string;
  industry: string;
  category: string;
  summary: string;
  coverImage: string;
  coverImageAlt: string;
  coverFit?: 'cover' | 'contain';
  role: string;
  featured: boolean;
  order: number;
}
