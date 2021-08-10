import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfflictionNewComponent } from './affliction-new.component';

describe('AfflictionNewComponent', () => {
  let component: AfflictionNewComponent;
  let fixture: ComponentFixture<AfflictionNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfflictionNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfflictionNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
