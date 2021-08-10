import {inject, TestBed} from '@angular/core/testing';

import {ImageItemService} from './image-item.service';

describe('ImageItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImageItemService]
    });
  });

  it('should be created', inject([ImageItemService], (service: ImageItemService) => {
    expect(service).toBeTruthy();
  }));
});
