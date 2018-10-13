import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleComponent } from './article/article.component';
import { NewArticleComponent } from './new-article/new-article.component';
import { ArticlesShellComponent } from './articles-shell/articles-shell.component';
import { SavedArticleListComponent } from './saved-article-list/saved-article-list.component';

const articlesRoutes: Routes = [
  {
    path: 'articles', component: ArticlesShellComponent,
    children: [
      { path: '', component: ArticleListComponent },
      { path: 'new-article', component: NewArticleComponent },
      { path: 'saved-article-list', component: SavedArticleListComponent },
      { path: ':id', component: ArticleComponent }
    ]
  }
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
