import { TestBed, inject } from '@angular/core/testing';

import { AffictionCatalogService } from './affiction-catalog.service';

describe('AffictionCatalogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AffictionCatalogService]
    });
  });

  it('should be created', inject([AffictionCatalogService], (service: AffictionCatalogService) => {
    expect(service).toBeTruthy();
  }));
});
