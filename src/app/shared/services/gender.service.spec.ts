import { TestBed, inject } from '@angular/core/testing';

import { GenderService } from './gender.service';

xdescribe('GenderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GenderService]
    });
  });

  it('should be created', inject([GenderService], (service: GenderService) => {
    expect(service).toBeTruthy();
  }));
});
