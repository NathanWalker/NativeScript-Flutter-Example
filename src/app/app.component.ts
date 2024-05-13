import { Component } from '@angular/core'
import { registerElement } from '@nativescript/angular';
import { Flutter } from '@nativescript/flutter';
import { MenuButton } from './menu-button';

registerElement('Flutter', () => Flutter)
registerElement('MenuButton', () => MenuButton);

@Component({
  selector: 'ns-app',
  templateUrl: './app.component.html',
})
export class AppComponent {}
