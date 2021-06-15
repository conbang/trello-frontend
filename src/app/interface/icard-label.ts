import {Card} from './card';
import {ILabel} from './ILabel';


export interface ICardLabel {
  id?: number;
  card? : Card;
  labels?: ILabel;
}
