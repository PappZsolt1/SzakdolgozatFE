import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { PrivateMessage } from './private-message.model';
import { errorHandler } from '../shared/http-error-handler';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PrivateMessagesService {

  privateMessageUrl = "http://localhost:8080/privatemessage";

  constructor(private http: HttpClient) { }

  addPrivateMessage(content: String): Observable<PrivateMessage> {
    return this.http.post<PrivateMessage>(this.privateMessageUrl, content, httpOptions)
    .pipe(catchError(errorHandler));
  }

  makeRead(id: number): Observable<PrivateMessage> {
    return this.http.put<PrivateMessage>(this.privateMessageUrl + "/" + id, null)
    .pipe(catchError(errorHandler));
  }

  getConversationPrivateMessages(): Observable<PrivateMessage[]> {
    return this.http.get<PrivateMessage[]>(this.privateMessageUrl)
    .pipe(catchError(errorHandler));//needed?
  }
}
