import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ArticleService } from '../shared/article.service';
import { Article } from '../shared/article.model';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {

  article: Article = { id: null, title: null, content: null, saved: null, published: null, publishDate: null, /*username: null,*/ comments: null };

  saved = false;
  published = false;
  deleted = false;
  modify = false;

  constructor(
    private articleService: ArticleService,
    private location: Location,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get("id");
    if (id) {
      this.articleService.getArticle(id).subscribe(r => { this.article = r; this.modify = true; });
    }    
  }

  saveArticle(): void {
    this.articleService.saveArticle(this.article).subscribe(() => this.saved = true);
  }

  publishArticle(): void {
    this.articleService.publishArticle(this.article).subscribe(() => this.published = true);
  }

  deleteArticle(): void {
    let answer = confirm("Biztosan törli?");
    if (answer) {
      this.articleService.deleteArticle(this.article.id).subscribe(() => this.deleted = true);
    }
  }

  goBack() {
    this.location.back();
  }
}
