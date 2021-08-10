import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionManualAddComponent } from './function-manual-add.component';

describe('FunctionManualAddComponent', () => {
  let component: FunctionManualAddComponent;
  let fixture: ComponentFixture<FunctionManualAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctionManualAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionManualAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
