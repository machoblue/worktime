import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-add-assignedwork-dialog',
  templateUrl: './add-assignedwork-dialog.component.html',
  styleUrls: ['./add-assignedwork-dialog.component.css']
})
export class AddAssignedworkDialogComponent implements OnInit {

    displayedColumns = ['selected', 'taskId', 'name'];
    dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(public dialog: MatDialogRef<AddAssignedworkDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }
  
}

export interface Element {
    selected: boolean;
    taskId: string;
    name: string;
}

const ELEMENT_DATA: Element[] = [
    {selected: false, taskId: '00001', name: 'ファイル管理機能の開発'},
    {selected: false, taskId: '00001', name: 'ファイル管理機能の開発'},
    {selected: false, taskId: '00001', name: 'ファイル管理機能の開発'},
    {selected: false, taskId: '00001', name: 'ファイル管理機能の開発'},
    {selected: false, taskId: '00001', name: 'ファイル管理機能の開発'},
    {selected: false, taskId: '00001', name: 'ファイル管理機能の開発'}
];
