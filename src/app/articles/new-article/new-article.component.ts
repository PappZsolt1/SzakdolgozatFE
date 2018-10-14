import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ArticleService } from '../shared/article.service';
import { Article } from '../shared/article.model';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})
export class NewArticleComponent implements OnInit {

  article: Article = { id: null, title: null, content: null, saved: null, published: null, publishDate: null, /*username: null,*/ comments: null };

  saved = false;
  published = false;

  constructor(private articleService: ArticleService, private router: Router) { }

  ngOnInit() {
  }

  saveArticle(): void {
    this.saved = true;
    this.articleService.saveArticle(this.article).subscribe();
  }

  publishNewArticle(): void {
    this.published = true;
    this.articleService.publishNewArticle(this.article).subscribe();
  }

  goBack() {
    this.router.navigate(['../']);
  }
}
