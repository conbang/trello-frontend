import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {MatChipInputEvent} from '@angular/material/chips';
import {Card} from '../../../interface/card';
import {CardService} from '../../../service/card/card.service';

@Component({
  selector: 'app-card-edit-form',
  templateUrl: './card-edit-form.component.html',
  styleUrls: ['./card-edit-form.component.css']
})
export class CardEditFormComponent implements OnInit {

  formGroup: FormGroup;
  formComment: FormGroup;
  comment: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {card: Card},
    public formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<CardEditFormComponent>,
    private cardService: CardService
  ) {}

  ngOnInit() {
    const card: Card = this.data.card;
    this.formGroup = this.formBuilder.group({
      title: [card.title, Validators.required],
      content: [card.content],
      label: [card.label],
    });
    this.formComment = this.formBuilder.group({
      content: [this.comment],
      appUser: null,
      card: this.data.card,
    });
  }

  onSubmit() {
    this.dialogRef.close();
  }

  addLabel(event: MatChipInputEvent) {
    const tagsControl = this.formGroup.get('tags');
    if (tagsControl.value) {
      tagsControl.value.push({name: event.value, color: '#e0e0e0'});
    } else {
      tagsControl.setValue([event.value]);
    }
    event.input.value = '';
  }

}
