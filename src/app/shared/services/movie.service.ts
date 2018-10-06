import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Movie } from '../models/movie.model';

@Injectable()
export class MovieService {

  movieUrl = 'http://localhost:8080/movie';

  constructor(private http: HttpClient) { }

  getMovie(id: number): Observable<Movie> {
    return this.http.get<Movie>(this.movieUrl + '/' + id);
  }

  addMovie(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.movieUrl, movie);
  }

  getAllMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.movieUrl);
  }

  modifyMovie(id: number, movie: Movie): Observable<Movie> {
    return this.http.put<Movie>(this.movieUrl + "/" + id, movie);
  }

  deleteMovie(id: number): Observable<Movie> {
    return this.http.delete<Movie>(this.movieUrl + "/" + id);
  }

  changeRating(id: number, rating: number): Observable<Movie> {
    return this.http.put<Movie>(this.movieUrl + "/rating/" + id, rating);
  }
}
