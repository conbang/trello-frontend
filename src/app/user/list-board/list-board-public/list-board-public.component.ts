import { Component, OnInit } from '@angular/core';
import {IBoard} from '../../board/interface/i-board';
import {BoardService} from '../../../service/board/board.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-board-public',
  templateUrl: './list-board-public.component.html',
  styleUrls: ['./list-board-public.component.css']
})
export class ListBoardPublicComponent implements OnInit {
  boards: IBoard[] = [
  ];

  images = ['https://i.pinimg.com/originals/d0/d5/bd/d0d5bdb27664dbde7513d37d2b9f2f79.jpg',
    'https://thietbiketnoi.com/wp-content/uploads/2020/01/tong-hop-hinh-nen-background-vector-designer-dep-do-phan-giai-fhd-2k-4k-moi-nhat-2-1024x683.jpg',
    'https://lh3.googleusercontent.com/proxy/DPR1_6hqLC0T4FhfWaN1e53MiFTwpK-ypq4KXoKaHdkH3tIhcZauIqGP6fvJmWVykoXOqVXOSoLMeEaj04HwR6Yok72F1k3YJB3hVG1a78AoTWSF_JX8',
  'https://thietbiketnoi.com/wp-content/uploads/2020/01/tong-hop-hinh-nen-background-vector-designer-dep-do-phan-giai-fhd-2k-4k-moi-nhat-11-scaled.jpg',
  'https://scr.vn/wp-content/uploads/2020/08/T%E1%BB%95ng-h%E1%BB%A3p-h%C3%ACnh-n%E1%BB%81n-vector-%C4%91%E1%BB%99-ph%C3%A2n-gi%E1%BA%A3i-cao.jpg',
  'https://photographer.com.vn/wp-content/uploads/2020/11/1606527997_Tong-hop-hinh-anh-background-nuoc-dep-nhat.jpg',
  'https://pdp.edu.vn/wp-content/uploads/2021/02/hinh-anh-background-anh-sang-3d-da-chieu.jpg',
  'https://itvn.blog/wp-content/uploads/2020/07/Top-49-%E1%BA%A3nh-background-%C4%91%E1%BA%B9p-cho-m%C3%A1y-t%C3%ADnh-pc-v%C3%A0-laptop.jpg'
  ];

  constructor(private boardService: BoardService,
              private router: Router) { }

  findBoardPublic() {
    this.boardService.getBoardPublic().subscribe(boards => {
      this.boards = boards;
      let j = 0;
      for (let i = 0; i < boards.length; i++) {
        this.boards[i].image = this.images[j];
        j++;
        if (j === 8) {
          j = 0;
        }
      }
    });
  }
  ngOnInit() {
    this.findBoardPublic();
  }
}
