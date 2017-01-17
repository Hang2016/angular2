import { Component } from '@angular/core';
import { RedditApp } from './app.reddit';
import { RedditArticle } from './app.reddit-article';
@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
    <ul>
      <li *ngFor="let name of names">Hello {{ name }}</li>
    </ul>
    <reddit></reddit>
    <reddit-article></reddit-article>
  `,
})
export class AppComponent  { 
  name = 'Hang'; 
  names = [ 'xiao' , 'sb', 'hang' ,'chen'];
}
