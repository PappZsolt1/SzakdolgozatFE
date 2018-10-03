import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Actor } from '../shared/models/actor.model';

@Injectable()
export class ActorService {

  actorUrl = 'http://localhost:8080/actor';

  constructor(private http: HttpClient) { }

  getActor(id: number): Observable<Actor> {
    return this.http.get<Actor>(this.actorUrl + '/' + id);
  }
}
