import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Episode } from '../models/episode.model';
import { errorHandler } from '../http-error-handler';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class EpisodeService {

  episodeUrl = "http://localhost:8080/episode";

  constructor(private http: HttpClient) { }

  getEpisode(id: number): Observable<Episode> {
    return this.http.get<Episode>(this.episodeUrl + "/" + id)
    .pipe(catchError(errorHandler));
  }

  addEpisode(seasonId: number, episode: Episode): Observable<Episode> {
    return this.http.post<Episode>(this.episodeUrl + "/" + seasonId, episode, httpOptions)
    .pipe(catchError(errorHandler));
  }

  modifyEpisode(episode: Episode): Observable<Episode> {
    return this.http.put<Episode>(this.episodeUrl, episode)
    .pipe(catchError(errorHandler));
  }

  deleteEpisode(seasonId: number, id: number): Observable<Episode> {
    return this.http.delete<Episode>(this.episodeUrl + "/" + seasonId + "/" + id)
    .pipe(catchError(errorHandler));
  }
  
  getSeasonEpisodes(seasonId: number): Observable<Episode[]> {
    return this.http.get<Episode[]>(this.episodeUrl + '/season' + seasonId)
    .pipe(catchError(errorHandler));
  }

  changeRating(id: number, rating: number): Observable<Episode> {
    return this.http.put<Episode>(this.episodeUrl + "/rating/" + id, rating)
    .pipe(catchError(errorHandler));
  }

  canBeDeleted(id: number): Observable<boolean> {
    return this.http.get<boolean>(this.episodeUrl + "/delete/" + id)
    .pipe(catchError(errorHandler));
  }
}
