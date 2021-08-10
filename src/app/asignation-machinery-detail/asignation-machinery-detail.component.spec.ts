import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignationMachineryDetailComponent } from './asignation-machinery-detail.component';

describe('AsignationMachineryDetailComponent', () => {
  let component: AsignationMachineryDetailComponent;
  let fixture: ComponentFixture<AsignationMachineryDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignationMachineryDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignationMachineryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
