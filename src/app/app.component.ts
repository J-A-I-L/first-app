import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <p>hehehehe2</p>
        <h1>{{title}}</h1>
        <fa-other></fa-other>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works 2!';
}
