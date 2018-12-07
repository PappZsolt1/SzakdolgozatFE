import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { MovieService } from '../../shared/services/movie.service';
import { Movie } from '../../shared/models/movie.model';
import { calculatePageFirst } from '../../shared/calculate-page-first';
import { calculatePageLast } from '../../shared/calculate-page-last';
import { calculatePage } from '../../shared/calculate-page';

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
  sizes = [10, 20, 30];
  pageFirst = 0;
  pageLast = 0;

  constructor(
    private location: Location,
    private movieService: MovieService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.text = this.route.snapshot.paramMap.get("text");
    this.getResultMovies();
  }

  onSizeChanged(): void {
    this.page = calculatePage(this.page, this.size, this.total);
    this.getResultMovies();
  }

  onPageChanged(event: any): void {
    this.page = event.page;
    this.size = event.itemsPerPage;
    this.getResultMovies();
  }

  getResultMovies(): void {
    this.movieService.getResultMovies(this.page, this.size, this.text).subscribe(r => {
      this.movies = r.results; this.total = r.total;
      this.pageFirst = calculatePageFirst(this.page, this.size, this.total);
      this.pageLast = calculatePageLast(this.page, this.size, this.total);
    });
  }

  goBack() {
    this.location.back();
  }
}
