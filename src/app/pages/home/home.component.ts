import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/cores/services/blog/blog.service';
import { IBlog } from 'src/app/cores/models/blog/blog.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  blogs: IBlog[] = [];
  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogService.getAllBlogData().subscribe(blogs => {
      this.blogs = blogs;
    });
  }

}
