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
import {UserService} from '../../../service/user/user.service';
import {User} from '../../../interface/user';
import {InviteFormComponent} from '../invite-form/invite-form.component';

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
  tagUsers: User[];

  constructor(private boardService: BoardService,
              private dialog: MatDialog, private route: ActivatedRoute,
              private listService: ListService,
              private cardService: CardService,
              private userService: UserService
  ) {
    this.route.paramMap
      .subscribe(async (params: ParamMap) => {
          // tslint:disable-next-line:radix
          const id = parseInt(params.get('id'));
          this.getBoardById(id);
          this.getListByBoard(id);
          this.getTagUsersByBoardId(id);
        }
      );
  }

  ngOnInit() {
  }

  showInviteForm(): void {
    this.dialog.open(InviteFormComponent, {
      data: {boardId: this.board.id}
    });
  }



  cardDrop(event: CdkDragDrop<Card[]>) {
    if (event.previousContainer === event.container) {
      const container = event.container.element.nativeElement;
      const containerIndex = container.getAttribute('id');
      const previous = event.container.data[event.previousIndex];
      previous.position = event.previousIndex;
      previous.listTrelloId = parseInt(containerIndex);
      previous.cardId = previous.id;
      const current = event.container.data[event.currentIndex];
      current.position = event.currentIndex;
      current.listTrelloId = parseInt(containerIndex);
      current.cardId = current.id;
      const cards = [];
      cards.push(previous);
      cards.push(current);
      this.cardService.changePosition(cards).subscribe(() => {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      }, error => {
        console.log(error);
      });
    } else {
      const container = event.container.element.nativeElement;
      const currentIndex = container.getAttribute('id');
      const previousContainer = event.previousContainer.element.nativeElement;
      const previousIndex = previousContainer.getAttribute('id');
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      const current = event.container.data;
      this.updateContainer(current, currentIndex);
      const previous = event.previousContainer.data;
      const sizePreviousContiner = previous.length;
      if (sizePreviousContiner !== 0) {
        this.updateContainer(previous, previousIndex);
      }
    }
  }

  updateContainer(container: Card[], index) {
    const sizeContainer = container.length;
    for (let i = 0; i < sizeContainer; i++) {
      container[i].position = i;
      container[i].cardId = container[i].id;
      container[i].listTrelloId = parseInt(index);
    }
    this.cardService.changePosition(container).subscribe(() => {
      console.log('ok');
    });
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

  listIds() {
    const map = this.lists.map(list => list.id.toString());
    return map;
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
      data: {card: card, list: list, tagUser: this.tagUsers}
    }).afterClosed()
      .subscribe(response => {
        Object.assign(card, response);
      });
  }

  getTagUsersByBoardId(id) {
    this.userService.getUserByBoardId(id).subscribe((tagUsers) => {
      this.tagUsers = tagUsers;
      this.userService.setTagUsers(this.tagUsers);
    });
  }
}
