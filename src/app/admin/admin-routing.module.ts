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
import { EditRulesComponent } from './edit-rules/edit-rules.component';
import { EditMovieActorsComponent } from './edit-movie-actors/edit-movie-actors.component';
import { EditEpisodeActorsComponent } from './edit-episode-actors/edit-episode-actors.component';

import { AppAuthGuard } from '../shared/app-auth.guard';

const adminRoutes: Routes = [
  {
    path: '', component: AdminShellComponent,
    canActivate: [AppAuthGuard], data: { roles: ['Admin'] },
    children: [
      { path: '', component: ToolsComponent,
      canActivate: [AppAuthGuard], data: { roles: ['Admin'] } },
      { path: 'edit-actor', component: EditActorComponent,
      canActivate: [AppAuthGuard], data: { roles: ['Admin'] } },
      { path: 'edit-age-classification', component: EditAgeClassificationComponent,
      canActivate: [AppAuthGuard], data: { roles: ['Admin'] } },
      { path: 'edit-episode', component: EditEpisodeComponent,
      canActivate: [AppAuthGuard], data: { roles: ['Admin'] } },
      { path: 'edit-gender', component: EditGenderComponent,
      canActivate: [AppAuthGuard], data: { roles: ['Admin'] } },
      { path: 'edit-genre', component: EditGenreComponent,
      canActivate: [AppAuthGuard], data: { roles: ['Admin'] } },
      { path: 'edit-movie', component: EditMovieComponent,
      canActivate: [AppAuthGuard], data: { roles: ['Admin'] } },
      { path: 'edit-season', component: EditSeasonComponent,
      canActivate: [AppAuthGuard], data: { roles: ['Admin'] } },
      { path: 'edit-series', component: EditSeriesComponent,
      canActivate: [AppAuthGuard], data: { roles: ['Admin'] } },
      { path: 'edit-rules', component: EditRulesComponent,
      canActivate: [AppAuthGuard], data: { roles: ['Admin'] } },
      { path: 'edit-movie-actors', component: EditMovieActorsComponent,
      canActivate: [AppAuthGuard], data: { roles: ['Admin'] } },
      { path: 'edit-episode-actors', component: EditEpisodeActorsComponent,
      canActivate: [AppAuthGuard], data: { roles: ['Admin'] } }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [RouterModule],
  providers: [AppAuthGuard]
})
export class AdminRoutingModule { }
