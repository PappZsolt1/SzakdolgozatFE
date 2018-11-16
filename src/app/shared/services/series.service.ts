import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Series } from '../models/series.model';
import { errorHandler } from '../http-error-handler';

@Injectable()
export class SeriesService {

  seriesUrl = 'http://localhost:8080/series';

  constructor(private http: HttpClient) { }

  getSeries(id: number): Observable<Series> {
    return this.http.get<Series>(this.seriesUrl + '/' + id)
    .pipe(catchError(errorHandler));
  }

  getAllSeries(): Observable<Series[]> {
    return this.http.get<Series[]>(this.seriesUrl)
    .pipe(catchError(errorHandler));
  }

  getResultSeries(title: string): Observable<Series[]> {
    return this.http.get<Series[]>(this.seriesUrl + "/search/" + title)
    .pipe(catchError(errorHandler));
  }

  addSeries(series: Series): Observable<Series> {
    return this.http.post<Series>(this.seriesUrl, series)
    .pipe(catchError(errorHandler));
  }

  modifySeries(series: Series): Observable<Series> {
    return this.http.put<Series>(this.seriesUrl, series)
    .pipe(catchError(errorHandler));
  }

  deleteSeries(id: number): Observable<Series> {
    return this.http.delete<Series>(this.seriesUrl + "/" + id)
    .pipe(catchError(errorHandler));
  }
}
