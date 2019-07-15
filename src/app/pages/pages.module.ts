import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ThemesModule } from '../themes/themes.module';

const COMPONENTS = [
  PagesComponent,
  HomeComponent,
  AboutComponent,
  BlogComponent,
];

const MODULES = [
  CommonModule,
  PagesRoutingModule,
  ThemesModule,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES]
})
export class PagesModule { }
