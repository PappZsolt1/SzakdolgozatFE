import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Movie } from '../models/movie.model';
import { errorHandler } from '../http-error-handler';
import { Actor } from '../models/actor.model';

@Injectable()
export class MovieService {

  movieUrl = 'http://localhost:8080/movie';

  constructor(private http: HttpClient) { }

  getMovie(id: number): Observable<Movie> {
    return this.http.get<Movie>(this.movieUrl + '/' + id)
    .pipe(catchError(errorHandler));
  }

  checkIfExists(id: number): Observable<boolean> {
    return this.http.get<boolean>(this.movieUrl + '/check/' + id)
    .pipe(catchError(errorHandler));
  }

  getMovieActors(id: number): Observable<Actor[]> {
    return this.http.get<Actor[]>(this.movieUrl + '/actors/' + id)
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
  
  getAllMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.movieUrl)
    .pipe(catchError(errorHandler));
  }

  getResultMovies(title: string): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.movieUrl + "/search/" + title)
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

  changeRating(id: number, rating: number): Observable<Movie> {
    return this.http.put<Movie>(this.movieUrl + "/rating/" + id, rating)
    .pipe(catchError(errorHandler));
  }

  canBeDeleted(id: number): Observable<boolean> {
    return this.http.get<boolean>(this.movieUrl + "/delete/" + id)
    .pipe(catchError(errorHandler));
  }
}
