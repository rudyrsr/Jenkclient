import { TestBed, inject } from '@angular/core/testing';

import { OcupationalSafety } from './ocupationalsafety.service';

describe('OcupationalSafetyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OcupationalSafety]
    });
  });

  it('should be created', inject([OcupationalSafety], (service: OcupationalSafety) => {
    expect(service).toBeTruthy();
  }));
});
