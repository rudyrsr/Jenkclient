import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogUcDetailComponent } from './catalog-uc-detail.component';

describe('CatalogUcDetailComponent', () => {
  let component: CatalogUcDetailComponent;
  let fixture: ComponentFixture<CatalogUcDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogUcDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogUcDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
