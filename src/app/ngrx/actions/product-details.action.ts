import { createAction, props } from "@ngrx/store";
import { IProduct } from "../../models/product.interface";

export const loadProduct = createAction(
    '[Product Details Component] LoadProduct', props<{productId: string}>());

// effects Actions
export const loadProductSuccess = createAction(
    '[Product Details Component] LoadProductSuccess',
     props<{product: IProduct}>())
     
// effects Actions
export const loadProductFailure = createAction(
    '[Product Details Component] LoadProductFailure'
    , props<{errorMessage: string}>());

export const resetProduct = createAction(
    '[Product Details Component] ResetProduct'
)