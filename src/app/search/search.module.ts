import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchCriteriaComponent } from './search-criteria/search-criteria.component';
import { SearchRoutingModule } from './search-routing.module';
import { SearchShellComponent } from './search-shell/search-shell.component';
import { ActorComponent } from './actor/actor.component';
import { MovieComponent } from './movie/movie.component';
import { SeriesComponent } from './series/series.component';
import { ActorService } from '../shared/services/actor.service';
import { MovieService } from '../shared/services/movie.service';
import { SeriesService } from '../shared/services/series.service';
import { SharedCommentModule } from '../shared/shared-comment.module';

@NgModule({
  imports: [
    CommonModule,
    SharedCommentModule,
    SearchRoutingModule
  ],
  declarations: [
    SearchCriteriaComponent,
    SearchShellComponent,
    ActorComponent,
    MovieComponent,
    SeriesComponent
  ],
  providers: [
    ActorService,
    MovieService,
    SeriesService
  ]
})
export class SearchModule { }
