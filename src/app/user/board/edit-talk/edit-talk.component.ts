import { Component, OnInit, Inject } from '@angular/core';
// import { MAT_DIALOG_DATA, MatDialogRef, MatChipInputEvent } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef, MatDialog} from '@angular/material/dialog';
import { MatChipInputEvent } from '@angular/material/chips';
import {appConstants} from '../../../interface/appConstants';
import {Talk} from '../../../interface/schema.model';
import {ColorPickerDialogComponent} from '../color-picker-dialog/color-picker-dialog.component';

@Component({
  selector: 'app-edit-talk',
  templateUrl: './edit-talk.component.html',
  styleUrls: ['./edit-talk.component.scss']
})
export class EditTalkComponent implements OnInit {

  formGroup: FormGroup;
  issueTypesArrayWithColor = Object.values(appConstants.issueTypeListWithColor);
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {talk: Talk, edit: boolean},
    private dialogRef: MatDialogRef<EditTalkComponent>,
    public formBuilder: FormBuilder,
    public colorPickerdialog: MatDialog
  ) {
  }

  ngOnInit() {
    const talk = this.data && this.data.talk ? this.data.talk : null;
    this.formGroup = this.formBuilder.group({
      text: [talk && talk.title ? talk.title : '', Validators.required],
      // speaker: [talk && talk.speaker ? talk.speaker : '', Validators.required],
      image: [talk && talk.image ? talk.image : ''],
      tags: [talk && talk.tags ? talk.tags : []],
      issueType: [talk && talk.issueType ? talk.issueType : ''],
      // createdAt: [talk && talk.createdAt ? talk.createdAt : new Date()]
    });
  }

  onSubmit() {
    this.dialogRef.close(this.formGroup.value);
  }

  addTag(event: MatChipInputEvent) {
    const tagsControl = this.formGroup.get('tags');
    if (tagsControl.value) {
      tagsControl.value.push({name: event.value, color: '#e0e0e0'});
    } else {
      tagsControl.setValue([event.value]);
    }
    event.input.value = '';
  }

  openColorPickerDialog(tag): void {
    const dialogRef = this.colorPickerdialog.open(ColorPickerDialogComponent, {
      // width: '250px',
      data: {},
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        tag.color = result;
      }
    });
  }



}

