import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AsignationItemAddComponent} from './asignation-item-add.component';

describe('AsignationItemAddComponent', () => {
  let component: AsignationItemAddComponent;
  let fixture: ComponentFixture<AsignationItemAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AsignationItemAddComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignationItemAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
