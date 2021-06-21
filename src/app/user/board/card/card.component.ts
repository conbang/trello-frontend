import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

// import {Card} from '../../../interface/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Output() edit = new EventEmitter<void>();
  @Input() title: string;

  constructor() {
  }

  ngOnInit(): void {
  }
}
