import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionManualComponent } from './position-manual.component';

describe('PositionManualComponent', () => {
  let component: PositionManualComponent;
  let fixture: ComponentFixture<PositionManualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PositionManualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
