import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Rules } from './rules.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class RulesService {

  rulesUrl = "http://localhost:8080/rules";

  constructor(private http: HttpClient) { }

  getRules(id: number): Observable<Rules> {
    return this.http.get<Rules>(this.rulesUrl + "/" + id);
  }

  modifyRules(id: number, content: String): Observable<Rules> {
    return this.http.put<Rules>(this.rulesUrl + "/" + id, content);
  }
}
