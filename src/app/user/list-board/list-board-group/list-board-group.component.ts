import { Component, OnInit } from '@angular/core';
import {IBoard} from '../../board/interface/i-board';
import {BoardService} from '../../../service/board/board.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-board-group',
  templateUrl: './list-board-group.component.html',
  styleUrls: ['./list-board-group.component.css']
})
export class ListBoardGroupComponent implements OnInit {
  boards: IBoard[] = [
  ];

  constructor(private boardService: BoardService,
              private router: Router) { }

  findBoardGroup() {
    this.boardService.getBoardGroup().subscribe(boards => {
      this.boards = boards;
    });
  }
  ngOnInit() {
    this.findBoardGroup();
  }

}
