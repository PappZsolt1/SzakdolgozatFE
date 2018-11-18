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

  checkIfExists(id: number): Observable<boolean> {
    return this.http.get<boolean>(this.seasonUrl + '/check/' + id)
    .pipe(catchError(errorHandler));
  }

  getSeriesSeasons(seriesId: number): Observable<Season[]> {
    return this.http.get<Season[]>(this.seasonUrl + '/season' + seriesId)
    .pipe(catchError(errorHandler));
  }

  addSeason(seriesId: number, season: Season): Observable<Season> {
    return this.http.post<Season>(this.seasonUrl + "/" + seriesId, season, httpOptions)
    .pipe(catchError(errorHandler));
  }

  modifySeason(seriesId: number, season: Season): Observable<Season> {
    return this.http.put<Season>(this.seasonUrl + "/" + seriesId, season)
    .pipe(catchError(errorHandler));
  }

  deleteSeason(seriesId: number, id: number): Observable<Season> {
    return this.http.delete<Season>(this.seasonUrl + "/" + seriesId + "/" + id)
    .pipe(catchError(errorHandler));
  }

  canBeDeleted(id: number): Observable<boolean> {
    return this.http.get<boolean>(this.seasonUrl + "/delete/" + id)
    .pipe(catchError(errorHandler));
  }
}
