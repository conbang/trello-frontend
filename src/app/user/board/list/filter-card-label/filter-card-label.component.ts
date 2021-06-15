import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {ILabel} from '../../../../interface/ILabel';
import {Card} from '../../../../interface/card';
import {Board} from '../../../../interface/board';
import {CardService} from '../../../../service/cardService/card.service';
import {LabelService} from '../../../../service/labelService/label.service';


@Component({
  selector: 'app-filter-card-label',
  templateUrl: './filter-card-label.component.html',
  styleUrls: ['./filter-card-label.component.scss']
})
export class FilterCardLabelComponent implements OnInit {
  listLabel: ILabel[] = [];
  listCard: Card[] = [];
  label_id: number = 0;
  // @ts-ignore
  modalRef: BsModalRef;
  @Input()
  board_id: number = 0;
  board: Board = {};
  constructor(private modalService: BsModalService,
              private labelService: LabelService,
              private  cardService: CardService) { }

  ngOnInit(): void {
    this.getAllLabel();
  }
  getAllLabel() {
    this.labelService.getAllLabel().subscribe(data => {
      this.listLabel = data;
    })
  }
  getAllCardByLabel(label_id: any) {
    this.cardService.getCardByLabel(this.board_id, label_id).subscribe( data =>{
      this.listCard = data;
      console.log(this.listCard);
      console.log('a');
    });
  }
  openModalWithClass(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, {class: 'center modal-lg'})
    );
  }
}
