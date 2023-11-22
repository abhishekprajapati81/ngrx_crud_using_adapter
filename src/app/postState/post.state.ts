import { Post } from '../modal/posts.modal';

export interface PostsState {
  posts: Post[];
  editableValue: Post | undefined;
}

export const initialStatePost: PostsState = {
  posts: [
    { id: 1, title: 'Web Developer', desc: 'Sample description 1' },
    { id: 2, title: 'Software Engineer', desc: 'Sample description 2' },
    { id: 3, title: 'Data Scientist', desc: 'Sample description 3' },
  ],
  editableValue : undefined
};
