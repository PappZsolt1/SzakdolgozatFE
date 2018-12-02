import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Movie } from '../models/movie.model';
import { errorHandler } from '../http-error-handler';
import { Actor } from '../models/actor.model';
import { Wrapper } from '../../shared/models/wrapper.model';

@Injectable()
export class MovieService {

  movieUrl = 'http://localhost:8080/movie';

  constructor(private http: HttpClient) { }

  getMovie(id: number): Observable<Movie> {
    return this.http.get<Movie>(this.movieUrl + '/public/' + id)
    .pipe(catchError(errorHandler));
  }

  checkIfExists(id: number): Observable<boolean> {
    return this.http.get<boolean>(this.movieUrl + '/check/' + id)
    .pipe(catchError(errorHandler));
  }

  getMovieActors(id: number): Observable<Actor[]> {
    return this.http.get<Actor[]>(this.movieUrl + '/public/actors/' + id)
    .pipe(catchError(errorHandler));
  }

  addActorToMovie(id: number, actorId: number): Observable<Actor> {
    return this.http.post<Actor>(this.movieUrl + '/add/' + id, actorId)
    .pipe(catchError(errorHandler));
  }

  removeActorFromMovie(id: number, actorId: number): Observable<Actor> {
    return this.http.post<Actor>(this.movieUrl + '/remove/' + id, actorId)
    .pipe(catchError(errorHandler));
  }

  addMovie(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.movieUrl, movie)
    .pipe(catchError(errorHandler));
  }

  getResultMovies(page: number, size: number, title: string): Observable<Wrapper> {
    return this.http.get<Wrapper>(this.movieUrl + "/public/search/" + page + "/" + size + "/" + title)
    .pipe(catchError(errorHandler));
  }

  modifyMovie(movie: Movie): Observable<Movie> {
    return this.http.put<Movie>(this.movieUrl, movie)
    .pipe(catchError(errorHandler));
  }

  deleteMovie(id: number): Observable<Movie> {
    return this.http.delete<Movie>(this.movieUrl + "/" + id)
    .pipe(catchError(errorHandler));
  }

  changeRating(id: number, rating: number, username: string): Observable<Movie> {
    return this.http.put<Movie>(this.movieUrl + "/rating/" + id + "/" + rating, username)
    .pipe(catchError(errorHandler));
  }

  canBeDeleted(id: number): Observable<boolean> {
    return this.http.get<boolean>(this.movieUrl + "/delete/" + id)
    .pipe(catchError(errorHandler));
  }
}
