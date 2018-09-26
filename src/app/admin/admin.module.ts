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
  ]
})
export class AdminModule { }
