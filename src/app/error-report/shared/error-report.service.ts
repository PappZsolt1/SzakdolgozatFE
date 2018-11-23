import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ErrorReport } from './error-report.model';
import { errorHandler } from '../../shared/http-error-handler';
import { Wrapper } from '../../shared/models/wrapper.model';

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

  getAllErrorReports(page: number, size: number): Observable<Wrapper> {
    return this.http.get<Wrapper>(this.errorReportUrl + "/all/" + page + "/" + size)
    .pipe(catchError(errorHandler));
  }

  getResolvedErrorReports(page: number, size: number): Observable<Wrapper> {
    return this.http.get<Wrapper>(this.errorReportUrl + "/resolved/" + page + "/" + size)
    .pipe(catchError(errorHandler));
  }
  
  getNotResolvedErrorReports(page: number, size: number): Observable<Wrapper> {
    return this.http.get<Wrapper>(this.errorReportUrl + "/notresolved/" + page + "/" + size)
    .pipe(catchError(errorHandler));
  }

  makeResolved(id: number): Observable<{}> {
    return this.http.put(this.errorReportUrl + "/" + id, null)
    .pipe(catchError(errorHandler));
  }
}
