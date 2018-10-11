import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Genre } from '../models/genre.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class GenreService {

  genreUrl = "http://localhost:8080/genre";

  constructor(private http: HttpClient) { }

  getGenre(id: number): Observable<Genre> {
    return this.http.get<Genre>(this.genreUrl + "/" + id);
  }

  getAllGenres(): Observable<Genre[]> {
    return this.http.get<Genre[]>(this.genreUrl);
  }

  addGenre(name: string): Observable<Genre> {
    return this.http.post<Genre>(this.genreUrl, name, httpOptions);
  }

  modifyGenre(id: number, name: string): Observable<Genre> {
    return this.http.put<Genre>(this.genreUrl + "/" + id, name);
  }

  deleteGenre(id: number): Observable<Genre> {
    return this.http.delete<Genre>(this.genreUrl + "/" + id);
  }
}
