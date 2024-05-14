import { createReducer, on } from "@ngrx/store";
import * as CounterActions from "../actions/counter.action"



export interface CounterState {
    count: number;
    double: number;
}


export const initalCounterState: CounterState = {
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
            count: updatedCount,
            double: calculateDouble(updatedCount)
        }
    }
    
    
    ),
        
    
    on(CounterActions.decrement,(state) => {


        const updatedCount = state.count - 1 

        return {
            ...state,
            count: updatedCount,
            double: calculateDouble(updatedCount)
        }
    }
    ),
    
    on(CounterActions.reset,(state) => {


        const updatedCount = 0 

        return {
            ...state,
            count: updatedCount,
            double: 0
        }
    })
    
);

