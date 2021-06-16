import { Component, OnInit } from '@angular/core';
import {BoardService} from '../../service/boardService/board.service';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {

  constructor(
    public boardService: BoardService

  ) { }

  ngOnInit() {
  }
}
