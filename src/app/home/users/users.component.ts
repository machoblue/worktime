import { Component, OnInit } from '@angular/core';

import {MatTableDataSource, MatDialog} from '@angular/material';

import {AddUserDialogComponent} from './add-user-dialog/add-user-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

    displayedColumns = ['userId', 'name', 'password', 'memo', 'edit'];
    dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  
  add() {
      let dialogRef = this.dialog.open(AddUserDialogComponent, {
          width: '450px',
      })
      
      dialogRef.afterClosed().subscribe(result => {
          console.log('the dialog closed');
      });
  }

}

export interface Element {
    userId: string;
    name: string;
    password: string;
    memo: string;
}

const ELEMENT_DATA: Element[] =[
    {userId: '4000001', name:'田中一郎', password: 'abc', memo: '新人'},
    {userId: '4000001', name:'田中一郎', password: 'abc', memo: '新人'},
    {userId: '4000001', name:'田中一郎', password: 'abc', memo: '新人'},
    {userId: '4000001', name:'田中一郎', password: 'abc', memo: '新人'},
    {userId: '4000001', name:'田中一郎', password: 'abc', memo: '新人'},
    {userId: '4000001', name:'田中一郎', password: 'abc', memo: '新人'},
    {userId: '4000001', name:'田中一郎', password: 'abc', memo: '新人'},
    {userId: '4000001', name:'田中一郎', password: 'abc', memo: '新人'},
    {userId: '4000001', name:'田中一郎', password: 'abc', memo: '新人'},
    {userId: '4000001', name:'田中一郎', password: 'abc', memo: '新人'}
]
