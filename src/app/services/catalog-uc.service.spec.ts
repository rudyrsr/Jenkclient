import { TestBed, inject } from '@angular/core/testing';

import { CatalogUCService } from './catalog-uc.service';

describe('CatalogUCService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CatalogUCService]
    });
  });

  it('should be created', inject([CatalogUCService], (service: CatalogUCService) => {
    expect(service).toBeTruthy();
  }));
});
