import {Card} from './card';
import {Label} from './label';

export interface CardLabel {
  id?: number;
  card?: Card;
  labels?: Label;
}
