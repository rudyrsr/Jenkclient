import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityIssuesComponent } from './security-issues.component';

describe('SecurityIssuesComponent', () => {
  let component: SecurityIssuesComponent;
  let fixture: ComponentFixture<SecurityIssuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityIssuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
