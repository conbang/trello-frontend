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

  cardFormGroup: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { list: List },
    private dialogRef: MatDialogRef<CardCreateFormComponent>,
    public formBuilder: FormBuilder,
    private cardService: CardService
  ) {
  }

  ngOnInit() {
    const card: CardCreateForm = {
      title: '',
      content: '',
      listTrello: this.data.list,
    };
    this.cardFormGroup = this.formBuilder.group({
      title: [card.title, Validators.required],
      content: [card.content],
    });
  }

  onSubmit(list: List) {
    this.cardService.create(this.cardFormGroup.value).subscribe(card => {
      list.cards.push(card);
    });
    this.dialogRef.close(this.cardFormGroup.value);
  }
}
