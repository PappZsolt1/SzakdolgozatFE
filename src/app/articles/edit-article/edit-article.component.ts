import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get("id");
    if (id) {
      this.articleService.getArticle(id).subscribe(r => this.article = r);
      this.modify = true;
    }    
  }

  saveArticle(): void {
    this.saved = true;
    this.articleService.saveArticle(this.article).subscribe();
  }

  publishArticle(): void {
    this.published = true;
    this.articleService.publishArticle(this.article).subscribe();
  }

  deleteArticle(): void {
    let answer = confirm("Biztosan törli?");
    if (answer) {
      this.deleted = true;
      this.articleService.deleteArticle(this.article.id).subscribe();
    }    
  }

  goBack() {
    this.router.navigate(['/articles']);
  }
}
