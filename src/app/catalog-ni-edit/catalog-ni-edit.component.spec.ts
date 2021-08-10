import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogNiEditComponent } from './catalog-ni-edit.component';

describe('CatalogNiEditComponent', () => {
  let component: CatalogNiEditComponent;
  let fixture: ComponentFixture<CatalogNiEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogNiEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogNiEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
