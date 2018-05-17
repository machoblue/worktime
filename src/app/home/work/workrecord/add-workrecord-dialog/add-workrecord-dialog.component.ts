import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-add-workrecord-dialog',
  templateUrl: './add-workrecord-dialog.component.html',
  styleUrls: ['./add-workrecord-dialog.component.css']
})
export class AddWorkrecordDialogComponent implements OnInit {
    hour = [
        {value: 0, viewValue: '00'},
        {value: 1, viewValue: '01'},
        {value: 2, viewValue: '02'},
        {value: 3, viewValue: '03'},
        {value: 4, viewValue: '04'},
        {value: 5, viewValue: '05'},
        {value: 6, viewValue: '06'},
        {value: 7, viewValue: '07'},
        {value: 8, viewValue: '08'},
        {value: 9, viewValue: '09'},
        {value: 10, viewValue: '10'},
        {value: 11, viewValue: '11'},
        {value: 12, viewValue: '12'},
        {value: 13, viewValue: '13'},
        {value: 14, viewValue: '14'},
        {value: 15, viewValue: '15'},
        {value: 16, viewValue: '16'},
        {value: 17, viewValue: '17'},
        {value: 18, viewValue: '18'},
        {value: 19, viewValue: '19'},
        {value: 20, viewValue: '20'},
        {value: 21, viewValue: '21'},
        {value: 22, viewValue: '22'},
        {value: 23, viewValue: '23'},
    ];
    minute = [
        {value:0, viewValue:'00'},
        {value:5, viewValue:'05'},
        {value:10, viewValue:'10'},
        {value:15, viewValue:'15'},
        {value:20, viewValue:'20'},
        {value:25, viewValue:'25'},
        {value:30, viewValue:'30'},
        {value:35, viewValue:'35'},
        {value:40, viewValue:'40'},
        {value:45, viewValue:'45'},
        {value:50, viewValue:'50'},
        {value:55, viewValue:'55'},
    ];
    tasks = [
        {value:'00001', viewValue:'00001:ファイル管理機能を開発'},
        {value:'00001', viewValue:'00001:ファイル管理機能を開発'},
        {value:'00001', viewValue:'00001:ファイル管理機能を開発'},
        {value:'00001', viewValue:'00001:ファイル管理機能を開発'},
        {value:'00001', viewValue:'00001:ファイル管理機能を開発'}
    ]

  constructor(public dialog: MatDialogRef<AddWorkrecordDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }
  
  remove() {
      console.log('remove');
      this.dialog.close();
  }

}
