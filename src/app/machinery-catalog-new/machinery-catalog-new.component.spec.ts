import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineryCatalogNewComponent } from './machinery-catalog-new.component';

describe('MachineryCatalogNewComponent', () => {
  let component: MachineryCatalogNewComponent;
  let fixture: ComponentFixture<MachineryCatalogNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachineryCatalogNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineryCatalogNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
