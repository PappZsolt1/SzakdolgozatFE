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
  text: string;
  total: number;
  page = 1;
  size = 10;

  constructor(
    private location: Location,
    private movieService: MovieService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.text = this.route.snapshot.paramMap.get("text");
    this.movieService.getResultMovies(this.page, this.size, this.text).subscribe(r => {
      this.movies = r.results; this.total = r.total; });
  }

  onPageChanged(event: any): void {
    this.page = event.page;
    this.size = event.itemsPerPage;
    this.movieService.getResultMovies(this.page, this.size, this.text).subscribe(r => {
      this.movies = r.results; this.total = r.total; });
  }

  goBack() {
    this.location.back();
  }
}
