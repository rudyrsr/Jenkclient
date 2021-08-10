import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineryCatalogEditComponent } from './machinery-catalog-edit.component';

describe('MachineryCatalogEditComponent', () => {
  let component: MachineryCatalogEditComponent;
  let fixture: ComponentFixture<MachineryCatalogEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachineryCatalogEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineryCatalogEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
