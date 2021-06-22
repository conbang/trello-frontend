import {Label} from './Label';
import {CommentResponse} from './comment-response';
import {UserResponse} from './user-response';

export interface Card {
  id?: number;
  cardId?: number;
  title?: string;
  content?: string;
  position?: number;
  label?: Label[];
  comments?: CommentResponse[];
  users?: UserResponse[];
  listTrelloId?: number;
}
