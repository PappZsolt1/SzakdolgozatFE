import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleComponent } from './article/article.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { ArticlesShellComponent } from './articles-shell/articles-shell.component';
import { SavedArticleListComponent } from './saved-article-list/saved-article-list.component';

import { AppAuthGuard } from '../shared/app-auth.guard';

const articlesRoutes: Routes = [
  {
    path: 'articles', component: ArticlesShellComponent,
    children: [
      { path: '', component: ArticleListComponent },
      { path: 'edit-article', component: EditArticleComponent,
      canActivate: [AppAuthGuard], data: { roles: ['ArticleWriter'] } },
      { path: 'saved-article-list', component: SavedArticleListComponent,
      canActivate: [AppAuthGuard], data: { roles: ['ArticleWriter'] } },
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
