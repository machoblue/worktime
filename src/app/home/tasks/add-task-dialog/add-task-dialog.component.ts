import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-add-task-dialog',
  templateUrl: './add-task-dialog.component.html',
  styleUrls: ['./add-task-dialog.component.css']
})
export class AddTaskDialogComponent implements OnInit {
    task = {
        taskId: '',
        name: '',
        memo: '',
    };

  constructor(public dialog: MatDialogRef<AddTaskDialogComponent>, @Inject(MAT_DIALOG_DATA)  public data: any) { }

  ngOnInit() {
  }
  
  remove() {
      console.log('remove');
      this.dialog.close();
  }

}
