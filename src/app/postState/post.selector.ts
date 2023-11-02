import { createFeatureSelector, createSelector } from "@ngrx/store";
import { postsState } from "./post.state";

export const  getPostsState = createFeatureSelector<postsState>('posts')

export const getPosts = createSelector(getPostsState,(state)=>{
    return state.posts
})