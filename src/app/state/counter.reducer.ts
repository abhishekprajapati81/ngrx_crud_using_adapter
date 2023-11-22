import { createReducer, on ,Action} from "@ngrx/store"
import { CounterType, initialState } from "./counter.state"
import { customeIncremenet, decrement, increment, reset } from "./counter.action"


const _counterReducer = createReducer<CounterType>(initialState,
    on(increment, (state) => {
        return {
            ...state,
            counter: state.counter + 1
        }
    }), on(decrement, (state) => {

        return {
            ...state,
            counter: state.counter - 1
        }
    }), on(reset, (state) => {

        return {
            ...state,
            counter: 0
        }
    }), on(customeIncremenet, (state, action) => {
        console.log('action', action);

        return {
            ...state,
            counter: state.counter + action.count
        }
    })
)

export function counterReducer(state: any, action: any) {
    console.log(state);
    
    return _counterReducer(state, action)

}