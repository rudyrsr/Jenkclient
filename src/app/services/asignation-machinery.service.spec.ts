import { TestBed, inject } from '@angular/core/testing';

import { AsignationMachineryService } from './asignation-machinery.service';

describe('AsignationMachineryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AsignationMachineryService]
    });
  });

  it('should be created', inject([AsignationMachineryService], (service: AsignationMachineryService) => {
    expect(service).toBeTruthy();
  }));
});
