import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogUAComponent } from './catalog-ua.component';

describe('CatalogUAComponent', () => {
  let component: CatalogUAComponent;
  let fixture: ComponentFixture<CatalogUAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogUAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogUAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
