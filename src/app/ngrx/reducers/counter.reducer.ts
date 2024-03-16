import { createReducer, on } from "@ngrx/store";
import * as CounterActions from "../actions/counter.action"


export interface ICounterState {
    count: number;
}


export const initalCounterState: ICounterState = {
    count: 0
}


export const counterReducer = createReducer(
    initalCounterState,
 
    on(CounterActions.increment, state => ({...state, count: state.count + 1 })),
    
    on(CounterActions.decrement, state => ({...state, count: state.count - 1 })),
    
    on(CounterActions.reset, state => ({...state, count: 0 }))
    
);

