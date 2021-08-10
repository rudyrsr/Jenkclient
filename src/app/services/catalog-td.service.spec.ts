import { TestBed, inject } from '@angular/core/testing';

import { CatalogTDService } from './catalog-td.service';

describe('CatalogTDService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CatalogTDService]
    });
  });

  it('should be created', inject([CatalogTDService], (service: CatalogTDService) => {
    expect(service).toBeTruthy();
  }));
});
