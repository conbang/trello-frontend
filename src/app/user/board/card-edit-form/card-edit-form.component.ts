import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';
import {Card} from '../../../interface/card';
import {MAT_DIALOG_DATA} from '@angular/material';
import {CommentResponse} from '../../../interface/comment-response';
import {CommentService} from '../../../service/comment/comment.service';
import {AuthenServiceService} from '../../../service/authentication/authen-service.service';
import {CardCreateForm} from '../../../interface/card-create-form';
import {List} from '../../../interface/list';

@Component({
  selector: 'app-card-edit-form',
  templateUrl: './card-edit-form.component.html',
  styleUrls: ['./card-edit-form.component.css']
})
export class CardEditFormComponent implements OnInit {

  comment: CommentResponse;
  display: false;
  card: CardCreateForm;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { card: Card, list: List },
    public formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<CardEditFormComponent>,
    private commentService: CommentService,
    private authService: AuthenServiceService,
  ) {
    this.card = {
      title: this.data.card.title,
      content: this.data.card.content,
      listTrelloId: data.list.id,
    };
    this.comment = {
      content: '',
      cardId: this.data.card.id
    };
  }

  editCard() {

  }

  saveComment() {
    const user = this.authService.currentUserValue;
    this.commentService.create(this.comment).subscribe((response) => {
      response.avatar = user.avatar;
      response.username = user.username;
      response.created_date = Date.now().toString();
      this.data.card.comments.push(response);
    }, error => {
      console.log(error);
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.dialogRef.close();
  }

}
