import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionManualEditComponent } from './function-manual-edit.component';

describe('FunctionManualEditComponent', () => {
  let component: FunctionManualEditComponent;
  let fixture: ComponentFixture<FunctionManualEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctionManualEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionManualEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
