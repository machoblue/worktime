import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWorkrecordDialogComponent } from './add-workrecord-dialog.component';

describe('AddWorkrecordDialogComponent', () => {
  let component: AddWorkrecordDialogComponent;
  let fixture: ComponentFixture<AddWorkrecordDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWorkrecordDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWorkrecordDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
