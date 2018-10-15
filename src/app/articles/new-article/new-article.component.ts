import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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
  edit = false;
  deleted = false;

  constructor(
    private articleService: ArticleService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get("id");
    if (id) {
      this.articleService.getArticle(id).subscribe(r => this.article = r);
      this.edit = true;
    }    
  }

  saveArticle(): void {
    this.saved = true;
    this.articleService.saveArticle(this.article).subscribe();
  }

  publishArticle(): void {
    if (!this.edit) {
      this.publishNewArticle();
    } else {
      this.publishSavedArticle();
    }
  }

  publishNewArticle(): void {
    this.published = true;
    this.articleService.publishNewArticle(this.article).subscribe();
  }

  publishSavedArticle(): void {
    this.published = true;
    this.articleService.publishSavedArticle(this.article.id, this.article).subscribe();
  }

  deleteArticle(): void {
    let answer = confirm("Biztosan törli?");
    if (answer) {
      this.deleted = true;
    this.articleService.deleteArticle(this.article.id).subscribe();
    }    
  }

  goBack() {
    this.router.navigate(['../']);
  }
}
