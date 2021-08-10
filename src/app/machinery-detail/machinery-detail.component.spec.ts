import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineryDetailComponent } from './machinery-detail.component';

describe('MachineryDetailComponent', () => {
  let component: MachineryDetailComponent;
  let fixture: ComponentFixture<MachineryDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachineryDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
