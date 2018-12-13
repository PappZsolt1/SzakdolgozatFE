import { TestBed, inject } from '@angular/core/testing';

import { RatingService } from './rating.service';

xdescribe('RatingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RatingService]
    });
  });

  it('should be created', inject([RatingService], (service: RatingService) => {
    expect(service).toBeTruthy();
  }));
});
