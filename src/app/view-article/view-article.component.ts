import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Article } from '../article.model';
import { ArticleService } from '../article.service';
import { FirebaseObjectObservable } from 'angularfire2/database';
@Component({
  selector: 'app-view-article',
  templateUrl: './view-article.component.html',
  styleUrls: ['./view-article.component.css'],
  providers: [ArticleService]
})
export class ViewArticleComponent implements OnInit {
  articleId: string;
  articleToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private articleService: ArticleService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.articleId = urlParameters['id'];
    });
    this.articleToDisplay = this.articleService.getArticleById(this.articleId);
  }

}
