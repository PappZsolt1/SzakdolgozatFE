import { TestBed, inject } from '@angular/core/testing';

import { CommentService } from './comment.service';

xdescribe('CommentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommentService]
    });
  });

  it('should be created', inject([CommentService], (service: CommentService) => {
    expect(service).toBeTruthy();
  }));
});
