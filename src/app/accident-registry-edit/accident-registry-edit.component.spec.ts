import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccidentRegistryEditComponent } from './accident-registry-edit.component';

describe('AccidentRegistryEditComponent', () => {
  let component: AccidentRegistryEditComponent;
  let fixture: ComponentFixture<AccidentRegistryEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccidentRegistryEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccidentRegistryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
