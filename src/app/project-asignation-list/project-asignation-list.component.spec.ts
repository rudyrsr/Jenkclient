import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectAsignationListComponent } from './project-asignation-list.component';

describe('ProjectAsignationListComponent', () => {
  let component: ProjectAsignationListComponent;
  let fixture: ComponentFixture<ProjectAsignationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectAsignationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectAsignationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
