import { Component, OnInit } from '@angular/core';

export interface Section {
  name: String;
}

@Component({
  selector: 'app-list-board',
  templateUrl: './list-board.component.html',
  styleUrls: ['./list-board.component.css']
})
export class ListBoardComponent implements OnInit {
  tagged: Section[] = [
    {
      name: 'Trello_No Exception',
    },{
      name: 'Work',
    }
  ];
  notagged: Section[] = [
    {
      name: 'ZingMp3_Vitamin Smile',
    },
    {
      name: 'Thuê nhà_Củi Khô',
    },
    {
      name: 'Private',
    }

  ];
  constructor() { }

  ngOnInit() {
  }

}
