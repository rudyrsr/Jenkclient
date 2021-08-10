import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionManualDetailComponent } from './function-manual-detail.component';

describe('FunctionManualDetailComponent', () => {
  let component: FunctionManualDetailComponent;
  let fixture: ComponentFixture<FunctionManualDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctionManualDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionManualDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
