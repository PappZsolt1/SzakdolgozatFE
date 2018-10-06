import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Article } from './article.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ArticleService {

  articleUrl = "http://localhost:8080/article";

  constructor(private http: HttpClient) { }

  getArticle(id: number): Observable<Article> {
    return this.http.get<Article>(this.articleUrl + "/" + id);
  }

  saveArticle(title: String, content: String): Observable<Article> {
    return this.http.post<Article>(this.articleUrl + '/save', { title, content }, httpOptions);
  }

  publishNewArticle(title: String, content: String): Observable<Article> {
    return this.http.post<Article>(this.articleUrl, { title, content }, httpOptions);
  }//same?

  publishSavedArticle(id: number, title: String, content: String): Observable<Article> {
    return this.http.put<Article>(this.articleUrl + "/" + id, name);//body
  }

  getSavedArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.articleUrl + '/save');
  }

  getPublishedArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.articleUrl);
  }//same?

  deleteArticle(id: number): Observable<Article> {
    return this.http.delete<Article>(this.articleUrl + "/" + id);
  }
}
