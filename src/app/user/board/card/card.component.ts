import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {appConstants} from '../../../interface/appConstants';
import {IssueType} from '../../../interface/schema.model';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  issueTypesWithColor = appConstants.issueTypeListWithColor;
  issueTypes = Object.values(IssueType);
  @Output() edit = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();
  @Input() title: string;
  @Input() content: string;
  @Input() tags: [];
  @Input() image: string;
  @Input() issueType?: string;
  @Input() createdAt: Date;

  constructor() { }

  ngOnInit() {
  }

}
