import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineryNewComponent } from './machinery-new.component';

describe('MachineryNewComponent', () => {
  let component: MachineryNewComponent;
  let fixture: ComponentFixture<MachineryNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachineryNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineryNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
