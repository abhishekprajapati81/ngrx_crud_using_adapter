import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Post } from '../modal/posts.modal';

export interface PostsState extends EntityState<Post> {
  editableValue: Post | undefined;
}

export const postAdapter = createEntityAdapter<Post>();

export const initialStatePost: PostsState = postAdapter.getInitialState({
  editableValue: undefined,
});
