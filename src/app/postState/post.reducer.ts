import { createReducer, on } from "@ngrx/store";
import { initialStatePost } from "./post.state";
import { addPost, deletePost } from "./post.action";

const _postsReducer = createReducer(initialStatePost,
  on(addPost, (state, action) => {
    const nextId = state.posts.length > 0 ? Math.max(...state.posts.map(post => post.id)) + 1 : 1;
    let post = { ...action.post, id: nextId };
    return {
      ...state,
      posts: [...state.posts, post],
    };
  }),

  on(deletePost, (state, action) => {
    const updatedPosts = state.posts.filter(post => post.id !== action.id);
    return {
      ...state,
      posts: updatedPosts,
    };
  })
);

export function postReducer(state: any, action: any) {
  return _postsReducer(state, action);
}
