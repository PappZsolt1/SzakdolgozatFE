import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ArticleService } from '../shared/article.service';
import { Article } from '../shared/article.model';

@Component({
  selector: 'app-saved-article-list',
  templateUrl: './saved-article-list.component.html',
  styleUrls: ['./saved-article-list.component.css']
})
export class SavedArticleListComponent implements OnInit {

  articles: Article[];

  constructor(private router: Router, private articleService: ArticleService) { }

  ngOnInit() {
    this.getSavedArticles();
  }

  getSavedArticles(): void {
    this.articleService.getSavedArticles().subscribe(r => this.articles = r);
  }

  goBack() {
    this.router.navigate(['/articles']);
  }
}
