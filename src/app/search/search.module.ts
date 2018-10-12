import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchComponent } from './search/search.component';
import { ResultComponent } from './result/result.component';
import { ResultsComponent } from './results/results.component';
import { SearchRoutingModule } from './search-routing.module';
import { SearchShellComponent } from './search-shell/search-shell.component';
import { ActorComponent } from './actor/actor.component';
import { MovieComponent } from './movie/movie.component';
import { SeriesComponent } from './series/series.component';
import { ActorService } from '../shared/services/actor.service';
import { MovieService } from '../shared/services/movie.service';
import { SeriesService } from '../shared/services/series.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SearchRoutingModule
  ],
  declarations: [
    SearchComponent,
    ResultComponent,
    ResultsComponent,
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
