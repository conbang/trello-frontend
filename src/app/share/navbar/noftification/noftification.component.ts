import {Component, Input, OnInit} from '@angular/core';
import {Notification} from '../../../interface/notification';

@Component({
  selector: 'app-noftification',
  templateUrl: './noftification.component.html',
  styleUrls: ['./noftification.component.css']
})
export class NoftificationComponent implements OnInit {

  @Input() notification: Notification;

  constructor() { }

  ngOnInit() {
  }

}
