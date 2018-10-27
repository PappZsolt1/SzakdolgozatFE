import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Comment } from '../models/comment.model';
import { errorHandler } from '../http-error-handler';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CommentService {

  commentUrl = "http://localhost:8080/comment";

  constructor(private http: HttpClient) { }

  addComment(comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(this.commentUrl, comment, httpOptions)
    .pipe(catchError(errorHandler));
  }

  getMovieComments(movieId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.commentUrl + "/movie/" + movieId)
    .pipe(catchError(errorHandler));
  }

  geEpisodeComments(episodeId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.commentUrl + "/episode/" + episodeId)
    .pipe(catchError(errorHandler));
  }

  getActorComments(actorId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.commentUrl + "/actor/" + actorId)
    .pipe(catchError(errorHandler));
  }

  getArticleComments(articleId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.commentUrl + "/article/" + articleId)
    .pipe(catchError(errorHandler));
  }

  getTopicComments(topicId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.commentUrl + "/topic/" + topicId)
    .pipe(catchError(errorHandler));
  }

  moderateComment(id: number): Observable<Comment> {
    return this.http.put<Comment>(this.commentUrl + "/" + id, null)
    .pipe(catchError(errorHandler));
  }
}
