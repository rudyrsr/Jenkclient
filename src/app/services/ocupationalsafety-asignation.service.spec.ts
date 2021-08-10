import { TestBed, inject } from '@angular/core/testing';

import { OcupationalSafetyAsignationService } from './ocupationalsafety-asignation.service';

describe('OcupationalSafetyAsignationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OcupationalSafetyAsignationService]
    });
  });

  it('should be created', inject([OcupationalSafetyAsignationService], (service: OcupationalSafetyAsignationService) => {
    expect(service).toBeTruthy();
  }));
});
