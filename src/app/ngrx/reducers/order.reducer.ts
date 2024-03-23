import { createReducer, on } from "@ngrx/store";
import { IOrderSummary } from "../../models/order-summary-interface";
import * as OrderActions from '../actions/order.action'




export interface OrderSummaryState {
    orderSummary: IOrderSummary | null
    loading: boolean
    error: string | null
    
}


export const initialOrderSummaryState: OrderSummaryState = {

    orderSummary: null,
    loading: false,
    error: ''

}


export const orderSummaryReducer = createReducer(
    initialOrderSummaryState,
    on(OrderActions.createOrderSuccess, (state, {orderSummary}) => ({
        ...state,
        orderSummary,
        loading: false,
        error: null
    })),
    on(OrderActions.createOrderFailure, (state, {errorMessage}) => ({
        ...state,
        error: errorMessage
    }))



)