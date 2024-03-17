import { createSelector } from "@ngrx/store";

import { State } from "@ngrx/store";

import { AppState } from "../state/app.state";
import { CartState } from "../reducers/cart.reducer";

//init cart state  
export const selectCartState = (state: AppState) => state.cart;

// Now we 'select' the property we want from the state 
export const seletctCartProducts = createSelector(
    selectCartState, (state: CartState) => state.products
)

export const selectTotalPrice = createSelector(
    selectCartState, (state: CartState) => state.totalPrice
)