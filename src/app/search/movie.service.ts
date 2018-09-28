import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Movie } from '../model/movie.model';

@Injectable()
export class MovieService {

  movieUrl = 'http://localhost:8080/movie';

  constructor(private http: HttpClient) { }

  getMovie(id: number): Observable<Movie> {
    return this.http.get<Movie>(this.movieUrl + '/' + id);
  }
}
