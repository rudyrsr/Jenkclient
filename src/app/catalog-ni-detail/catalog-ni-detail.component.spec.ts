import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogNiDetailComponent } from './catalog-ni-detail.component';

describe('CatalogNiDetailComponent', () => {
  let component: CatalogNiDetailComponent;
  let fixture: ComponentFixture<CatalogNiDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogNiDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogNiDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
