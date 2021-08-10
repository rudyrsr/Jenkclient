import {inject, TestBed} from '@angular/core/testing';

import {AsignationItemService} from './asignation-item.service';

describe('AsignationItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AsignationItemService]
    });
  });

  it('should be created', inject([AsignationItemService], (service: AsignationItemService) => {
    expect(service).toBeTruthy();
  }));
});
