import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemesModule } from 'src/app/themes/themes.module';
import { CategoryService } from 'src/app/cores/services/category/category.service';

import { BlogComponent } from './blog.component';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogHeaderComponent } from './blog-header/blog-header.component';
import { BlogCategoryComponent } from './blog-category/blog-category.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogService } from '../../cores/services/blog/blog.service';

@NgModule({
  declarations: [BlogComponent, BlogHeaderComponent, BlogCategoryComponent, BlogDetailComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    ThemesModule
  ],
  providers: [
    CategoryService,
    BlogService
  ]
})
export class BlogModule { }
