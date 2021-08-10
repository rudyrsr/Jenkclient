import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccidentRegistryDetailComponent } from './accident-registry-detail.component';

describe('AccidentRegistryDetailComponent', () => {
  let component: AccidentRegistryDetailComponent;
  let fixture: ComponentFixture<AccidentRegistryDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccidentRegistryDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccidentRegistryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
