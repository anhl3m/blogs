import { Component, OnInit, Input } from '@angular/core';
import { IBlog } from 'src/app/cores/models/blog/blog.model';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss']
})
export class ListCardComponent implements OnInit {
  @Input() blogs: IBlog[];
  constructor() { }

  ngOnInit() {
  }

  openBlog = (id: number) => {
    console.log(id);
  }

}
