import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogTdEditComponent } from './catalog-td-edit.component';

describe('CatalogTdEditComponent', () => {
  let component: CatalogTdEditComponent;
  let fixture: ComponentFixture<CatalogTdEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogTdEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogTdEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
