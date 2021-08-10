import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitedOcupationalNewComponent } from './commited-ocupational-new.component';

describe('CommitedOcupationalNewComponent', () => {
  let component: CommitedOcupationalNewComponent;
  let fixture: ComponentFixture<CommitedOcupationalNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommitedOcupationalNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitedOcupationalNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
