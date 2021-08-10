import { TestBed, inject } from '@angular/core/testing';

import { CatalogNIService } from './catalog-ni.service';

describe('CatalogNIService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CatalogNIService]
    });
  });

  it('should be created', inject([CatalogNIService], (service: CatalogNIService) => {
    expect(service).toBeTruthy();
  }));
});
