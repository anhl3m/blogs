import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IBlog } from 'src/app/cores/models/blog/blog.model';
import { BlogService } from 'src/app/cores/services/blog/blog.service';

@Component({
  selector: 'app-blog-category',
  templateUrl: './blog-category.component.html',
  styleUrls: ['./blog-category.component.scss']
})
export class BlogCategoryComponent implements OnInit, OnDestroy {
  categoryId: number;
  blogs: IBlog[] = [];

  routerParam;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blogService: BlogService) {
  }

  ngOnInit() {
    this.routerParam = this.route.paramMap.subscribe((params: any) => {
      if (params.params.categoryId) {
        this.categoryId = parseInt(params.params.categoryId);
      } else {
        this.router.navigate(['/blog', 0]);
      }
      this.initData();
    });
  }

  ngOnDestroy() {
    if (this.routerParam) {
      this.routerParam.unsubscribe();
    }
  }

  initData() {
    if (this.categoryId === 0 || !this.categoryId) {
      this.blogService.getAllBlogData().subscribe(res => this.blogs = res);
    } else {
      this.blogService.getBlogByCategory(this.categoryId).subscribe(res => this.blogs = res);
    }
  }

}
