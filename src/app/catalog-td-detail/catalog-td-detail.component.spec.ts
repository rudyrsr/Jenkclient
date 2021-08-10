import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogTdDetailComponent } from './catalog-td-detail.component';

describe('CatalogTdDetailComponent', () => {
  let component: CatalogTdDetailComponent;
  let fixture: ComponentFixture<CatalogTdDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogTdDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogTdDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
