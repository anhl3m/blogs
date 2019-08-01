import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BlogData, IBlog } from 'src/app/cores/models/blog/blog.model';

@Injectable()
export class BlogService extends BlogData {
  private http;
  constructor(http: HttpClient) {
    super();
    this.http = http;
  }

  getAllBlogData(): Observable<IBlog[]> {
    return this.http.get('assets/data/blogs.json')
    .pipe(
      map((data: any) => data.data as IBlog[])
    );
  }

  getBlogById(id: number): Observable<IBlog> {
    return this.http.get('assets/data/blogs.json')
      .pipe(
        map((data: any) => data.data.find(blog => blog.id === id))
      );
  }

  getBlogByCategory(categoryId: number): Observable<IBlog[]> {
    return this.http.get('assets/data/blogs.json')
    .pipe(
      map((data: any) => data.data.filter(blog => blog.categoryId === categoryId))
    );
  }
}
