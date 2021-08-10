import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfflictionDetailComponent } from './affliction-detail.component';

describe('AfflictionDetailComponent', () => {
  let component: AfflictionDetailComponent;
  let fixture: ComponentFixture<AfflictionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfflictionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfflictionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
