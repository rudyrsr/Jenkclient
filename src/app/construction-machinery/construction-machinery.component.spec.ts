import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructionMachineryComponent } from './construction-machinery.component';

describe('ConstructionMachineryComponent', () => {
  let component: ConstructionMachineryComponent;
  let fixture: ComponentFixture<ConstructionMachineryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstructionMachineryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructionMachineryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
