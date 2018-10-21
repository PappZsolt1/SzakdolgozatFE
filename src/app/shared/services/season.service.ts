import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Season } from '../models/season.model';
import { errorHandler } from '../http-error-handler';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SeasonService {

  seasonUrl = "http://localhost:8080/season";

  constructor(private http: HttpClient) { }

  getSeason(id: number): Observable<Season> {
    return this.http.get<Season>(this.seasonUrl + "/" + id)
    .pipe(catchError(errorHandler));
  }

  getSeriesSeasons(seriesId: number): Observable<Season[]> {
    return this.http.get<Season[]>(this.seasonUrl + '/season' + seriesId)
    .pipe(catchError(errorHandler));
  }

  addSeason(season: Season): Observable<Season> {
    return this.http.post<Season>(this.seasonUrl, season, httpOptions)
    .pipe(catchError(errorHandler));
  }

  modifySeason(season: Season): Observable<Season> {
    return this.http.put<Season>(this.seasonUrl, season)
    .pipe(catchError(errorHandler));
  }

  deleteSeason(id: number): Observable<Season> {
    return this.http.delete<Season>(this.seasonUrl + "/" + id)
    .pipe(catchError(errorHandler));
  }
}
