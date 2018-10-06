import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Conversation } from './conversation.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ConversationService {

  conversationUrl = "http://localhost:8080/conversation";

  constructor(private http: HttpClient) { }

  getConversation(id: number): Observable<Conversation> {
    return this.http.get<Conversation>(this.conversationUrl + "/" + id);
  }

  addConversation(conversation: Conversation): Observable<Conversation> {
    return this.http.post<Conversation>(this.conversationUrl, conversation, httpOptions);
  }

  getUserConversations(): Observable<Conversation[]> {
    return this.http.get<Conversation[]>(this.conversationUrl);//.....
  }
}
