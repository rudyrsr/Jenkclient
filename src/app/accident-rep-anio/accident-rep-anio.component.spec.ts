import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AccidentRepAnioComponent} from './accident-rep-anio.component';

describe('AccidentRepAnioComponent', () => {
  let component: AccidentRepAnioComponent;
  let fixture: ComponentFixture<AccidentRepAnioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AccidentRepAnioComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccidentRepAnioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
