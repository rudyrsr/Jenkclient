import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcupationaCommitteeEditComponent } from './ocupationa-committee-edit.component';

describe('OcupationaCommitteeEditComponent', () => {
  let component: OcupationaCommitteeEditComponent;
  let fixture: ComponentFixture<OcupationaCommitteeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcupationaCommitteeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcupationaCommitteeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
