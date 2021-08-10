import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionManualComponent } from './function-manual.component';

describe('FunctionManualComponent', () => {
  let component: FunctionManualComponent;
  let fixture: ComponentFixture<FunctionManualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctionManualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
