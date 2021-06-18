import { Component, OnInit } from '@angular/core';
import {IBoard} from '../../board/interface/i-board';
import {BoardService} from '../../../service/board/board.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-board-public',
  templateUrl: './list-board-public.component.html',
  styleUrls: ['./list-board-public.component.css']
})
export class ListBoardPublicComponent implements OnInit {
  boards: IBoard[] = [
  ];

  constructor(private boardService: BoardService,
              private router: Router) { }

  findBoardPublic() {
    this.boardService.getBoardPublic().subscribe(boards => {
      this.boards = boards;
    });
  }
  ngOnInit() {
    this.findBoardPublic();
  }
}
