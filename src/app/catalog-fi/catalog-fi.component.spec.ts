import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogFIComponent } from './catalog-fi.component';

describe('CatalogFIComponent', () => {
  let component: CatalogFIComponent;
  let fixture: ComponentFixture<CatalogFIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogFIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogFIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
