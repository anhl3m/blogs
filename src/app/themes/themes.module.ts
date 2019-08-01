import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule, NZ_I18N, en_US, NZ_ICONS } from 'ng-zorro-antd';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { HeaderComponent } from './components';
import { LayoutComponent } from './layout/layout.component';
import { CardComponent } from './components/card/card.component';
import { ListCardComponent } from './components/list-card/list-card.component';

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key]);


const COMPONENTS = [
  HeaderComponent,
  LayoutComponent,
  CardComponent,
  ListCardComponent
];

const MODULES = [
  CommonModule,
  RouterModule,
  NzGridModule,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES, NgZorroAntdModule],
  exports: [...COMPONENTS, ...MODULES],
  providers   : [
    { provide: NZ_I18N, useValue: en_US },
    { provide: NZ_ICONS, useValue: icons }
  ],
})
export class ThemesModule { }
