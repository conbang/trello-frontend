import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {BoardService} from '../../../service/board/board.service';
import {List} from '../../../interface/list';
import {Card} from '../../../interface/card';
import {CardCreateFormComponent} from '../card-create-form/card-create-form.component';

@Component({
  selector: 'app-main-board',
  templateUrl: './main-board.component.html',
  styleUrls: ['./main-board.component.css']
})
export class MainBoardComponent implements OnInit {
  lists: List[];

  constructor(private boardService: BoardService,
              private dialog: MatDialog) {
    this.lists = this.boardService.getBoards();
  }

  ngOnInit() {
  }

  trackIds(columnIndex): number[] {
    return this.lists[columnIndex].cards.map(track => track.id);
  }

  onTalkDrop(event: CdkDragDrop<Card[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  columnDrop(event: CdkDragDrop<Card[]>) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  }

  create(list: List) {
    this.dialog.open(CardCreateFormComponent);
  }

}
