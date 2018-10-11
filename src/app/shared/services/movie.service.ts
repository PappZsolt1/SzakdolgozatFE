import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Movie } from '../models/movie.model';
import { errorHandler } from '../http-error-handler';

@Injectable()
export class MovieService {

  movieUrl = 'http://localhost:8080/movie';

  constructor(private http: HttpClient) { }

  getMovie(id: number): Observable<Movie> {
    return this.http.get<Movie>(this.movieUrl + '/' + id)
    .pipe(catchError(errorHandler));
  }

  addMovie(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.movieUrl, movie)
    .pipe(catchError(errorHandler));
  }

  getAllMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.movieUrl)
    .pipe(catchError(errorHandler));
  }

  modifyMovie(id: number, movie: Movie): Observable<Movie> {
    return this.http.put<Movie>(this.movieUrl + "/" + id, movie)
    .pipe(catchError(errorHandler));
  }

  deleteMovie(id: number): Observable<Movie> {
    return this.http.delete<Movie>(this.movieUrl + "/" + id)
    .pipe(catchError(errorHandler));
  }

  changeRating(id: number, rating: number): Observable<Movie> {
    return this.http.put<Movie>(this.movieUrl + "/rating/" + id, rating)
    .pipe(catchError(errorHandler));
  }
}
