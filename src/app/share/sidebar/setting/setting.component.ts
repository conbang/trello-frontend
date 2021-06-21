import { Component, OnInit } from '@angular/core';
// import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import {SettingDialogComponent} from '../setting-dialog/setting-dialog.component';
import {MatBottomSheet} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent {
  constructor(private _bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this._bottomSheet.open(SettingDialogComponent);
  }
}

