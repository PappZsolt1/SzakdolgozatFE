import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Genre } from '../models/genre.model';
import { errorHandler } from '../http-error-handler';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class GenreService {

  genreUrl = "http://localhost:8080/genre";

  constructor(private http: HttpClient) { }

  getGenre(id: number): Observable<Genre> {
    return this.http.get<Genre>(this.genreUrl + "/" + id)
    .pipe(catchError(errorHandler));
  }

  getAllGenres(): Observable<Genre[]> {
    return this.http.get<Genre[]>(this.genreUrl)
    .pipe(catchError(errorHandler));
  }

  addGenre(name: string): Observable<Genre> {
    return this.http.post<Genre>(this.genreUrl, name, httpOptions)
    .pipe(catchError(errorHandler));
  }

  modifyGenre(id: number, name: string): Observable<Genre> {
    return this.http.put<Genre>(this.genreUrl + "/" + id, name)
    .pipe(catchError(errorHandler));
  }

  deleteGenre(id: number): Observable<Genre> {
    return this.http.delete<Genre>(this.genreUrl + "/" + id)
    .pipe(catchError(errorHandler));
  }

  canBeDeleted(id: number): Observable<boolean> {
    return this.http.get<boolean>(this.genreUrl + "/delete/" + id)
    .pipe(catchError(errorHandler));
  }
}
