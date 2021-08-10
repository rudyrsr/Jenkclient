import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AsignationItemUpdateComponent} from './asignation-item-update.component';

describe('AsignationItemUpdateComponent', () => {
  let component: AsignationItemUpdateComponent;
  let fixture: ComponentFixture<AsignationItemUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AsignationItemUpdateComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignationItemUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
