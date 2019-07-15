import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoresModule } from './cores/cores.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemesModule } from './themes/themes.module';

const MODULES = [
  BrowserModule,
  AppRoutingModule,
  CoresModule,
  ThemesModule
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [...MODULES],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
