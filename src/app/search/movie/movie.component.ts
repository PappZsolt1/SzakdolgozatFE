import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Movie } from '../../shared/models/movie.model';
import { MovieService } from '../../shared/services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movie: Movie;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private movieService: MovieService
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.movieService.getMovie(+id).subscribe(r => this.movie = r);
  }

  goBack() {
    this.location.back();
  }
}
