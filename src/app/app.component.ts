import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  template: `
    <h1>Welcome to {{title}}!</h1>

    <app-header />
  `,
  styles: [],
})
export class AppComponent {
  title = 'angular-ecomm';
}
