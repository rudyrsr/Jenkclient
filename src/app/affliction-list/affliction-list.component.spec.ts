import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfflictionListComponent } from './affliction-list.component';

describe('AfflictionListComponent', () => {
  let component: AfflictionListComponent;
  let fixture: ComponentFixture<AfflictionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfflictionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfflictionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
