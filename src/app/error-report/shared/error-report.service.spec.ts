import { TestBed, inject } from '@angular/core/testing';

import { ErrorReportService } from './error-report.service';

xdescribe('ErrorReportService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ErrorReportService]
    });
  });

  it('should be created', inject([ErrorReportService], (service: ErrorReportService) => {
    expect(service).toBeTruthy();
  }));
});
