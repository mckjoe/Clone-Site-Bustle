import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../article.model';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css'],
  providers: [ArticleService]
})
export class EditArticleComponent implements OnInit {
  @Input() selectedArticle;

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
  }

  beginUpdatingArticle(articleToUpdate) {
    this.articleService.updateArticle(articleToUpdate);
  }

  beginDeletingArticle(articleToDelete) {
    if(confirm("Are you sure you want to delete this article?!?")) {
      this.articleService.deleteArticle(articleToDelete);
    }
  }

}
