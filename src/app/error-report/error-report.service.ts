import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ErrorReport } from '../model/error-report';

@Injectable()
export class ErrorReportService {

  errorReportUrl = 'localhost:8080/errorreport';
  
  constructor(private http: HttpClient) { }

  addErrorReport(errorReport: ErrorReport): Observable<ErrorReport> {
    return this.http.post<ErrorReport>(this.errorReportUrl, errorReport);
  }

  getAllErrorReports(): Observable<ErrorReport[]> {
    return this.http.get<ErrorReport[]>(this.errorReportUrl + 'all');
  }

  getResolvedErrorReports(): Observable<ErrorReport[]> {
    return this.http.get<ErrorReport[]>(this.errorReportUrl + 'resolved');
  }
  getNotResolvedErrorReports(): Observable<ErrorReport[]> {
    return this.http.get<ErrorReport[]>(this.errorReportUrl + 'notresolved');
  }

  makeResolved(id: number): Observable<{}> {
    return this.http.put(this.errorReportUrl, id);
  }
}
