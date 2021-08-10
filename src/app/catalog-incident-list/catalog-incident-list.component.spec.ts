import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogIncidentListComponent } from './catalog-incident-list.component';

describe('CatalogIncidentListComponent', () => {
  let component: CatalogIncidentListComponent;
  let fixture: ComponentFixture<CatalogIncidentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogIncidentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogIncidentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
