import { createAction, props } from "@ngrx/store";
import { IProduct } from "../../models/product.interface";


export const loadProductList = createAction(
    '[Product List Component] LoadProductList');

    // effects Actions
export const loadProductListSuccess = createAction(
    '[Product List Component] LoadProductListSuccess',
     props<{products: IProduct[]}>())
     
// effects Actions
export const loadProductListFailure = createAction(
    '[Product List Component] LoadProductListFailure'
    , props<{errorMessage: string}>());


    
