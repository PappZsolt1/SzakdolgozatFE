import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchCriteriaComponent } from './search-criteria/search-criteria.component';
import { SearchShellComponent } from './search-shell/search-shell.component';
import { ActorComponent } from './actor/actor.component';
import { MovieComponent } from './movie/movie.component';
import { SeriesComponent } from './series/series.component';
import { ActorListComponent } from './actor-list/actor-list.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { SeriesListComponent } from './series-list/series-list.component';
import { EpisodeComponent } from './episode/episode.component';

const searchRoutes: Routes = [
  {
    path: '', component: SearchShellComponent,
    children: [
      { path: '', component: SearchCriteriaComponent },
      { path: 'actor-list', component: ActorListComponent },
      { path: 'movie-list', component: MovieListComponent },
      { path: 'series-list', component: SeriesListComponent },
      { path: 'actor/:id', component: ActorComponent },
      { path: 'movie/:id', component: MovieComponent },
      { path: 'series/:id', component: SeriesComponent },
      { path: 'episode/:id', component: EpisodeComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(searchRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SearchRoutingModule { }
