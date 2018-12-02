import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Rating } from './rating.model';
import { errorHandler } from '../../shared/http-error-handler';

@Injectable()
export class RatingService {

  ratingUrl = 'http://localhost:8080/rating';

  constructor(private http: HttpClient) { } 

  canRateThisMovie(movieId: number, username: string): Observable<boolean> {
    return this.http.get<boolean>(this.ratingUrl + '/movie/' + movieId + '/' + username)
    .pipe(catchError(errorHandler));
  }

  canRateThisEpisode(episodeId: number, username: string): Observable<boolean> {
    return this.http.get<boolean>(this.ratingUrl + '/episode/' + episodeId + '/' + username)
    .pipe(catchError(errorHandler));
  }
}
