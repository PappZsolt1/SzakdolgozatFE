import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Series } from '../model/series';

@Injectable()
export class SeriesService {

  seriesUrl = 'http://localhost:8080/series';

  constructor(private http: HttpClient) { }

  getSeries(id: number): Observable<Series> {
    return this.http.get<Series>(this.seriesUrl + '/' + id);
  }
}
