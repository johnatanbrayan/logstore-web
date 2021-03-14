import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.scss'],
})
export class AppComponent {
  year: number;
  title = 'Logstore Web';

  constructor() {
    this.year = new Date().getFullYear();
  }
}
