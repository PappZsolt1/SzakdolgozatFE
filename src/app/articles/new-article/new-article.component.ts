import { Component, OnInit } from '@angular/core';

import { ArticleService } from '../shared/article.service';
import { Article } from '../shared/article.model';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})
export class NewArticleComponent implements OnInit {

  article: Article = { id: null, title: null, content: null, saved: null, published: null, publishDate: null, /*username: null,*/ comments: null };

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
  }

  saveArticle(): void {
    this.articleService.saveArticle(this.article).subscribe();
  }

  publishNewArticle(title: String, content: String): void {
    this.articleService.publishNewArticle(title, content).subscribe();
  }
}
