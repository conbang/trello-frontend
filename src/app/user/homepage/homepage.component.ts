import {Component, Input, OnInit} from '@angular/core';
import {GroupForm} from '../../interface/groupForm';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  @Input() group: GroupForm;

  ngOnInit() {
  }

}
