import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineryListComponent } from './machinery-list.component';

describe('MachineryListComponent', () => {
  let component: MachineryListComponent;
  let fixture: ComponentFixture<MachineryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachineryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
