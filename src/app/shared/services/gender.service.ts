import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Gender } from '../models/gender.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class GenderService {

  genderUrl = "http://localhost:8080/gender";

  constructor(private http: HttpClient) { }

  getGender(id: number): Observable<Gender> {
    return this.http.get<Gender>(this.genderUrl + "/" + id);
  }

  getAllGenders(): Observable<Gender[]> {
    return this.http.get<Gender[]>(this.genderUrl);
  }

  addGender(name: string): Observable<Gender> {
    return this.http.post<Gender>(this.genderUrl, name, httpOptions);
  }

  modifyGender(id: number, name: string): Observable<Gender> {
    return this.http.put<Gender>(this.genderUrl + "/" + id, name);
  }

  deleteGender(id: number): Observable<Gender> {
    return this.http.delete<Gender>(this.genderUrl + "/" + id);
  }
}
