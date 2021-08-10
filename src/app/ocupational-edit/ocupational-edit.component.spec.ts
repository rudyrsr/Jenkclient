import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcupationalEditComponent } from './ocupational-edit.component';

describe('OcupationalEditComponent', () => {
  let component: OcupationalEditComponent;
  let fixture: ComponentFixture<OcupationalEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcupationalEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcupationalEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
