import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogFiDetailComponent } from './catalog-fi-detail.component';

describe('CatalogFiDetailComponent', () => {
  let component: CatalogFiDetailComponent;
  let fixture: ComponentFixture<CatalogFiDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogFiDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogFiDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
