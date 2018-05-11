import { Injectable } from '@angular/core';
import { Article } from './article.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
@Injectable()
export class ArticleService {
  articles: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.articles = database.list('articles');
  }

  getArticles() {
    return this.articles;
  }

  addArticle(newArticle: Article) {
    this.articles.push(newArticle);
  }

  getArticleById(articleId: number) {
    // for (var i = 0; i <= ARTICLES.length - 1; i++) {
    //   if (ARTICLES[i].id === articleId) {
    //     return ARTICLES[i];
    //   }
    // }
  }

}
