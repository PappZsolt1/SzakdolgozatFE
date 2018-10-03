import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminShellComponent } from './admin-shell/admin-shell.component';
import { ActorComponent } from './actor/actor.component';
import { MovieComponent } from './movie/movie.component';
import { SeriesComponent } from './series/series.component';
import { AgeClassificationComponent } from './age-classification/age-classification.component';
import { EpisodeComponent } from './episode/episode.component';
import { GenderComponent } from './gender/gender.component';
import { GenreComponent } from './genre/genre.component';
import { SeasonComponent } from './season/season.component';
import { ActorService } from '../shared/services/actor.service';
import { MovieService } from '../shared/services/movie.service';
import { SeriesService } from '../shared/services/series.service';
import { AgeClassificationService } from '../shared/services/age-classification.service';
import { EpisodeService } from '../shared/services/episode.service';
import { GenderService } from '../shared/services/gender.service';
import { GenreService } from '../shared/services/genre.service';
import { SeasonService } from '../shared/services/season.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminShellComponent,
    ActorComponent,
    MovieComponent,
    SeriesComponent,
    AgeClassificationComponent,
    EpisodeComponent,
    GenderComponent,
    GenreComponent,
    SeasonComponent
  ],
  providers: [
    ActorService,
    MovieService,
    SeriesService,
    AgeClassificationService,
    EpisodeService,
    GenderService,
    GenreService,
    SeasonService
  ]
})
export class AdminModule { }
