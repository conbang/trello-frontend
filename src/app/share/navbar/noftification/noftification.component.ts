import { Component, OnInit } from '@angular/core';
import {Notification} from '../../../interface/notification';

@Component({
  selector: 'app-noftification',
  templateUrl: './noftification.component.html',
  styleUrls: ['./noftification.component.css']
})
export class NoftificationComponent implements OnInit {

  notification: Notification;
  constructor() { }

  ngOnInit() {
  }

}
