import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineryReportsComponent } from './machinery-reports.component';

describe('MachineryReportsComponent', () => {
  let component: MachineryReportsComponent;
  let fixture: ComponentFixture<MachineryReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachineryReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineryReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
