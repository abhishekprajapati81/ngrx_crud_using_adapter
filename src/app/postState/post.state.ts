import { post } from "../modal/posts.modal"

export interface postsState {
    posts: post[]
}


export const initialStatePost: postsState = {
    posts: [
        { id: 1, title: 'Web Developer', desc: 'Sample description 1' },
        { id: 2, title: 'Software Engineer', desc: 'Sample description 2' },
        { id: 3, title: 'Data Scientist', desc: 'Sample description 3' },
        { id: 4, title: 'Graphic Designer', desc: 'Sample description 4' },
        { id: 5, title: 'Digital Marketer', desc: 'Sample description 5' },
        { id: 6, title: 'UI/UX Designer', desc: 'Sample description 6' },
        { id: 7, title: 'Project Manager', desc: 'Sample description 7' },
        { id: 8, title: 'Network Administrator', desc: 'Sample description 8' },
        { id: 9, title: 'Mobile App Developer', desc: 'Sample description 9' },
        { id: 10, title: 'Content Creator', desc: 'Sample description 10' },
    ]
}