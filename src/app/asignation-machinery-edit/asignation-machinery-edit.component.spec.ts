import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignationMachineryEditComponent } from './asignation-machinery-edit.component';

describe('AsignationMachineryEditComponent', () => {
  let component: AsignationMachineryEditComponent;
  let fixture: ComponentFixture<AsignationMachineryEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignationMachineryEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignationMachineryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
