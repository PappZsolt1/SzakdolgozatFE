import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleComponent } from './article/article.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { ArticlesShellComponent } from './articles-shell/articles-shell.component';
import { SavedArticleListComponent } from './saved-article-list/saved-article-list.component';

const articlesRoutes: Routes = [
  {
    path: 'articles', component: ArticlesShellComponent,
    children: [
      { path: '', component: ArticleListComponent },
      { path: 'edit-article', component: EditArticleComponent },
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
