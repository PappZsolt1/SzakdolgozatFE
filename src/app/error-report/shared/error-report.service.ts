import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ErrorReport } from './error-report.model';
import { errorHandler } from '../../shared/http-error-handler';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ErrorReportService {

  errorReportUrl = 'http://localhost:8080/errorreport';
  
  constructor(private http: HttpClient) { }

  addErrorReport(content: string): Observable<ErrorReport> {
    return this.http.post<ErrorReport>(this.errorReportUrl, content, httpOptions)
    .pipe(catchError(errorHandler));
  }

  getAllErrorReports(): Observable<ErrorReport[]> {
    return this.http.get<ErrorReport[]>(this.errorReportUrl + '/all')
    .pipe(catchError(errorHandler));
  }

  getResolvedErrorReports(): Observable<ErrorReport[]> {
    return this.http.get<ErrorReport[]>(this.errorReportUrl + '/resolved')
    .pipe(catchError(errorHandler));
  }
  getNotResolvedErrorReports(): Observable<ErrorReport[]> {
    return this.http.get<ErrorReport[]>(this.errorReportUrl + '/notresolved')
    .pipe(catchError(errorHandler));
  }

  makeResolved(id: number): Observable<{}> {
    return this.http.put(this.errorReportUrl + "/" + id, null)
    .pipe(catchError(errorHandler));
  }
}
