import {Component, OnInit} from '@angular/core';
import {Board} from '../../../interface/board';
import {Router} from '@angular/router';
import {BoardService} from '../../../service/board/board.service';
import {error} from 'util';

@Component({
  selector: 'app-board-form',
  templateUrl: './board-form.component.html',
  styleUrls: ['./board-form.component.css']
})
export class BoardFormComponent implements OnInit {

  data: Board;

  constructor(private boardService: BoardService,
              private router: Router) {
    this.data = {
      id: 0,
      name: '',
      user: null,
      groupTrello: null,
      type: ''
    };
  }

  ngOnInit() {
  }

  createBoard() {
    this.boardService.createBoard(this.data).subscribe((board) => {
      this.router.navigate([`/board/${board.id}`]);
    }, error => {
      console.log(error);
    });
  }
}
