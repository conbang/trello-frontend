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
import {CardService} from '../../../service/card/card.service';
import {error} from 'util';

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
              private cardService: CardService,
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

  cardDrop(event: CdkDragDrop<Card[]>) {
    if (event.previousContainer === event.container) {
      const previous = event.container.data[event.previousIndex];
      previous.position = event.previousIndex;
      const current = event.container.data[event.currentIndex];
      current.position = event.currentIndex;
      const cards = [];
      cards.push(previous);
      cards.push(current);
      this.cardService.changePosition(cards).subscribe(() => {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      }, error => {
        console.log(error);
      });
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  columnDrop(event: CdkDragDrop<Card[]>) {
    const listChange = [];
    moveItemInArray(this.lists, event.previousIndex, event.currentIndex);
    const previous = this.lists[event.previousIndex];
    const current = this.lists[event.currentIndex];
    previous.position = event.previousIndex;
    current.position = event.currentIndex;
    listChange.push(previous);
    listChange.push(current);
    this.listService.changePosition(listChange).subscribe(() => {
      console.log('ok');
    }, error => {
      console.log(error);
    });
  }

  createCard(list: List) {
    this.dialog.open(CardCreateFormComponent, {
      data: {list: list}
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
      lists.sort((a, b) => {
        return a.position - b.position;
      });
      lists.map((list) => {
        list.cardDtoList.sort((card1, card2) => {
          return card1.position - card2.position;
        });
      });
      this.lists = lists;
    });
  }

  edit(card, list) {
    this.dialog.open(CardEditFormComponent, {
      width: '50%',
      data: {card: card, list: list}
    }).afterClosed()
      .subscribe(response => {
        Object.assign(card, response);
      });
  }
}
