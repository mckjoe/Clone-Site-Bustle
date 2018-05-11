import { Component, OnInit } from '@angular/core';
import { Article } from '../article.model';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ArticleService]
})
export class AdminComponent implements OnInit {

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
  }

  submitForm(title: string, teaser: string, author: string, body: string, imgUrl: string) {
    let newArticle: Article = new Article(title, teaser, author, body, imgUrl);
    this.articleService.addArticle(newArticle);
  }

}
