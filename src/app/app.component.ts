import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/cores/services/theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'blogs';

  constructor(
    private themeService: ThemeService,
  ) {}

  ngOnInit() {
    this.themeService.setActiveTheme();
  }
}
