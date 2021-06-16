import { Injectable } from '@angular/core';
import {Board, List} from '../../interface/schema.model';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  // tslint:disable-next-line:variable-name
  private _boards: Board[] = require('data.json');

  private initBoard = [
    {
      title: 'Day one',
      list: [
        {
          id: 'track-one',
          title: 'List one',
          cards: [
            {
              label: 'low',
              text: 'Keynote addess',
              image: 'https://i.ytimg.com/vi/7Bj4R7lGl4A/maxresdefault.jpg'
            }
          ]
        }
      ]
    }
  ];

  private board: List[] = this.initBoard;
  private board$ = new BehaviorSubject<List[]>(this.initBoard);

  getBoards(): Board[] {
    return this._boards;
  }

  addColumn (title: string) {
    const newList: List = {
      id: 1,
      title: title,
      cards: [],
    };

    this.board = [...this.board, newList];
    this.board$.next([...this.board]);
  }
}
