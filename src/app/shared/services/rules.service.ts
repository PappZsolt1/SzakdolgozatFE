import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Rules } from '../models/rules.model';
import { errorHandler } from '../http-error-handler';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class RulesService {

  rulesUrl = "http://localhost:8080/rules";

  constructor(private http: HttpClient) { }

  getRules(): Observable<Rules> {
    return this.http.get<Rules>(this.rulesUrl + "/public")
    .pipe(catchError(errorHandler));
  }

  modifyRules(content: string): Observable<Rules> {
    return this.http.put<Rules>(this.rulesUrl, content)
    .pipe(catchError(errorHandler));
  }
}
