import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchComponent } from './search/search.component';
import { ResultComponent } from './result/result.component';
import { ResultsComponent } from './results/results.component';
import { SearchRoutingModule } from './search-routing.module';
import { NewCommentComponent } from './new-comment/new-comment.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { EditComponent } from './edit/edit.component';
import { SearchShellComponent } from './search-shell/search-shell.component';

@NgModule({
  imports: [
    CommonModule,
    SearchRoutingModule
  ],
  declarations: [SearchComponent, ResultComponent, ResultsComponent, NewCommentComponent, CommentListComponent, EditComponent, SearchShellComponent]
})
export class SearchModule { }
