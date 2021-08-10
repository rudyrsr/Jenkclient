import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineryCatalogListComponent } from './machinery-catalog-list.component';

describe('MachineryCatalogListComponent', () => {
  let component: MachineryCatalogListComponent;
  let fixture: ComponentFixture<MachineryCatalogListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachineryCatalogListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineryCatalogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
