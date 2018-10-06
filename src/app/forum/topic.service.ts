import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Topic } from './topic.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TopicService {

  topicUrl = "http://localhost:8080/topic";

  constructor(private http: HttpClient) { }

  getTopic(id: number): Observable<Topic> {
    return this.http.get<Topic>(this.topicUrl + "/" + id);
  }

  getAllTopics(): Observable<Topic[]> {
    return this.http.get<Topic[]>(this.topicUrl);
  }

  addTopic(title: String, description: String): Observable<Topic> {
    return this.http.post<Topic>(this.topicUrl, { title, description }, httpOptions);
  }

  deleteTopic(id: number): Observable<Topic> {
    return this.http.delete<Topic>(this.topicUrl + "/" + id);
  }
}
