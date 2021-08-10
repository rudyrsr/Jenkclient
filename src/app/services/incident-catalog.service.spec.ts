import { TestBed, inject } from '@angular/core/testing';

import { IncidentCatalogService } from './incident-catalog.service';

describe('IncidentCatalogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IncidentCatalogService]
    });
  });

  it('should be created', inject([IncidentCatalogService], (service: IncidentCatalogService) => {
    expect(service).toBeTruthy();
  }));
});
