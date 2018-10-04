import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Episode } from '../models/episode.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class EpisodeService {

  episodeUrl = "http://localhost:8080/episode";

  constructor(private http: HttpClient) { }

  getEpisode(id: number): Observable<Episode> {
    return this.http.get<Episode>(this.episodeUrl + "/" + id);
  }

  addEpisode(episode: Episode): Observable<Episode> {
    return this.http.post<Episode>(this.episodeUrl, episode, httpOptions);
  }

  modifyEpisode(id: number, episode: Episode): Observable<Episode> {
    return this.http.put<Episode>(this.episodeUrl + "/" + id, episode);
  }

  deleteEpisode(id: number): Observable<Episode> {
    return this.http.delete<Episode>(this.episodeUrl + "/" + id);
  }
  //...
}
