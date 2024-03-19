import { createAction, props } from "@ngrx/store";
import { IProduct } from "../../models/product.interface";

export const loadProduct = createAction(
    '[Product Details Component] LoadProduct');

// effects Actions
export const loadProductListSuccess = createAction(
    '[Product Details Component] LoadProductSuccess',
     props<{products: IProduct}>())
     
// effects Actions
export const loadProductListFailure = createAction(
    '[Product Details Component] LoadProductFailure'
    , props<{errorMessage: string}>());