import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {BoardService} from '../../../service/board/board.service';
import {MatDialog} from '@angular/material';
import {AlertComponent} from '../../alert/alert.component';
import {Board} from '../../../interface/board';

@Component({
  selector: 'app-board-form',
  templateUrl: './board-form.component.html',
  styleUrls: ['./board-form.component.css']
})
export class BoardFormComponent implements OnInit {

  data: Board;

  constructor(private boardService: BoardService,
              private router: Router,
              public dialog: MatDialog) {
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
      this.dialog.open(AlertComponent, {
        minHeight: '80px',
        minWidth: '300px',
        data: {message: 'Create success', success: 'check_circle_outline'}
      });
      setTimeout(() => {
        this.dialog.closeAll();
        this.router.navigate([`/board/${board.id}`]);
      }, 1500);
    });
  }
}
