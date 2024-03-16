import { createReducer, on } from "@ngrx/store";
import * as CounterActions from "../actions/counter.action"
import { count } from "console";


export interface ICounterState {
    count: number;
    double: number;
}


export const initalCounterState: ICounterState = {
    count: 0,
    double: 0
}

export function calculateDouble(count: number ){

    return (count * 2)

}


export const counterReducer = createReducer(
    initalCounterState,
 
    on(CounterActions.increment, (state) => {


        const updatedCount = state.count + 1 

        return {
            ...state,
            
            double: calculateDouble(updatedCount),
            count: updatedCount,
        }
    }
    
    
    ),
        
    
    on(CounterActions.decrement,
         state => ({...state, count: state.count - 1 })
         ),
    
    on(CounterActions.reset,
         state => ({...state, count: 0 })
         )
    
);

