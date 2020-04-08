import {CommentModels} from './commentModels';

export interface PostModels {
  userId: number;
  id: number;
  title: string;
  body: string;
  comments: CommentModels[];
}
