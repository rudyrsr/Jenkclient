import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogFiNewComponent } from './catalog-fi-new.component';

describe('CatalogFiNewComponent', () => {
  let component: CatalogFiNewComponent;
  let fixture: ComponentFixture<CatalogFiNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogFiNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogFiNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
