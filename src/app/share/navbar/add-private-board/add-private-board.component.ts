import { Component, OnInit } from '@angular/core';
import {Board} from '../../../interface/board';
import {Router} from '@angular/router';
import {AuthenServiceService} from 'src/app/service/authentication/authen-service.service';
import {BoardService} from '../../../service/boardService/board.service';
@Component({
  selector: 'app-add-private-board',
  templateUrl: './add-private-board.component.html',
  styleUrls: ['./add-private-board.component.css']
})
export class AddPrivateBoardComponent implements OnInit {
  board: Board = {
    id: 0,
    name: '',
    appUser: {
      id: 1,
      userName: '',
      email: '',
      password: '',
    }
  };
  constructor(private boardService: BoardService,
              private router: Router, private authenService: AuthenServiceService) {

  }

    create() {
    // @ts-ignore
    this.board.appUser.id = this.authenService.currentUserValue.id;
    this.boardService.createBoard(this.board).subscribe(() => {
      this.router.navigate(['/home']);
    });
  }
  ngOnInit() {
  }
}
