import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Series } from '../models/series.model';

@Injectable()
export class SeriesService {

  seriesUrl = 'http://localhost:8080/series';

  constructor(private http: HttpClient) { }

  getSeries(id: number): Observable<Series> {
    return this.http.get<Series>(this.seriesUrl + '/' + id);
  }

  getAllSeries(): Observable<Series[]> {
    return this.http.get<Series[]>(this.seriesUrl);
  }

  addSeries(series: Series): Observable<Series> {
    return this.http.post<Series>(this.seriesUrl, series);
  }

  modifySeries(id: number, series: Series): Observable<Series> {
    return this.http.put<Series>(this.seriesUrl + "/" + id, series);
  }

  deleteSeries(id: number): Observable<Series> {
    return this.http.delete<Series>(this.seriesUrl + "/" + id);
  }
}
