import { TestBed, inject } from '@angular/core/testing';

import { ProjectAsignationService } from './project-asignation.service';

describe('ProjectAsignationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectAsignationService]
    });
  });

  it('should be created', inject([ProjectAsignationService], (service: ProjectAsignationService) => {
    expect(service).toBeTruthy();
  }));
});
