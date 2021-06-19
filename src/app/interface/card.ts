import {Label} from './Label';
import {Comment} from './comment';

export interface Card {
  id?: number;
  title?: string;
  content?: string;
  position?: number;
  label?: Label[];
  comments?: Comment[];
}
