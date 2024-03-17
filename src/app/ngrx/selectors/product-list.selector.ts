import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductListState } from "../reducers/product-list.reducer";

export const selectProductListFeature = createFeatureSelector<ProductListState>('productList');


export const selectAllProducts = createSelector(
    selectProductListFeature,
    (state: ProductListState) => state.products
)


export const selectAllProductsListError = createSelector(
    selectProductListFeature, 
    (state: ProductListState) => state.error
)