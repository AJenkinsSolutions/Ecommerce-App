import { createReducer, on } from "@ngrx/store"
import * as ProductDetailsActions from "../actions/product-details.action"
import { IProduct } from "../../models/product.interface"



export interface ProductDetailsState{
    product: IProduct | null;
    loading: boolean
    error: string | null;

}

export const initialProductDetailsState = {
    // Cast to IProduct to satisfy TypeScript, assuming IProduct can be empty
    product: {} as IProduct,
    loading: false,
    error: ''

    //! Note: With this approach, ensure your IProduct interface and component logic can handle an empty IProduct object correctly.

}


export const productDetailsReducer = createReducer(
    initialProductDetailsState,
    on(ProductDetailsActions.loadProductSuccess, (state, {product}) => ({
        ...state,
        product,
        loading: false,
        error: ''
        
    })),
    on(ProductDetailsActions.loadProductFailure, (state, {errorMessage}) => ({
        ...state,
        error: errorMessage
    }))



)
