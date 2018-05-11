import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../article.model';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {
  @Input() selectedArticle;

  constructor() { }

  ngOnInit() {
  }

}
