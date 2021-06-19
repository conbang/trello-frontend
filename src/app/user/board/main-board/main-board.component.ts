import {Component, OnInit} from '@angular/core';

import {MatDialog} from '@angular/material/dialog';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {BoardService} from '../../../service/board/board.service';
import {List} from '../../../interface/list';
import {Card} from '../../../interface/card';
import {CardCreateFormComponent} from '../card-create-form/card-create-form.component';
import {Token} from '../../../interface/token';
import {Board} from '../../../interface/board';

@Component({
  selector: 'app-main-board',
  templateUrl: './main-board.component.html',
  styleUrls: ['./main-board.component.css']
})
export class MainBoardComponent implements OnInit {
  board: Board;
  lists: List[];
  user: Token;
  list: List;

  constructor(private boardService: BoardService,
              private dialog: MatDialog) {
    this.lists = this.boardService.getLists();
    console.table(this.lists[0]);
    console.table(this.lists[1]);
    this.board = this.lists[0].board;
    console.table(this.board);
    this.list = {
      id: 0,
      title: '',
      board: {
        id: this.board.id,
        name: this.board.name,
        type: this.board.type,
        groupTrello: this.board.groupTrello,
      },
      cards: []
    };
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

  createCard(list: List) {
    this.dialog.open(CardCreateFormComponent, {
      data: {list: {list}}
    });
  }

  createList() {
    console.table(this.list);
    this.lists.push(this.list);
  }

  // editCard(card: Card, list: List) {
  //   this.dialog.open(EditCardComponent, {data: {card, edit}, width: '500px'})
  //     .afterClosed()
  //     .subscribe(newTalkData => edit ? Object.assign(card, newTalkData) : list.cards.unshift(newTalkData));
  // }

}
