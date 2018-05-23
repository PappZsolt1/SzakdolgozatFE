import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Actor } from '../../model/actor';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ActorService {

  actorUrl = "http://localhost:8080/actor";

  constructor(private http: HttpClient) { }

  addActor(actor: Actor): Observable<Actor> {
    return this.http.post<Actor>(this.actorUrl, actor, httpOptions);
  }

  getActor(id: number): Observable<Actor> {
    return this.http.get<Actor>(this.actorUrl + "/" + id);
  }
}
