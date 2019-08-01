import { Component, OnInit, Input } from '@angular/core';
import { IBlog } from 'src/app/cores/models/blog/blog.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() blog: IBlog;

  constructor(private router: Router) { }

  ngOnInit() {}

  openBlog = () => {
    this.router.navigate(['/blog', this.blog.categoryId, this.blog.id]);
  }
}
