import { createReducer } from "@ngrx/store"
import { initialStatepost } from "./post.state"

const _postsReducer = createReducer(initialStatepost)

export function postReducer(state: any, action: any) {
    return _postsReducer(state, action)
}