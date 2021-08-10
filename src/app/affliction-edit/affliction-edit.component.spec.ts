import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfflictionEditComponent } from './affliction-edit.component';

describe('AfflictionEditComponent', () => {
  let component: AfflictionEditComponent;
  let fixture: ComponentFixture<AfflictionEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfflictionEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfflictionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
