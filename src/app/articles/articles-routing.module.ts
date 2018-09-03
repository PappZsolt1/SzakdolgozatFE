import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleComponent } from './article/article.component';
import { NewArticleComponent } from './new-article/new-article.component';
import { ArticlesShellComponent } from './articles-shell/articles-shell.component';

const articlesRoutes: Routes = [
  { path: 'articles', component: ArticlesShellComponent },
  { path: 'article-list', component: ArticleListComponent },
  { path: 'article/:id', component: ArticleComponent },
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
