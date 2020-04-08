import {PostModels} from './postModels';

export interface UserModels {
  id: number;
  name: string;
  username: string;
  email: string;
  posts: PostModels[];
}
