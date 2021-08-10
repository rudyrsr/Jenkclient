import { TestBed, inject } from '@angular/core/testing';

import { AfflictionService } from './affliction.service';

describe('AfflictionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AfflictionService]
    });
  });

  it('should be created', inject([AfflictionService], (service: AfflictionService) => {
    expect(service).toBeTruthy();
  }));
});
