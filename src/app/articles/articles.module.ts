import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleComponent } from './article/article.component';
import { NewArticleComponent } from './new-article/new-article.component';
import { ArticlesShellComponent } from './articles-shell/articles-shell.component';
import { ArticleService } from './shared/article.service';
import { CommentService } from '../shared/services/comment.service';
import { SavedArticleListComponent } from './saved-article-list/saved-article-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ArticlesRoutingModule
  ],
  declarations: [
    ArticleListComponent,
    ArticleComponent,
    NewArticleComponent,
    ArticlesShellComponent,
    SavedArticleListComponent
  ],
  providers: [
    ArticleService,
    CommentService
  ]
})
export class ArticlesModule { }
