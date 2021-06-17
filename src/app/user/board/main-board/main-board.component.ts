import { Component, OnInit } from '@angular/core';

import {MatDialog} from '@angular/material/dialog';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {EditTalkComponent} from '../edit-talk/edit-talk.component';
import {DeleteTalkComponent} from '../delete-talk/delete-talk.component';
import {Board, Talk, Track} from '../../../interface/schema.model';
import {BoardService} from '../../../service/board/board.service';

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
  /**
   * An array of all track ids. Each id is associated with a `cdkDropList` for the
   * track talks. This property can be used to connect all drop lists together.
   */
  trackIds(boardIndex): string[] {
    return this.boards[boardIndex].tracks.map(track => track.id);
  }

  onTalkDrop(event: CdkDragDrop<Talk[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  onTrackDrop(event: CdkDragDrop<Track[]>) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  }

  addEditTalk(talk: Talk, track: Track, edit = false) {
    this._dialog.open(EditTalkComponent, {data: {talk, edit}, width: '500px'})
      .afterClosed()
      .subscribe(newTalkData => edit ? Object.assign(talk, newTalkData) : track.talks.unshift(newTalkData));
  }

  deleteTalk(talk: Talk, track: Track) {
    // Open a dialog
    this._dialog.open(DeleteTalkComponent, {data: talk, width: '500px'})
      .afterClosed()
      .subscribe(response => {
        // Wait for it to close and delete the talk if the user agreed.
        if (response) {
          track.talks.splice(track.talks.indexOf(talk), 1);
        }
      });
  }

  filterByDate(talks, asc = 1) {
    talks = [...talks.sort((a: any, b: any) => (asc) * (new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()))];
    console.log(talks);
  }
}
