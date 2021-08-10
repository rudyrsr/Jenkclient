import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignationMachineryListComponent } from './asignation-machinery-list.component';

describe('AsignationMachineryListComponent', () => {
  let component: AsignationMachineryListComponent;
  let fixture: ComponentFixture<AsignationMachineryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignationMachineryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignationMachineryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
