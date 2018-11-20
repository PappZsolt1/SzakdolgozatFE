import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Episode } from '../models/episode.model';
import { errorHandler } from '../http-error-handler';
import { Actor } from '../models/actor.model';

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

  checkIfExists(id: number): Observable<boolean> {
    return this.http.get<boolean>(this.episodeUrl + '/check/' + id)
    .pipe(catchError(errorHandler));
  }

  getEpisodeActors(id: number): Observable<Actor[]> {
    return this.http.get<Actor[]>(this.episodeUrl + '/actors/' + id)
    .pipe(catchError(errorHandler));
  }

  addActorToEpisode(id: number, actorId: number): Observable<Actor> {
    return this.http.post<Actor>(this.episodeUrl + '/add/' + id, actorId)
    .pipe(catchError(errorHandler));
  }

  removeActorFromEpisode(id: number, actorId: number): Observable<Actor> {
    return this.http.post<Actor>(this.episodeUrl + '/remove/' + id, actorId)
    .pipe(catchError(errorHandler));
  }

  getEpisodeSeasonId(id: number): Observable<number> {
    return this.http.get<number>(this.episodeUrl + "/season/" + id)
    .pipe(catchError(errorHandler));
  }

  addEpisode(seasonId: number, episode: Episode): Observable<Episode> {
    return this.http.post<Episode>(this.episodeUrl + "/" + seasonId, episode, httpOptions)
    .pipe(catchError(errorHandler));
  }

  modifyEpisode(seasonId: number, episode: Episode): Observable<Episode> {
    return this.http.put<Episode>(this.episodeUrl + "/" + seasonId, episode)
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
