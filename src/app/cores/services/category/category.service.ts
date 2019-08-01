import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { CategoryData, ICategory } from 'src/app/cores/models/category/category';

@Injectable()
export class CategoryService extends CategoryData {

  constructor(private http: HttpClient) {
    super();
  }

  getAllCategory(): Observable<ICategory[]> {
    return this.http.get('assets/data/categories.json')
      .pipe(map((data: any) => data.data));
  }
}
