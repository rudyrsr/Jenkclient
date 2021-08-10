import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogNIComponent } from './catalog-ni.component';

describe('CatalogNIComponent', () => {
  let component: CatalogNIComponent;
  let fixture: ComponentFixture<CatalogNIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogNIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogNIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
