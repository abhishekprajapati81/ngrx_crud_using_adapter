import { createFeatureSelector, createSelector } from "@ngrx/store";
import { postsState } from "./post.state";
import { state } from "@angular/animations";

export const getPostsState = createFeatureSelector<postsState>('posts')

export const getPosts = createSelector(getPostsState, (state) => {
    return state.posts
})

export const getPostById = createSelector (getPostsState,(state:any,props:any)=>{
    return state.posts.find((post:any)=> post.id === props)
})