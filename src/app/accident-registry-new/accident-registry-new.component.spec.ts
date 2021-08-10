import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccidentRegistryNewComponent } from './accident-registry-new.component';

describe('AccidentRegistryNewComponent', () => {
  let component: AccidentRegistryNewComponent;
  let fixture: ComponentFixture<AccidentRegistryNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccidentRegistryNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccidentRegistryNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
