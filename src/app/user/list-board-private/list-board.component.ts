import { Component, OnInit } from '@angular/core';
import {IBoard} from '../board/interface/i-board';
import {BoardService} from '../../service/board/board.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-board',
  templateUrl: './list-board.component.html',
  styleUrls: ['./list-board.component.css']
})
export class ListBoardComponent implements OnInit {
  boards: IBoard[] = [
    ];

  constructor(private boardService: BoardService,
              private router: Router) { }

  findBoardPrivate() {
      this.boardService.getBoardPrivate().subscribe(boards => {
        this.boards = boards;
      });
  }
  ngOnInit() {
    this.findBoardPrivate();
  }

}
