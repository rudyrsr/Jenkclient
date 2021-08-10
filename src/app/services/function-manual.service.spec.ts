import { TestBed, inject } from '@angular/core/testing';

import { FunctionManualService } from './function-manual.service';

describe('FunctionManualService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FunctionManualService]
    });
  });

  it('should be created', inject([FunctionManualService], (service: FunctionManualService) => {
    expect(service).toBeTruthy();
  }));
});
