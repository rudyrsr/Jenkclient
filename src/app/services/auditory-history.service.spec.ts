import { TestBed, inject } from '@angular/core/testing';

import { AuditoryHistoryService } from './auditory-history.service';

describe('AuditoryHistoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuditoryHistoryService]
    });
  });

  it('should be created', inject([AuditoryHistoryService], (service: AuditoryHistoryService) => {
    expect(service).toBeTruthy();
  }));
});
