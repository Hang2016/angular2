import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { RedditApp} from './app.reddit';
import { RedditArticle} from './app.reddit-article';
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
    AppComponent,
    RedditApp,
    RedditArticle
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
