import { Component, OnInit } from '@angular/core';
import { Config } from '../config';
import { DataTableService } from '../data-table.service';
import { DetailModalComponent } from '../detail-modal/detail-modal.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  tableData : Config[] = [];
  displayedColumns: string[] = ['name','user-type','entity','user-status','action'];
  dataSource = this.tableData;

  constructor(private dataTableService: DataTableService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getTableData();
  }

  getTableData() {
    this.dataTableService.getData().subscribe(data => {
      this.tableData = data;
      console.log(data);
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DetailModalComponent, {
      width: '80%',
      // data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

}
