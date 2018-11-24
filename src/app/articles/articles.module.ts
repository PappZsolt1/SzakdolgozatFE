import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PaginationModule } from 'ngx-bootstrap/pagination';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleComponent } from './article/article.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { ArticlesShellComponent } from './articles-shell/articles-shell.component';
import { ArticleService } from './shared/article.service';
import { CommentService } from '../shared/services/comment.service';
import { SavedArticleListComponent } from './saved-article-list/saved-article-list.component';
import { SharedCommentModule } from '../shared/shared-comment.module';
import { SharedDirectiveModule } from '../shared/shared-directive.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedCommentModule,
    ArticlesRoutingModule,
    SharedDirectiveModule,
    PaginationModule.forRoot(),
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    TooltipModule.forRoot()
  ],
  declarations: [
    ArticleListComponent,
    ArticleComponent,
    EditArticleComponent,
    ArticlesShellComponent,
    SavedArticleListComponent
  ],
  providers: [
    ArticleService,
    CommentService
  ]
})
export class ArticlesModule { }
