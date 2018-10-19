import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Article } from './article.model';
import { errorHandler } from '../../shared/http-error-handler';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ArticleService {

  articleUrl = "http://localhost:8080/article";

  constructor(private http: HttpClient) { }

  getArticle(id: number): Observable<Article> {
    return this.http.get<Article>(this.articleUrl + "/" + id)
    .pipe(catchError(errorHandler));
  }

  saveArticle(article: Article): Observable<Article> {
    return this.http.post<Article>(this.articleUrl + '/save', article, httpOptions)
    .pipe(catchError(errorHandler));
  }

  publishArticle(article: Article): Observable<Article> {
    return this.http.post<Article>(this.articleUrl, article, httpOptions)
    .pipe(catchError(errorHandler));
  }
  
  getSavedArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.articleUrl + '/save')
    .pipe(catchError(errorHandler));
  }

  getPublishedArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.articleUrl)
    .pipe(catchError(errorHandler));
  }

  deleteArticle(id: number): Observable<Article> {
    return this.http.delete<Article>(this.articleUrl + "/" + id)
    .pipe(catchError(errorHandler));
  }
}
