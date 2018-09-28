import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ErrorReport } from '../model/error-report.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ErrorReportService {

  errorReportUrl = 'http://localhost:8080/errorreport';
  
  constructor(private http: HttpClient) { }

  addErrorReport(content: string): Observable<ErrorReport> {
    return this.http.post<ErrorReport>(this.errorReportUrl, content, httpOptions);
  }

  getAllErrorReports(): Observable<ErrorReport[]> {
    return this.http.get<ErrorReport[]>(this.errorReportUrl + '/all');
  }

  getResolvedErrorReports(): Observable<ErrorReport[]> {
    return this.http.get<ErrorReport[]>(this.errorReportUrl + '/resolved');
  }
  getNotResolvedErrorReports(): Observable<ErrorReport[]> {
    return this.http.get<ErrorReport[]>(this.errorReportUrl + '/notresolved');
  }

  makeResolved(id: number): Observable<{}> {
    return this.http.put(this.errorReportUrl + "/" + id, null);
  }
}
