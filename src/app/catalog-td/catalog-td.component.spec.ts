import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogTDComponent } from './catalog-td.component';

describe('CatalogTDComponent', () => {
  let component: CatalogTDComponent;
  let fixture: ComponentFixture<CatalogTDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogTDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogTDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
