import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectAsignationEditComponent } from './project-asignation-edit.component';

describe('ProjectAsignationEditComponent', () => {
  let component: ProjectAsignationEditComponent;
  let fixture: ComponentFixture<ProjectAsignationEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectAsignationEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectAsignationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
