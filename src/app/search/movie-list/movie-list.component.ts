import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { MovieService } from '../../shared/services/movie.service';
import { Movie } from '../../shared/models/movie.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies: Movie[];

  constructor(
    private location: Location,
    private movieService: MovieService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let text = this.route.snapshot.paramMap.get("text");
    this.movieService.getResultMovies(text).subscribe(r => this.movies = r);
  }

  goBack() {
    this.location.back();
  }
}
