import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminShellComponent } from './admin-shell/admin-shell.component';
import { EditActorComponent } from './edit-actor/edit-actor.component';
import { EditAgeClassificationComponent } from './edit-age-classification/edit-age-classification.component';
import { EditEpisodeComponent } from './edit-episode/edit-episode.component';
import { EditGenderComponent } from './edit-gender/edit-gender.component';
import { EditGenreComponent } from './edit-genre/edit-genre.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { EditSeasonComponent } from './edit-season/edit-season.component';
import { EditSeriesComponent } from './edit-series/edit-series.component';
import { ToolsComponent } from './tools/tools.component';

const adminRoutes: Routes = [
  {
    path: '', component: AdminShellComponent,
    children: [
      { path: '', component: ToolsComponent },
      { path: 'edit-actor', component: EditActorComponent },
      { path: 'edit-age-classification', component: EditAgeClassificationComponent },
      { path: 'edit-episode', component: EditEpisodeComponent },
      { path: 'edit-gender', component: EditGenderComponent },
      { path: 'edit-genre', component: EditGenreComponent },
      { path: 'edit-movie', component: EditMovieComponent },
      { path: 'edit-season', component: EditSeasonComponent },
      { path: 'edit-series', component: EditSeriesComponent }
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
