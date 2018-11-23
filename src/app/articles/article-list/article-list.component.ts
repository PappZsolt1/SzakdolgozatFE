import { Component, OnInit } from '@angular/core';

import { ArticleService } from '../shared/article.service';
import { Article } from '../shared/article.model';

@Component({
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  articles: Article[];
  total: number;
  page = 1;
  size = 10;

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.getPublishedArticles();
  }

  onPageChanged(event: any): void {
    this.page = event.page;
    this.size = event.itemsPerPage;
    this.getPublishedArticles();
  }

  getPublishedArticles(): void {
    this.articleService.getPublishedArticles(this.page, this.size).subscribe(r => {
      this.articles = r.results; this.total = r.total; });
  }
}
