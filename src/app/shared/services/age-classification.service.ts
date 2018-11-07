import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AgeClassification } from '../models/age-classification.model';
import { errorHandler } from '../http-error-handler';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AgeClassificationService {

  ageClassificationUrl = "http://localhost:8080/ageclassification";

  constructor(private http: HttpClient) { }

  getAgeClassification(id: number): Observable<AgeClassification> {
    return this.http.get<AgeClassification>(this.ageClassificationUrl + "/" + id)
    .pipe(catchError(errorHandler));
  }

  getAllAgeClassifications(): Observable<AgeClassification[]> {
    return this.http.get<AgeClassification[]>(this.ageClassificationUrl)
    .pipe(catchError(errorHandler));
  }

  addAgeClassification(name: string): Observable<AgeClassification> {
    return this.http.post<AgeClassification>(this.ageClassificationUrl, name, httpOptions)
    .pipe(catchError(errorHandler));
  }

  modifyAgeClassification(id: number, name: string): Observable<AgeClassification> {
    return this.http.put<AgeClassification>(this.ageClassificationUrl + "/" + id, name)
    .pipe(catchError(errorHandler));
  }

  deleteAgeClassification(id: number): Observable<AgeClassification> {
    return this.http.delete<AgeClassification>(this.ageClassificationUrl + "/" + id)
    .pipe(catchError(errorHandler));
  }

  canBeDeleted(id: number): Observable<boolean> {
    return this.http.get<boolean>(this.ageClassificationUrl + "/delete/" + id)
    .pipe(catchError(errorHandler));
  }
}
