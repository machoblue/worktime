import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-add-user-dialog',
  templateUrl: './add-user-dialog.component.html',
  styleUrls: ['./add-user-dialog.component.css']
})
export class AddUserDialogComponent implements OnInit {
    user = {
        userId: '',
        name: '',
        password: '',
        memo: '',
    };

  constructor(public dialog: MatDialogRef<AddUserDialogComponent>, @Inject(MAT_DIALOG_DATA)  public data: any) { }

  ngOnInit() {
  }
  
  remove() {
      console.log('remove');
      this.dialog.close();
  }

}
