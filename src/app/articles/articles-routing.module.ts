import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleComponent } from './article/article.component';
import { NewArticleComponent } from './new-article/new-article.component';

const articlesRoutes: Routes = [
  { path: 'articles', component: ArticleListComponent },
  { path: 'articles:id', component: ArticleComponent },
  { path: 'new-article', component: NewArticleComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(articlesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ArticlesRoutingModule { }
