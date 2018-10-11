import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Conversation } from './conversation.model';
import { errorHandler } from '../shared/http-error-handler';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ConversationService {

  conversationUrl = "http://localhost:8080/conversation";

  constructor(private http: HttpClient) { }

  getConversation(id: number): Observable<Conversation> {
    return this.http.get<Conversation>(this.conversationUrl + "/" + id)
    .pipe(catchError(errorHandler));
  }

  addConversation(conversation: Conversation): Observable<Conversation> {
    return this.http.post<Conversation>(this.conversationUrl, conversation, httpOptions)
    .pipe(catchError(errorHandler));
  }

  getUserConversations(): Observable<Conversation[]> {
    return this.http.get<Conversation[]>(this.conversationUrl)
    .pipe(catchError(errorHandler));//.....
  }
}
