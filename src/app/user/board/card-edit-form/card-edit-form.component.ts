import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';
import {Card} from '../../../interface/card';
import {MAT_DIALOG_DATA} from '@angular/material';
import {CommentResponse} from '../../../interface/comment-response';
import {CommentService} from '../../../service/comment/comment.service';
import {AuthenServiceService} from '../../../service/authentication/authen-service.service';
import {List} from '../../../interface/list';
import {CardService} from '../../../service/card/card.service';
import {User} from '../../../interface/user';
import {UserService} from '../../../service/user/user.service';

@Component({
  selector: 'app-card-edit-form',
  templateUrl: './card-edit-form.component.html',
  styleUrls: ['./card-edit-form.component.css']
})
export class CardEditFormComponent implements OnInit {

  comment: CommentResponse;
  display: false;
  card: Card;
  cardTagUsers = new FormControl();
  user: User;
  boardUsers: User[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { card: Card, list: List, },
    public formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<CardEditFormComponent>,
    private commentService: CommentService,
    private authService: AuthenServiceService,
    private cardService: CardService,
    private userService: UserService
  ) {
    this.card = {
      cardId: this.data.card.id,
      content: this.data.card.content,
    };
    this.comment = {
      content: '',
      cardId: this.data.card.id,
    };
    this.boardUsers = this.userService.getTagUsers();
  }

  ngOnInit() {
  }

  editCard() {
    if (this.card.content.trim()) {
      this.cardService.edit(this.card).subscribe(() => {
        this.data.card.content = this.card.content;
        this.card.content = '';
      });
    }
  }

  saveComment() {
    const user = this.authService.currentUserValue;
    this.commentService.create(this.comment).subscribe(response => {
      response.avatar = user.avatar;
      response.username = user.username;
      response.created_date = Date.now().toString();
      this.data.card.comments.push(response);
    }, error => {
      console.log(error);
    });
  }

  onSubmit() {
    this.dialogRef.close();
  }

}
