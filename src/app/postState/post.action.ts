import { createAction, props } from "@ngrx/store";
import { post } from "../modal/posts.modal";

export const addPostAction = '[post page] add post';
export const deletePostAction = '[post page] delete post';

export const addPost = createAction(addPostAction, props<{ post: post }>());
export const deletePost = createAction(deletePostAction, props<{ id: number }>());


export const updatePostAction = '[post page] update post';
export const updatePost = createAction(updatePostAction, props<{ post: post }>());

