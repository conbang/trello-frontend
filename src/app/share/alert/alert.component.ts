import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  message = '';
  icon = '';

  constructor() {
  }

  ngOnInit() {
  }

  setMessage(message: string) {
    this.message = message;
  }

  setIcon(icon: string) {
    this.icon = icon;
  }

}
