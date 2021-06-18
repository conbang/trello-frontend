import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Card} from '../../../interface/card';
import {MatDialog} from '@angular/material/dialog';
import {CardEditFormComponent} from '../card-edit-form/card-edit-form.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card: Card;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  edit(card: Card) {
    this.dialog.open(CardEditFormComponent, {
      data: {card: {card}}
    });
  }
}
