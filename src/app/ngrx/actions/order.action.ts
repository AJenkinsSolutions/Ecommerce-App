import { createAction, props } from "@ngrx/store";
import { IOrderSummary } from "../../models/order-summary-interface";

export const createOrder = createAction(
    '[Order Summary Component] CreateOrder', props<{orderSummary: IOrderSummary}>());


export const createOrderSuccess = createAction(
    '[Order Summary Component] CreateOrderSuccess', props<{orderSummary: IOrderSummary}>()
)

export const createOrderFailure = createAction(
    '[Order Summary Component] CreateOrderFailure', props<{orderSummary: IOrderSummary}>()
)