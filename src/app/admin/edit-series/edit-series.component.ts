import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { SeriesService } from '../../shared/services/series.service';
import { Series } from '../../shared/models/series.model';
import { AgeClassificationService } from '../../shared/services/age-classification.service';
import { AgeClassification } from '../../shared/models/age-classification.model';
import { GenreService } from '../../shared/services/genre.service';
import { Genre } from '../../shared/models/genre.model';

@Component({
  selector: 'app-series',
  templateUrl: './edit-series.component.html',
  styleUrls: ['./edit-series.component.css']
})
export class EditSeriesComponent implements OnInit {

  series: Series = { id: null, rating: null, title: null, releaseYear: null, coverPicture: null, ageClassification: null, genre: null, seasons: null }
  ageClassifications: AgeClassification[];
  genres: Genre[];

  constructor(
    private location: Location,
    private seriesService: SeriesService,
    private ageClassificationService: AgeClassificationService,
    private genreService: GenreService
    ) { }

  ngOnInit() {
    this.getAllAgeClassifications();
    this.getAllGenres();
  }

  addSeries(): void {
    this.seriesService.addSeries(this.series).subscribe();
  }

  getAllAgeClassifications(): void {
    this.ageClassificationService.getAllAgeClassifications().subscribe(r => this.ageClassifications = r);
  }

  getAllGenres(): void {
    this.genreService.getAllGenres().subscribe(r => this.genres = r);
  }

  goBack() {
    this.location.back();
  }
}
