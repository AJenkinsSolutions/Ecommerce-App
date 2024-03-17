import { createAction, props } from "@ngrx/store";
import { IProduct } from "../../models/product.interface";


export const loadProduct = createAction(
    '[Product Component] LoadProduct');


    // effects Actions
export const loadProductSuccess = createAction(
    '[Product Component] LoadProductSuccess',
     props<{products: IProduct[]}>())
     
// effects Actions
export const loadProductFailure = createAction(
    '[Product Component] LoadProductFailure'
    , props<{errorMessage: string}>());
