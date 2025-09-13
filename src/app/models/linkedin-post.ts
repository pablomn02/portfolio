export interface LinkedInPost {
  id: number;
  title: string;
  content: string;
  excerpt: string;
  imageUrl?: string;
  publishedDate: Date;
  linkedinUrl: string;
  likes: number;
  comments: number;
  shares: number;
  tags: string[];
  category: 'tech' | 'career' | 'project' | 'learning' | 'thoughts';
}
