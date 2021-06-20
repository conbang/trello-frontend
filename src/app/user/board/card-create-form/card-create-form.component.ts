import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {List} from '../../../interface/list';
import {CardCreateForm} from '../../../interface/card-create-form';
import {CardService} from '../../../service/card/card.service';

@Component({
  selector: 'app-card-create-form',
  templateUrl: './card-create-form.component.html',
  styleUrls: ['./card-create-form.component.css']
})
export class CardCreateFormComponent implements OnInit {

  card: CardCreateForm = {
    title: '',
    content: '',
    listTrelloId: null,
  };

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { list: List },
    private dialogRef: MatDialogRef<CardCreateFormComponent>,
    public formBuilder: FormBuilder,
    private cardService: CardService
  ) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.card.listTrelloId = this.data.list.id;
    this.cardService.create(this.card).subscribe(card => {
      this.data.list.cardDtoList.push(card);
    });
    this.dialogRef.close();
  }
}
