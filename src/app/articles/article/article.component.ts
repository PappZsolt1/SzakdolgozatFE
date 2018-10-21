import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Article } from '../shared/article.model';
import { ArticleService } from '../shared/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article: Article;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articleService: ArticleService
    ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.articleService.getArticle(+id).subscribe(r => this.article = r);
  }

  goBack() {
    this.router.navigate(['/articles']);
  }
}
