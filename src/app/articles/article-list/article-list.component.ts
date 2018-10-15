import { Component, OnInit } from '@angular/core';

import { ArticleService } from '../shared/article.service';
import { Article } from '../shared/article.model';

@Component({
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  articles: Article[];

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.getPublishedArticles();
  }

  getPublishedArticles(): void {
    this.articleService.getPublishedArticles().subscribe(r => this.articles = r);
  }
}
