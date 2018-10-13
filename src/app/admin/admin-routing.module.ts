import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminShellComponent } from './admin-shell/admin-shell.component';
import { ActorComponent } from './actor/actor.component';
import { AgeClassificationComponent } from './age-classification/age-classification.component';
import { EpisodeComponent } from './episode/episode.component';
import { GenderComponent } from './gender/gender.component';
import { GenreComponent } from './genre/genre.component';
import { MovieComponent } from './movie/movie.component';
import { SeasonComponent } from './season/season.component';
import { SeriesComponent } from './series/series.component';

const adminRoutes: Routes = [
  {
    path: '', component: AdminShellComponent,
    children: [
      { path: 'actor', component: ActorComponent },
      { path: 'age-classification', component: AgeClassificationComponent },
      { path: 'episode', component: EpisodeComponent },
      { path: 'gender', component: GenderComponent },
      { path: 'genre', component: GenreComponent },
      { path: 'movie', component: MovieComponent },
      { path: 'season', component: SeasonComponent },
      { path: 'series', component: SeriesComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
