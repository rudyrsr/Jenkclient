import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccidentRegistryComponent } from './accident-registry.component';

describe('AccidentRegistryComponent', () => {
  let component: AccidentRegistryComponent;
  let fixture: ComponentFixture<AccidentRegistryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccidentRegistryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccidentRegistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
