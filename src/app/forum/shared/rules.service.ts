import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Rules } from './rules.model';
import { errorHandler } from '../../shared/http-error-handler';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class RulesService {

  rulesUrl = "http://localhost:8080/rules";

  constructor(private http: HttpClient) { }

  getRules(id: number): Observable<Rules> {
    return this.http.get<Rules>(this.rulesUrl + "/" + id)
    .pipe(catchError(errorHandler));
  }

  modifyRules(id: number, content: String): Observable<Rules> {
    return this.http.put<Rules>(this.rulesUrl + "/" + id, content)
    .pipe(catchError(errorHandler));
  }
}
