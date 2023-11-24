import { createReducer, on, Action } from '@ngrx/store';
import { initialStatePost, postAdapter, PostsState } from './post.state';
import { addPost, deletePost, editPost, updatePost } from './post.action';
import { Post } from '../modal/posts.modal';
import { state } from '@angular/animations';

const _postsReducer = createReducer<PostsState>(
  initialStatePost,
  on(addPost, (state, action) => {
    // const nextId =
    //   state.posts.length > 0
    //     ? Math.max(...state.posts.map((post) => post.id ?? 0)) + 1: 1;
    // const post = {
    //   ...action.post,
    //   id: nextId, // Assign the calculated nextId to the 'id' property
    // };
    // return {
    //   ...state,
    //   posts: [...state.posts, post],
    // };

    const ids = state.ids as number[];
    const maxId = ids.length > 0 ? Math.max(...ids) : 0;

    const postWithId = {
      ...action.post,
      id: maxId + 1,
    };
    return postAdapter.addOne(postWithId, state);
  }),
  on(deletePost, (state, action) => {
    return postAdapter.removeOne(action.id, { ...state });
  }),

  on(editPost, (state, action) => {
    return {
      ...state,
      editableValue: action.post,
    };
  }),
  on(updatePost, (state, { id, post }) => {
    console.log(post, 'update post');

    return postAdapter.updateOne({ id, changes: post }, state);
  })
);

export function postReducer(state: PostsState | undefined, action: Action) {
  return _postsReducer(state, action);
}
