import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {BoardService} from '../../../service/boardService/board.service';

@Component({
  selector: 'app-board',
  templateUrl: './list-single.component.html',
  styleUrls: ['./list-single.component.scss'],
})
export class ListSingleComponent implements OnInit {

  constructor(
    public boardService: BoardService
  ) { }

  ngOnInit(): void {
    console.log('BOARD - INIT');
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}
