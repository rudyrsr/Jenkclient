import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogAfflictionNewComponent } from './catalog-affliction-new.component';

describe('CatalogAfflictionNewComponent', () => {
  let component: CatalogAfflictionNewComponent;
  let fixture: ComponentFixture<CatalogAfflictionNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogAfflictionNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogAfflictionNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
