import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogUcEditComponent } from './catalog-uc-edit.component';

describe('CatalogUcEditComponent', () => {
  let component: CatalogUcEditComponent;
  let fixture: ComponentFixture<CatalogUcEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogUcEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogUcEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
