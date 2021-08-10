import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogTdNewComponent } from './catalog-td-new.component';

describe('CatalogTdNewComponent', () => {
  let component: CatalogTdNewComponent;
  let fixture: ComponentFixture<CatalogTdNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogTdNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogTdNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
