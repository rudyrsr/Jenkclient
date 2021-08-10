import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogUaNewComponent } from './catalog-ua-new.component';

describe('CatalogUaNewComponent', () => {
  let component: CatalogUaNewComponent;
  let fixture: ComponentFixture<CatalogUaNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogUaNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogUaNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
