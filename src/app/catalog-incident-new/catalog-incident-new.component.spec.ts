import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogIncidentNewComponent } from './catalog-incident-new.component';

describe('CatalogIncidentNewComponent', () => {
  let component: CatalogIncidentNewComponent;
  let fixture: ComponentFixture<CatalogIncidentNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogIncidentNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogIncidentNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
