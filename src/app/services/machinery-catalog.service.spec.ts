import { TestBed, inject } from '@angular/core/testing';

import { MachineryCatalogService } from './machinery-catalog.service';

describe('MachineryCatalogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MachineryCatalogService]
    });
  });

  it('should be created', inject([MachineryCatalogService], (service: MachineryCatalogService) => {
    expect(service).toBeTruthy();
  }));
});
