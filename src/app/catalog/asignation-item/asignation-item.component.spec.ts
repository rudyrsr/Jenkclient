import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AsignationItemComponent} from './asignation-item.component';

describe('AsignationItemComponent', () => {
  let component: AsignationItemComponent;
  let fixture: ComponentFixture<AsignationItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AsignationItemComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
