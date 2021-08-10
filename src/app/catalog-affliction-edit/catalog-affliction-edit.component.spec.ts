import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogAfflictionEditComponent } from './catalog-affliction-edit.component';

describe('CatalogAfflictionEditComponent', () => {
  let component: CatalogAfflictionEditComponent;
  let fixture: ComponentFixture<CatalogAfflictionEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogAfflictionEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogAfflictionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
