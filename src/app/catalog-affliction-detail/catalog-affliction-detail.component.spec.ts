import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogAfflictionDetailComponent } from './catalog-affliction-detail.component';

describe('CatalogAfflictionDetailComponent', () => {
  let component: CatalogAfflictionDetailComponent;
  let fixture: ComponentFixture<CatalogAfflictionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogAfflictionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogAfflictionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
