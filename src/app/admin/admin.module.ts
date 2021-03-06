import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AlertModule } from 'ngx-bootstrap/alert';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminShellComponent } from './admin-shell/admin-shell.component';
import { EditActorComponent } from './edit-actor/edit-actor.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { EditSeriesComponent } from './edit-series/edit-series.component';
import { EditAgeClassificationComponent } from './edit-age-classification/edit-age-classification.component';
import { EditEpisodeComponent } from './edit-episode/edit-episode.component';
import { EditGenderComponent } from './edit-gender/edit-gender.component';
import { EditGenreComponent } from './edit-genre/edit-genre.component';
import { EditSeasonComponent } from './edit-season/edit-season.component';
import { ActorService } from '../shared/services/actor.service';
import { MovieService } from '../shared/services/movie.service';
import { SeriesService } from '../shared/services/series.service';
import { AgeClassificationService } from '../shared/services/age-classification.service';
import { EpisodeService } from '../shared/services/episode.service';
import { GenderService } from '../shared/services/gender.service';
import { GenreService } from '../shared/services/genre.service';
import { SeasonService } from '../shared/services/season.service';
import { ToolsComponent } from './tools/tools.component';
import { CustomDateDirective } from './shared/custom-date.directive';
import { EditRulesComponent } from './edit-rules/edit-rules.component';
import { RulesService } from '../shared/services/rules.service';
import { SharedDirectiveModule } from '../shared/shared-directive.module';
import { EditMovieActorsComponent } from './edit-movie-actors/edit-movie-actors.component';
import { EditEpisodeActorsComponent } from './edit-episode-actors/edit-episode-actors.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    SharedDirectiveModule,
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    TooltipModule.forRoot()
  ],
  declarations: [
    AdminShellComponent,
    EditActorComponent,
    EditMovieComponent,
    EditSeriesComponent,
    EditAgeClassificationComponent,
    EditEpisodeComponent,
    EditGenderComponent,
    EditGenreComponent,
    EditSeasonComponent,
    ToolsComponent,
    CustomDateDirective,
    EditRulesComponent,
    EditMovieActorsComponent,
    EditEpisodeActorsComponent
  ],
  providers: [
    ActorService,
    MovieService,
    SeriesService,
    AgeClassificationService,
    EpisodeService,
    GenderService,
    GenreService,
    SeasonService,
    RulesService
  ]
})
export class AdminModule { }
