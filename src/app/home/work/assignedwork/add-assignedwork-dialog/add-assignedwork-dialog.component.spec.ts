import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAssignedworkDialogComponent } from './add-assignedwork-dialog.component';

describe('AddAssignedworkDialogComponent', () => {
  let component: AddAssignedworkDialogComponent;
  let fixture: ComponentFixture<AddAssignedworkDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAssignedworkDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAssignedworkDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
