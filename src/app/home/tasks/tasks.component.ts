import { Component, OnInit } from '@angular/core';

import {MatTableDataSource, MatDialog} from '@angular/material';

import {AddTaskDialogComponent} from './add-task-dialog/add-task-dialog.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

    displayedColumns = ['taskId', 'name', 'memo', 'edit'];
    dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  
  add() {
      let dialogRef = this.dialog.open(AddTaskDialogComponent, {
          width: '450px',
      })
      
      dialogRef.afterClosed().subscribe(result => {
          console.log('the dialog closed');
      });
  }

}

export interface Element {
    taskId: string;
    name: string;
    memo: string;
}

const ELEMENT_DATA: Element[] =[
    {taskId: '00001', name: 'ファイル管理機能を開発', memo: '７月末まで'},
    {taskId: '00001', name: 'ファイル管理機能を開発', memo: '７月末まで'},
    {taskId: '00001', name: 'ファイル管理機能を開発', memo: '７月末まで'},
    {taskId: '00001', name: 'ファイル管理機能を開発', memo: '７月末まで'},
    {taskId: '00001', name: 'ファイル管理機能を開発', memo: '７月末まで'},
    {taskId: '00001', name: 'ファイル管理機能を開発', memo: '７月末まで'},
    {taskId: '00001', name: 'ファイル管理機能を開発', memo: '７月末まで'},
    {taskId: '00001', name: 'ファイル管理機能を開発', memo: '７月末まで'},
    {taskId: '00001', name: 'ファイル管理機能を開発', memo: '７月末まで'},
    {taskId: '00001', name: 'ファイル管理機能を開発', memo: '７月末まで'},
]
