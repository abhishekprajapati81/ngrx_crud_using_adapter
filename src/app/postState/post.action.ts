import { createAction, on, props } from '@ngrx/store';
import { Post } from '../modal/posts.modal';

export const addPostAction = '[post page] add post';
export const deletePostAction = '[post page] delete post';
export const updatePostAction = '[post page] update post';


export const addPost = createAction(addPostAction, props<{ post: Post }>());
export const deletePost = createAction(
  deletePostAction,
  props<{ id: number | undefined}>()
);
export const readpost = createAction(
  updatePostAction,
  props<{ post: Post }>()
);

 export const updateAllPost = createAction('update new data', props<{post:Post ,id:number | undefined}>())