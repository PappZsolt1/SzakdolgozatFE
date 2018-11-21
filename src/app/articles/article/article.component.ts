import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Article } from '../shared/article.model';
import { ArticleService } from '../shared/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article: Article;
  type = "article";

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private articleService: ArticleService
    ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.articleService.getArticle(+id).subscribe(r => this.article = r);
  }

  goBack() {
    this.location.back();
  }
}
