import { Observable } from 'rxjs';

export interface ICategory {
  id: number;
  title: string;
}

export abstract class CategoryData {
  abstract getAllCategory(): Observable<ICategory[]>;
}
