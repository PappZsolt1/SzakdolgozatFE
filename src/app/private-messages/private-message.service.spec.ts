import { TestBed, inject } from '@angular/core/testing';

import { PrivateMessagesService } from './private-message.service';

describe('PrivateMessagesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrivateMessagesService]
    });
  });

  it('should be created', inject([PrivateMessagesService], (service: PrivateMessagesService) => {
    expect(service).toBeTruthy();
  }));
});
