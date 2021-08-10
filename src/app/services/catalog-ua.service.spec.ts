import { TestBed, inject } from '@angular/core/testing';

import { CatalogUAService } from './catalog-ua.service';

describe('CatalogUAService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CatalogUAService]
    });
  });

  it('should be created', inject([CatalogUAService], (service: CatalogUAService) => {
    expect(service).toBeTruthy();
  }));
});
