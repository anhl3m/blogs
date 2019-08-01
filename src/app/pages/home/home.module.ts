import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogData } from 'src/app/cores/models/blog/blog.model';
import { ThemesModule } from 'src/app/themes/themes.module';
import { BlogService } from 'src/app/cores/services/blog/blog.service';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ThemesModule
  ],
  providers: [BlogService]
})
export class HomeModule { }
