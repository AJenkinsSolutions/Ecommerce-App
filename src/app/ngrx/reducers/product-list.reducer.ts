import { createReducer, on } from '@ngrx/store';
import { IProduct } from '../../models/product.interface';
import * as ProductListActions from '../actions/product-list.actions';



export interface ProductListState {
    products: IProduct[];
    error: string | null
}


export const initialProductListState: ProductListState = {
    products: [],
    error: null
}


export const productListReducer = createReducer(
    initialProductListState,
    on(ProductListActions.loadProductListSuccess, (state, {products}) => ({
        ...state,
        products,
        error: null
    })),
    on(ProductListActions.loadProductListFailure, (state, {errorMessage}) => ({
        ...state,
        error: errorMessage
    }))
)