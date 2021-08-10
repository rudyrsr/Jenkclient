import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogAfflictionListComponent } from './catalog-affliction-list.component';

describe('CatalogAfflictionListComponent', () => {
  let component: CatalogAfflictionListComponent;
  let fixture: ComponentFixture<CatalogAfflictionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogAfflictionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogAfflictionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
