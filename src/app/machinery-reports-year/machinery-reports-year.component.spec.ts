import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineryReportsYearComponent } from './machinery-reports-year.component';

describe('MachineryReportsYearComponent', () => {
  let component: MachineryReportsYearComponent;
  let fixture: ComponentFixture<MachineryReportsYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachineryReportsYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineryReportsYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
