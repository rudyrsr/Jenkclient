import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogUCComponent } from './catalog-uc.component';

describe('CatalogUCComponent', () => {
  let component: CatalogUCComponent;
  let fixture: ComponentFixture<CatalogUCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogUCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogUCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
