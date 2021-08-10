import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogFiEditComponent } from './catalog-fi-edit.component';

describe('CatalogFiEditComponent', () => {
  let component: CatalogFiEditComponent;
  let fixture: ComponentFixture<CatalogFiEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogFiEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogFiEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
