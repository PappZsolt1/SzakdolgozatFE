import { TestBed, inject } from '@angular/core/testing';

import { AgeClassificationService } from './age-classification.service';

xdescribe('AgeClassificationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AgeClassificationService]
    });
  });

  it('should be created', inject([AgeClassificationService], (service: AgeClassificationService) => {
    expect(service).toBeTruthy();
  }));
});
