import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Actor } from '../models/actor.model';
import { errorHandler } from '../http-error-handler';
import { Wrapper } from '../../shared/models/wrapper.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ActorService {

  actorUrl = "http://localhost:8080/actor";

  constructor(private http: HttpClient) { }

  addActor(actor: Actor): Observable<Actor> {
    return this.http.post<Actor>(this.actorUrl, actor, httpOptions)
    .pipe(catchError(errorHandler));
  }

  getActor(id: number): Observable<Actor> {
    return this.http.get<Actor>(this.actorUrl + "/public/" + id)
    .pipe(catchError(errorHandler));
  }

  checkIfExists(id: number): Observable<boolean> {
    return this.http.get<boolean>(this.actorUrl + '/check/' + id)
    .pipe(catchError(errorHandler));
  }

  modifyActor(actor: Actor): Observable<Actor> {
    return this.http.put<Actor>(this.actorUrl, actor)
    .pipe(catchError(errorHandler));
  }

  deleteActor(id: number): Observable<Actor> {
    return this.http.delete<Actor>(this.actorUrl + "/" + id)
    .pipe(catchError(errorHandler));
  }

  getResultActors(page: number, size: number, name: string): Observable<Wrapper> {
    return this.http.get<Wrapper>(this.actorUrl + "/public/search/" + page + "/" + size + "/" + name)
    .pipe(catchError(errorHandler));
  }

  canBeDeleted(id: number): Observable<boolean> {
    return this.http.get<boolean>(this.actorUrl + "/delete/" + id)
    .pipe(catchError(errorHandler));
  }
}
