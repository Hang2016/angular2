import { Component } from '@angular/core';
import { Article } from './app.article';
@Component({
  selector: 'reddit-article',
  inputs: ['article'],
  host: {
      class: 'row'
  },
  template: `
    <div class="four wide column center aligned votes">
      <div class="ui statistic">
        <div class="value">
          {{ article.votes }}
        </div>
        <div class="label">
          Points
        </div>
      </div>
    </div>
    <div class="twelve wide column">
      <a class= "ui large header" href="{{ article.link }} ">
        {{ article.title }}
      </a>
      <div class="meta">({{ article.domain() }})</div>
      <ul class="ui big horizontal list voters">
        <li class="item">
          <a href (click) = "voteUp()">
            <i class="arrow up icon"></i>
            upvote
          </a>
        </li>
        <li class="item">
          <a href (click) = "voteDown()">
            <i class="arrow down icon"></i>
            downvote
          </a>
      </ul>
    </div>
  `,
})
export class RedditArticle  { 
  article: Article;

  constructor(){
    this.article=new Article('Angular2','http://angular.io',10);
  }
  voteUp(): boolean{
    this.article.voteUp();
    return false;
  }
  voteDown(): boolean{
    this.article.voteDown();
    return false;
  }
}