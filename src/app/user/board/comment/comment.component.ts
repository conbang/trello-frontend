import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../interface/user';
import {Card} from '../../../interface/card';
import {CommentService} from '../../../service/comment/comment.service';
import {CardService} from '../../../service/card/card.service';
import {Comment} from '../../../interface/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input()
  card_id = 0;
  content = '';
  appUser: User = {};
  comment: Comment = {};
  listComment:Comment[] = [];
  card: Card ={};
  constructor(private commentService:CommentService,
              private cardService:CardService,
              ) { }

  ngOnInit(): void {
    this.cardService.findCardById(this.card_id).subscribe(data=>{
      this.comment.card = data;
      this.card = data;
    });
    this.getAllComment(this.card_id);
  }
  getAllComment(id: number){
    this.commentService.getAllComment(id).subscribe(result =>{
      this.listComment = result;
      console.log(this.listComment);
    });
  }
  createComment(){
    this.commentService.createComment(this.comment).subscribe(()=>{
      console.log('tạo mới thành công');
      this.getAllComment(this.card_id);
    });
    this.comment.content = '';
  }

}

