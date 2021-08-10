import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogUaEditComponent } from './catalog-ua-edit.component';

describe('CatalogUaEditComponent', () => {
  let component: CatalogUaEditComponent;
  let fixture: ComponentFixture<CatalogUaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogUaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogUaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
