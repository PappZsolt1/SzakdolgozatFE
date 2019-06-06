import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Gender } from '../models/gender.model';
import { errorHandler } from '../http-error-handler';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class GenderService {

  genderUrl = "http://localhost:8080/gender";

  constructor(private http: HttpClient) { }

  getGender(id: number): Observable<Gender> {
    return this.http.get<Gender>(this.genderUrl + "/" + id)
    .pipe(catchError(errorHandler));
  }

  getAllGenders(): Observable<Gender[]> {
    return this.http.get<Gender[]>(this.genderUrl)
    .pipe(catchError(errorHandler));
  }

  addGender(name: string): Observable<Gender> {
    return this.http.post<Gender>(this.genderUrl, name, httpOptions)
    .pipe(catchError(errorHandler));
  }

  modifyGender(id: number, name: string): Observable<Gender> {
    return this.http.put<Gender>(this.genderUrl + "/" + id, name)
    .pipe(catchError(errorHandler));
  }

  deleteGender(id: number): Observable<Gender> {
    return this.http.delete<Gender>(this.genderUrl + "/" + id)
    .pipe(catchError(errorHandler));
  }

  canBeDeleted(id: number): Observable<boolean> {
    return this.http.get<boolean>(this.genderUrl + "/delete/" + id)
    .pipe(catchError(errorHandler));
  }
}
