import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SecurityItemsComponent} from './security-items.component';

describe('SecurityItemsComponent', () => {
  let component: SecurityItemsComponent;
  let fixture: ComponentFixture<SecurityItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SecurityItemsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
