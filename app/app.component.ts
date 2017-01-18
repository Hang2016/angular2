import { Component } from '@angular/core';
import { RedditApp } from './app.reddit';
@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
    <ul>
      <li *ngFor="let name of names">Hello {{ name }}</li>
    </ul>
    <reddit></reddit>
  `,
})
export class AppComponent  { 
  name = 'Hang'; 
  names = [ 'xiao' , 'sb', 'hang' ,'chen'];

}
