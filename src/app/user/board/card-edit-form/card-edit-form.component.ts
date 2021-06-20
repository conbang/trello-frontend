import {Component, EventEmitter, Inject, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';
import {Card} from '../../../interface/card';
import {CardService} from '../../../service/card/card.service';
import {MAT_DIALOG_DATA} from '@angular/material';
import {BoardService} from '../../../service/board/board.service';

@Component({
  selector: 'app-card-edit-form',
  templateUrl: './card-edit-form.component.html',
  styleUrls: ['./card-edit-form.component.css']
})
export class CardEditFormComponent implements OnInit {

  display: false;
  card: Card;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { card: Card },
    public formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<CardEditFormComponent>,
    private cardService: CardService,
    private boardService: BoardService
  ) {
    this.card = {
      id: this.data.card.id,
      title: this.data.card.content,
      position: this.data.card.position,
      comments: [],
    };
  }

  ngOnInit() {
  }

  onSubmit() {
    this.dialogRef.close();
  }

  // addLabel(event: MatChipInputEvent) {
  //   const tagsControl = this.formGroup.get('tags');
  //   if (tagsControl.value) {
  //     tagsControl.value.push({name: event.value, color: '#e0e0e0'});
  //   } else {
  //     tagsControl.setValue([event.value]);
  //   }
  //   event.input.value = '';
  // }

}
