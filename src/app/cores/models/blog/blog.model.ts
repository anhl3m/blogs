import { Observable } from 'rxjs';

export interface IBlog {
  id: number;
  title: string;
  createDate: Date;
  image: string;
  author: string;
  description: string;
  content: string;
  categoryId: number;
}

export abstract class BlogData {
  abstract getAllBlogData(): Observable<IBlog[]>;
  abstract getBlogById(id: number): Observable<IBlog>;
  abstract getBlogByCategory(categoryId: number): Observable<IBlog[]>;
}
