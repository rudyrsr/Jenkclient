import { TestBed, inject } from '@angular/core/testing';

import { CatalogFIService } from './catalog-fi.service';

describe('CatalogFIService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CatalogFIService]
    });
  });

  it('should be created', inject([CatalogFIService], (service: CatalogFIService) => {
    expect(service).toBeTruthy();
  }));
});
