import { Component, OnInit } from '@angular/core';

import {MatTableDataSource} from '@angular/material';

import {MatDialog} from '@angular/material';

import {AddWorkrecordDialogComponent} from './add-workrecord-dialog/add-workrecord-dialog.component';
import {Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-workrecord',
  templateUrl: './workrecord.component.html',
  styleUrls: ['./workrecord.component.css']
})
export class WorkrecordComponent implements OnInit {
    displayedColumns = ['from', 'to', 'taskId', 'name', 'edit'];
    dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
      console.log('workwork');
  }
  
  add() {
      let dialogRef = this.dialog.open(AddWorkrecordDialogComponent, {
          width: '450px',
          // data: {id: '', from: '', to: '', taskId:''}
      });
      dialogRef.afterClosed().subscribe(result => {
          console.log('the dialog closed');
      });
  }
  
}

export interface Element {
    id: string;
    from: string;
    to: string;
    taskId: string;
    name: string;
}

const ELEMENT_DATA: Element[] = [
    {id: '1', from: '2018/05/14 00:00', to: '2018/05/14 12:00', taskId: '00001', name: 'IDが重複しないようにログを修正する。'},
    {id: '1', from: '2018/05/14 00:00', to: '2018/05/14 12:00', taskId: '00001', name: 'IDが重複しないようにログを修正する。'},
    {id: '1', from: '2018/05/14 00:00', to: '2018/05/14 12:00', taskId: '00001', name: 'IDが重複しないようにログを修正する。'},
    {id: '1', from: '2018/05/14 00:00', to: '2018/05/14 12:00', taskId: '00001', name: 'IDが重複しないようにログを修正する。'},
    {id: '1', from: '2018/05/14 00:00', to: '2018/05/14 12:00', taskId: '00001', name: 'IDが重複しないようにログを修正する。'},
    {id: '1', from: '2018/05/14 00:00', to: '2018/05/14 12:00', taskId: '00001', name: 'IDが重複しないようにログを修正する。'},
    {id: '1', from: '2018/05/14 00:00', to: '2018/05/14 12:00', taskId: '00001', name: 'IDが重複しないようにログを修正する。'},
    {id: '1', from: '2018/05/14 00:00', to: '2018/05/14 12:00', taskId: '00001', name: 'IDが重複しないようにログを修正する。'},
    {id: '1', from: '2018/05/14 00:00', to: '2018/05/14 12:00', taskId: '00001', name: 'IDが重複しないようにログを修正する。'},
    {id: '1', from: '2018/05/14 00:00', to: '2018/05/14 12:00', taskId: '00001', name: 'IDが重複しないようにログを修正する。'}
];
