import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostsState } from './post.state';
import { state } from '@angular/animations';
import { Post } from '../modal/posts.modal';

export const getPostsState = createFeatureSelector<PostsState>('posts');

export const getPosts = createSelector(getPostsState, (state) => {
  return state.posts;
});
export const selectEditPost = createSelector(getPostsState, (state) => {
  return state.editableValue;
});
