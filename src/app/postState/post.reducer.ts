import { createReducer, on, Action } from '@ngrx/store';
import { initialStatePost, PostsState } from './post.state';
import { addPost, deletePost, readpost, updateAllPost } from './post.action';
import { Post } from '../modal/posts.modal';

const _postsReducer = createReducer<PostsState>(
  initialStatePost,
  on(addPost, (state, action) => {
    // const nextId =
    //   state.posts.length > 0
    //     ? Math.max(...state.posts.map((post) => post.id)) + 1
    //     : 1;
    let post = { ...action.post };
    return {
      ...state,
      posts: [...state.posts, post],
    };
  }),

  on(deletePost, (state, action) => {
    const deletePosts = state.posts.filter((post) => post.id !== action.id);
    return {
      ...state,
      posts: deletePosts,
    };
  }),
  on(readpost, (state, action) => {
    const getCurrentValue = state.posts.filter((post) => post === action.post);
    console.log('getcurrentid', getCurrentValue);
    return {
      ...state,
      editableValue: getCurrentValue[0],
    };
  }),
  on(updateAllPost, (state, action) => {
    const removeOldpost = state.posts.map((post) => {
      if (post.id === action.id) {
        post = action.post;
        
      }
      return post;
    });
    console.log(removeOldpost ,'olddata####');
    return {
      ...state,
      posts: removeOldpost,
    };
  })
);

export function postReducer(state: PostsState | undefined, action: Action) {
  return _postsReducer(state, action);
}
