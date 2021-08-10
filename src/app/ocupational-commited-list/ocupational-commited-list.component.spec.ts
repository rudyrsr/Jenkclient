import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcupationalCommitedListComponent } from './ocupational-commited-list.component';

describe('OcupationalCommitedListComponent', () => {
  let component: OcupationalCommitedListComponent;
  let fixture: ComponentFixture<OcupationalCommitedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcupationalCommitedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcupationalCommitedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
