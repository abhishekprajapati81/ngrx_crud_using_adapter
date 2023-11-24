import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostsState, postAdapter } from './post.state';
import { state } from '@angular/animations';
import { Post } from '../modal/posts.modal';

export const getPostsState = createFeatureSelector<PostsState>('posts');

const { selectAll, selectEntities } = postAdapter.getSelectors();

export const getPosts = createSelector(getPostsState, selectAll);
export const selectEditPost = createSelector(
  getPostsState,
  (state) => state.editableValue
);

// export const getpostById =  createSelector({getPostsState},(state ,props)=>{
//     return state.props[props.id]
// })
