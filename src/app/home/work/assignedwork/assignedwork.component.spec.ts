import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedworkComponent } from './assignedwork.component';

describe('AssignedworkComponent', () => {
  let component: AssignedworkComponent;
  let fixture: ComponentFixture<AssignedworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignedworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
