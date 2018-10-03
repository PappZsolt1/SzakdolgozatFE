import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AgeClassification } from '../models/age-classification.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AgeClassificationService {

  ageClassificationUrl = "http://localhost:8080/ageclassification";

  constructor(private http: HttpClient) { }

  getAgeClassification(id: number): Observable<AgeClassification> {
    return this.http.get<AgeClassification>(this.ageClassificationUrl + "/" + id);
  }

  getAllAgeClassifications(): Observable<AgeClassification[]> {
    return this.http.get<AgeClassification[]>(this.ageClassificationUrl);
  }

  addAgeClassification(name: String): Observable<AgeClassification> {
    return this.http.post<AgeClassification>(this.ageClassificationUrl, name, httpOptions);
  }

  modifyAgeClassification(id: number, name: String): Observable<AgeClassification> {
    return this.http.put<AgeClassification>(this.ageClassificationUrl + "/" + id, name);
  }

  deleteAgeClassification(id: number): Observable<AgeClassification> {
    return this.http.delete<AgeClassification>(this.ageClassificationUrl + "/" + id);
  }
}
