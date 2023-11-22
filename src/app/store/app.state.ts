import { postReducer } from "../postState/post.reducer";
import { PostsState } from "../postState/post.state";
import { counterReducer } from "../state/counter.reducer";
import { CounterType } from "../state/counter.state";

export  interface AppState{
    posts:PostsState
    counter:CounterType
}

export const appReducer = ({
    posts:postReducer,
    counter:counterReducer
})