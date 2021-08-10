import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccidentNewComponent } from './accident-new.component';

describe('AccidentNewComponent', () => {
  let component: AccidentNewComponent;
  let fixture: ComponentFixture<AccidentNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccidentNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccidentNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
