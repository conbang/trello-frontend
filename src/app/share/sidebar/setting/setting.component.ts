import { Component, OnInit } from '@angular/core';
interface Mode {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent {
  selectedValue: string;
  mode: Mode[] = [
    {value: 'Private', viewValue: 'Private'},
    {value: 'Public', viewValue: 'Public'},
  ];
  constructor() {}


}

