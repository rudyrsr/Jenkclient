import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogUaDetailComponent } from './catalog-ua-detail.component';

describe('CatalogUaDetailComponent', () => {
  let component: CatalogUaDetailComponent;
  let fixture: ComponentFixture<CatalogUaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogUaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogUaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
