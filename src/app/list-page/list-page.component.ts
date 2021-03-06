import { Component, OnInit } from '@angular/core';
import { Article } from '../article.model';
import { Router } from '@angular/router';
import { ArticleService } from '../article.service';
import { FirebaseListObservable } from 'angularfire2/database';
@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css'],
  providers: [ArticleService]
})
export class ListPageComponent implements OnInit {
  articles: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private articleService: ArticleService) { }

  ngOnInit() {
    this.articles = this.articleService.getArticles();
  }

  goToArticlePage(clickedArticle) {
    this.router.navigate(['articles', clickedArticle.$key]);
  }

}
