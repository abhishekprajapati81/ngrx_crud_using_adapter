import { postReducer } from "../postState/post.reducer";
import { postsState } from "../postState/post.state";
import { counterReducer } from "../state/counter.reducer";
import { CounterType } from "../state/counter.state";

export  interface appState{
    posts:postsState
    counter:CounterType
}

export const appReducer = {
    posts:postReducer,
    counter:counterReducer
}