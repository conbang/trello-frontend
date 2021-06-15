import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatFormFieldModule} from '@angular/material';

export interface DialogData {
  name: string;
  type: string;
  description: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  name: string;
  type: string;
  description: string;


  constructor(public dialog: MatDialog) {}

  openDialog(): void {
      this.dialog.open(SidebarDialog, {
      width: '600px',
      data: {name: this.name, type: this.type, description: this.description}
      });
  }

  ngOnInit() {
  }

}

@Component({
  selector: 'app-sidebar-dialog',
  templateUrl: './sidebar-dialog.component.html',
})
export class SidebarDialog {
  constructor(
    // public dialogRef: MatDialogRef<WorkspaceDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  // onNoClick(): void {
  //   this.dialogRef.close();
  // }

}
