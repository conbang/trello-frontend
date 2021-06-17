import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {DialogData} from '../../interface/dialog-data';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  message = 'Create success!';
  icon = 'check_circle_outline';

  constructor(@Inject(MAT_DIALOG_DATA) public para: DialogData) {
  }

  ngOnInit() {
  }

}
