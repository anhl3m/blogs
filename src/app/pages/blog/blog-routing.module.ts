import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog.component';
import { BlogCategoryComponent } from './blog-category/blog-category.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';

const routes: Routes = [
  {
    path: '', component: BlogComponent, children: [
      { path: ':categoryId', component: BlogCategoryComponent },
      { path: ':categoryId/:blogId', component: BlogDetailComponent },
      { path: '', component: BlogCategoryComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
