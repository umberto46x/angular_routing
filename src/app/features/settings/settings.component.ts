import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-settings',
  imports: [],
  template: `
    <p>settings works!</p>
    <div>{{ theme }}</div>
  `,
  styles: ``,
})
export class SettingsComponent {
  theme: String | undefined;
  activateRoute = inject(ActivatedRoute);

  constructor() {
    console.log(this.activateRoute);
    /*  this.theme = this.activateRoute.snapshot.data['theme']; */

    this.activateRoute.data.subscribe((result) => {
      console.log(result);
      this.theme = result['theme'];
    });
  }
}
