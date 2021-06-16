import { Component, OnInit } from '@angular/core';

import {MatDialog} from '@angular/material/dialog';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {EditTalkComponent} from '../edit-talk/edit-talk.component';
import {DeleteTalkComponent} from '../delete-talk/delete-talk.component';
import {Board, Card, List} from '../../../interface/schema.model';
import {BoardService} from '../../../service/boardService/board.service';

@Component({
  selector: 'app-main-board',
  templateUrl: './main-board.component.html',
  styleUrls: ['./main-board.component.css']
})
export class MainBoardComponent implements OnInit {boards: Board[] = [];
  constructor(private _boardService: BoardService,
              private _dialog: MatDialog) {
    this.boards = this._boardService.getBoards();
  }

  ngOnInit() {
  }
  trackIds(boardIndex): string[] {
    return this.boards[boardIndex].list.map(track => track.id);
  }
  onTrackDrop(event: CdkDragDrop<List[]>) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  }

  addEditTalk(talk: Card, track: List, edit = false) {
    this._dialog.open(EditTalkComponent, {data: {talk, edit}, width: '500px'})
      .afterClosed()
      .subscribe(newTalkData => edit ? Object.assign(talk, newTalkData) : track.cards.unshift(newTalkData));
  }
}
