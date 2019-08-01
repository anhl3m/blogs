import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBlog } from 'src/app/cores/models/blog/blog.model';
import { BlogService } from 'src/app/cores/services/blog/blog.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit, OnDestroy {
  blog: IBlog;
  routeParam;
  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService
  ) { }

  ngOnInit() {
    this.routeParam = this.route.paramMap.subscribe((params: any) => {
      if (params.params.blogId) {
        const id = parseInt(params.params.blogId);
        this.blogService.getBlogById(id).subscribe(blog => this.blog = blog);
      }
    });
  }

  ngOnDestroy() {
    if (this.routeParam) {
      this.routeParam.unsubscribe();
    }
  }

}
