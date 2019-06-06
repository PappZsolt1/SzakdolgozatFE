import { TestBed, inject } from '@angular/core/testing';

import { ActorService } from './actor.service';

xdescribe('ActorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActorService]
    });
  });

  it('should be created', inject([ActorService], (service: ActorService) => {
    expect(service).toBeTruthy();
  }));
});
