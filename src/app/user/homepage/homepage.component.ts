import {Component, Input, OnInit} from '@angular/core';
import {GroupForm} from '../../interface/groupForm';
import {BoardService} from '../../service/board/board.service';
import {Router} from '@angular/router';
import {Board} from '../../interface/board';
import {MatDialog} from '@angular/material/dialog';
import {BoardFormComponent} from '../../share/navbar/board-form/board-form.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  @Input() group: GroupForm;
  boards: Board[] = [];
  boards1: Board[] = [];
  ngOnInit() {
    this.findBoardPrivate();
    console.log(this.boards1);
  }

  constructor(private boardService: BoardService,
              public dialog: MatDialog) {
  }

  findBoardPrivate(){
    this.boardService.getBoardPrivate().subscribe(boards =>{
       this.boards = boards.reverse();

    })
  }
  openDialog(): void{
    this.dialog.open(BoardFormComponent, {
      minWidth: '450px',
      minHeight: '320px',
    });
}


}
