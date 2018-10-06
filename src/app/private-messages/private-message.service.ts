import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { PrivateMessage } from './private-message.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PrivateMessagesService {

  privateMessageUrl = "http://localhost:8080/privatemessage";

  constructor(private http: HttpClient) { }

  addPrivateMessage(content: String): Observable<PrivateMessage> {
    return this.http.post<PrivateMessage>(this.privateMessageUrl, content, httpOptions);
  }

  makeRead(id: number): Observable<PrivateMessage> {
    return this.http.put<PrivateMessage>(this.privateMessageUrl + "/" + id, null);
  }

  getConversationPrivateMessages(): Observable<PrivateMessage[]> {
    return this.http.get<PrivateMessage[]>(this.privateMessageUrl);//needed?
  }
}
