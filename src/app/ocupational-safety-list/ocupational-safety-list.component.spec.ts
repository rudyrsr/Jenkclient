import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcupationalSafetyListComponent } from './ocupational-safety-list.component';

describe('OcupationalSafetyListComponent', () => {
  let component: OcupationalSafetyListComponent;
  let fixture: ComponentFixture<OcupationalSafetyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcupationalSafetyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcupationalSafetyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
