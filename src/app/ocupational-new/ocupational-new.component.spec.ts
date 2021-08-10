import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcupationalNewComponent } from './ocupational-new.component';

describe('OcupationalNewComponent', () => {
  let component: OcupationalNewComponent;
  let fixture: ComponentFixture<OcupationalNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcupationalNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcupationalNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
