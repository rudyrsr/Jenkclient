import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignationMachineryNewComponent } from './asignation-machinery-new.component';

describe('AsignationMachineryNewComponent', () => {
  let component: AsignationMachineryNewComponent;
  let fixture: ComponentFixture<AsignationMachineryNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignationMachineryNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignationMachineryNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
