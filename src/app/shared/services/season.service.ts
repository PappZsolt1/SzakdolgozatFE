import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Season } from '../models/season.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SeasonService {

  seasonUrl = "http://localhost:8080/season";

  constructor(private http: HttpClient) { }

  getSeason(id: number): Observable<Season> {
    return this.http.get<Season>(this.seasonUrl + "/" + id);
  }

  getSeriesSeasons(seriesId: number): Observable<Season[]> {
    return this.http.get<Season[]>(this.seasonUrl);//seriesid
  }

  addSeason(season: Season): Observable<Season> {
    return this.http.post<Season>(this.seasonUrl, season, httpOptions);
  }

  modifySeason(id: number, season: Season): Observable<Season> {
    return this.http.put<Season>(this.seasonUrl + "/" + id, season);
  }

  deleteSeason(id: number): Observable<Season> {
    return this.http.delete<Season>(this.seasonUrl + "/" + id);
  }
}
