import { post } from "../modal/posts.modal"

export interface postsState {
    posts: post[]
}


 export const initialStatepost: postsState = {
    posts: [
        { id: 1, title: 'webDevloper', desc: 'sample desc' },
        { id: 4, title: 'webDevloper', desc: 'sample desc' },
        { id: 14, title: 'webDevloper', desc: 'sample desc' },
    ]
}