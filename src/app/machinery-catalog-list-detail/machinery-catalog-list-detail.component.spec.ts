import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineryCatalogListDetailComponent } from './machinery-catalog-list-detail.component';

describe('MachineryCatalogListDetailComponent', () => {
  let component: MachineryCatalogListDetailComponent;
  let fixture: ComponentFixture<MachineryCatalogListDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachineryCatalogListDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineryCatalogListDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
