import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogIncidentDetailComponent } from './catalog-incident-detail.component';

describe('CatalogIncidentDetailComponent', () => {
  let component: CatalogIncidentDetailComponent;
  let fixture: ComponentFixture<CatalogIncidentDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogIncidentDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogIncidentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
