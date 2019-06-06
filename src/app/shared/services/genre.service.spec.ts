import { TestBed, inject } from '@angular/core/testing';

import { GenreService } from './genre.service';

xdescribe('GenreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GenreService]
    });
  });

  it('should be created', inject([GenreService], (service: GenreService) => {
    expect(service).toBeTruthy();
  }));
});
