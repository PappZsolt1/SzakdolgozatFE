import { Component, OnInit } from '@angular/core';

import { ArticleService } from '../shared/article.service';
import { Article } from '../shared/article.model';
import { calculatePageFirst } from '../../shared/calculate-page-first';
import { calculatePageLast } from '../../shared/calculate-page-last';
import { calculatePage } from '../../shared/calculate-page';

@Component({
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  articles: Article[];
  total: number;
  page = 1;
  size = 10;
  sizes = [10, 20, 30];
  pageFirst = 0;
  pageLast = 0;
  
  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.getPublishedArticles();
  }

  onSizeChaged(): void {
    this.page = calculatePage(this.page, this.size, this.total);
    this.getPublishedArticles();
  }

  onPageChanged(event: any): void {
    this.page = event.page;
    this.size = event.itemsPerPage;
    this.getPublishedArticles();
  }

  getPublishedArticles(): void {
    this.articleService.getPublishedArticles(this.page, this.size).subscribe(r => {
      this.articles = r.results; this.total = r.total;
      this.pageFirst = calculatePageFirst(this.page, this.size, this.total);
      this.pageLast = calculatePageLast(this.page, this.size, this.total);
    });
  }
}
