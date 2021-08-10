import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditoryHistoryComponent } from './auditory-history.component';

describe('AuditoryHistoryComponent', () => {
  let component: AuditoryHistoryComponent;
  let fixture: ComponentFixture<AuditoryHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditoryHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditoryHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
