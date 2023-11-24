import { createAction, on, props } from '@ngrx/store';
import { Post } from '../modal/posts.modal';

export const addPostAction = '[post page] add post';
export const deletePostAction = '[post page] delete post';
export const updatePostAction = '[post page] update post';

export const addPost = createAction(addPostAction, props<{ post: Post }>());
export const deletePost = createAction(
  deletePostAction,
  props<{ id: number }>()
);

export const updatePost = createAction(
  'update new data',
  props<{ id: number ; post: Post }>()
);
export const editPost = createAction('edit post', props<{ post: Post }>());
