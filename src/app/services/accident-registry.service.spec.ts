import { TestBed, inject } from '@angular/core/testing';

import { AccidentRegistryService } from './accident-registry.service';

describe('AccidentRegistryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccidentRegistryService]
    });
  });

  it('should be created', inject([AccidentRegistryService], (service: AccidentRegistryService) => {
    expect(service).toBeTruthy();
  }));
});
