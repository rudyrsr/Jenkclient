import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogNiNewComponent } from './catalog-ni-new.component';

describe('CatalogNiNewComponent', () => {
  let component: CatalogNiNewComponent;
  let fixture: ComponentFixture<CatalogNiNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogNiNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogNiNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
