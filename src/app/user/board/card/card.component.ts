import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {appConstants} from '../../../interface/appConstants';
import {Label} from '../../../interface/schema.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  issueTypesWithColor = appConstants.issueTypeListWithColor;
  issueTypes = Object.values(Label);
  @Output() edit = new EventEmitter<void>();
  @Input() text: string;
  @Input() title: string;
  @Input() tags: [];
  @Input() image: string;
  @Input() issueType?: string;

  constructor() { }

  ngOnInit() {
  }

}
