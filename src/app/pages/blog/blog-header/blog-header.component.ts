import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/cores/services/category/category.service';
import { ICategory } from 'src/app/cores/models/category/category';

@Component({
  selector: 'app-blog-header',
  templateUrl: './blog-header.component.html',
  styleUrls: ['./blog-header.component.scss']
})
export class BlogHeaderComponent implements OnInit {

  categories: ICategory[] = [];
  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getAllCategory().subscribe(res => {
      this.categories = res;
    });
  }

}
