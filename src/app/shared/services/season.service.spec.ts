import { TestBed, inject } from '@angular/core/testing';

import { SeasonService } from './season.service';

xdescribe('SeasonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SeasonService]
    });
  });

  it('should be created', inject([SeasonService], (service: SeasonService) => {
    expect(service).toBeTruthy();
  }));
});
