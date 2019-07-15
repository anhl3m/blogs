import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent, FooterComponent } from './components';
import { LayoutComponent } from './layout/layout.component';

const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  LayoutComponent,
];

const MODULES = [
  CommonModule,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES],
  exports: [...COMPONENTS, ...MODULES],
})
export class ThemesModule { }
