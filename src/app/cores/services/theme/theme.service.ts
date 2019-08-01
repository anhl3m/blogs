import { Injectable } from '@angular/core';
import { Theme, defaultTheme } from 'src/app/themes/styles';

@Injectable()
export class ThemeService {
  private active: Theme = defaultTheme;

  getActiveTheme(): Theme {
    return this.active;
  }

  setActiveTheme(): void {
    Object.keys(this.active.properties).forEach(property => {
      document.documentElement.style.setProperty(
        property,
        this.active.properties[property]
      );
    });
  }
}
