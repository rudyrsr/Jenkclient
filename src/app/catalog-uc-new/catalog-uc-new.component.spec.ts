import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogUcNewComponent } from './catalog-uc-new.component';

describe('CatalogUcNewComponent', () => {
  let component: CatalogUcNewComponent;
  let fixture: ComponentFixture<CatalogUcNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogUcNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogUcNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
