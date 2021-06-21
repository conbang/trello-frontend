import {Component, OnInit} from '@angular/core';

import {MatDialog} from '@angular/material/dialog';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {BoardService} from '../../../service/board/board.service';
import {List} from '../../../interface/list';
import {Card} from '../../../interface/card';
import {CardCreateFormComponent} from '../card-create-form/card-create-form.component';
import {Board} from '../../../interface/board';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {ListService} from '../../../service/list/list.service';
import {CardEditFormComponent} from '../card-edit-form/card-edit-form.component';

@Component({
  selector: 'app-main-board',
  templateUrl: './main-board.component.html',
  styleUrls: ['./main-board.component.css']
})
export class MainBoardComponent implements OnInit {
  board: Board;
  lists: List[];
  list: List = {
    id: 0,
    title: '',
    board: null,
  };

  constructor(private boardService: BoardService,
              private dialog: MatDialog, private route: ActivatedRoute,
              private listService: ListService,
  ) {
    this.route.paramMap
      .subscribe(async (params: ParamMap) => {
          // tslint:disable-next-line:radix
          const id = parseInt(params.get('id'));
          this.getBoardById(id);
          this.getListByBoard(id);
        }
      );
  }

  ngOnInit() {
  }


  trackIds(columnIndex): number[] {
    return this.lists[columnIndex].cardDtoList.map(track => track.id);
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
      data: {list}
    });
  }

  createList() {
    this.list.board = this.board;
    this.listService.create(this.list).subscribe((list) => {
      this.lists.push(list);
    }, error => {
      console.log(error);
    });

  }

  getBoardById(id: number) {
    this.boardService.getBoardById(id).subscribe(board => {
      this.board = board;
    });
  }

  private getListByBoard(id: number) {
    return this.listService.getListByBoardId(id).subscribe((lists) => {
      this.lists = lists;
    });
  }

  edit(card, list) {
    this.dialog.open(CardEditFormComponent, {
      width: '50%',
      data: {card, list}
    }).afterClosed()
      .subscribe(response => {
        Object.assign(card, response);
      });
  }
}
