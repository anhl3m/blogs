import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemesModule } from '../themes/themes.module';

const COMPONENTS = [
  PagesComponent,
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
