import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginationModule } from 'ngx-bootstrap/pagination';
import { AlertModule } from 'ngx-bootstrap/alert';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { RatingModule } from 'ngx-bootstrap/rating';

import { SearchCriteriaComponent } from './search-criteria/search-criteria.component';
import { SearchRoutingModule } from './search-routing.module';
import { SearchShellComponent } from './search-shell/search-shell.component';
import { ActorComponent } from './actor/actor.component';
import { MovieComponent } from './movie/movie.component';
import { SeriesComponent } from './series/series.component';
import { ActorService } from '../shared/services/actor.service';
import { MovieService } from '../shared/services/movie.service';
import { SeriesService } from '../shared/services/series.service';
import { EpisodeService } from '../shared/services/episode.service';
import { SharedCommentModule } from '../shared/shared-comment.module';
import { ActorListComponent } from './actor-list/actor-list.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { SeriesListComponent } from './series-list/series-list.component';
import { SharedDirectiveModule } from '../shared/shared-directive.module';
import { EpisodeComponent } from './episode/episode.component';
import { RatingService } from './shared/rating.service';

@NgModule({
  imports: [
    CommonModule,
    SharedCommentModule,
    SearchRoutingModule,
    SharedDirectiveModule,
    PaginationModule.forRoot(),
    AlertModule.forRoot(),
    TooltipModule.forRoot(),
    RatingModule.forRoot()
  ],
  declarations: [
    SearchCriteriaComponent,
    SearchShellComponent,
    ActorComponent,
    MovieComponent,
    SeriesComponent,
    ActorListComponent,
    MovieListComponent,
    SeriesListComponent,
    EpisodeComponent
  ],
  providers: [
    ActorService,
    MovieService,
    SeriesService,
    EpisodeService,
    RatingService
  ]
})
export class SearchModule { }
