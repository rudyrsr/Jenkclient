import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogIncidentEditComponent } from './catalog-incident-edit.component';

describe('CatalogIncidentEditComponent', () => {
  let component: CatalogIncidentEditComponent;
  let fixture: ComponentFixture<CatalogIncidentEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogIncidentEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogIncidentEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
