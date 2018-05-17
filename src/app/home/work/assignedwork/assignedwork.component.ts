import { Component, OnInit } from '@angular/core';

import {MatTableDataSource, MatDialog} from '@angular/material';

import {AddAssignedworkDialogComponent} from './add-assignedwork-dialog/add-assignedwork-dialog.component';

@Component({
  selector: 'app-assignedwork',
  templateUrl: './assignedwork.component.html',
  styleUrls: ['./assignedwork.component.css']
})
export class AssignedworkComponent implements OnInit {
    // displayedColumns = ['id', 'taskId', 'name', 'memo'];
    displayedColumns = ['taskId', 'name', 'time', 'start', 'end', 'edit'];
    dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
      console.log('workwork');
  }
  
  add() {
      let dialogRef = this.dialog.open(AddAssignedworkDialogComponent, {
          width: '650px'
      });
      dialogRef.afterClosed().subscribe(result => {
          console.log('the dialog closed');
      });
  }
}
          // data: {id: '', userId: '', taskId: ''}

export interface Element {
    id: string;
    taskId: string;
    name: string;
    time: string;
}

const ELEMENT_DATA: Element[] = [
    {id: '1', taskId: '00001', name: 'IDが重複しないようにログを修正する。', time: '00:00:00'},
    {id: '1', taskId: '00001', name: 'IDが重複しないようにログを修正する。', time: '00:00:00'},
    {id: '1', taskId: '00001', name: 'IDが重複しないようにログを修正する。', time: '00:00:00'},
    {id: '1', taskId: '00001', name: 'IDが重複しないようにログを修正する。', time: '00:00:00'},
    {id: '1', taskId: '00001', name: 'IDが重複しないようにログを修正する。', time: '00:00:00'},
    {id: '1', taskId: '00001', name: 'IDが重複しないようにログを修正する。', time: '00:00:00'},
    {id: '1', taskId: '00001', name: 'IDが重複しないようにログを修正する。', time: '00:00:00'},
    {id: '1', taskId: '00001', name: 'IDが重複しないようにログを修正する。', time: '00:00:00'},
    {id: '1', taskId: '00001', name: 'IDが重複しないようにログを修正する。', time: '00:00:00'},
    {id: '1', taskId: '00001', name: 'IDが重複しないようにログを修正する。', time: '00:00:00'}
];