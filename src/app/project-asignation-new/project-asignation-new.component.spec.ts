import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectAsignationNewComponent } from './project-asignation-new.component';

describe('ProjectAsignationNewComponent', () => {
  let component: ProjectAsignationNewComponent;
  let fixture: ComponentFixture<ProjectAsignationNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectAsignationNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectAsignationNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
