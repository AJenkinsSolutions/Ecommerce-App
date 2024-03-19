import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductDetailsState } from "../reducers/product-details-reducer";



export const selectProductDetailsFeature = createFeatureSelector<ProductDetailsState>('productDetails');

export const selectProductDetails = createSelector(
    selectProductDetailsFeature,
    (state: ProductDetailsState) => state.product
)


export const selectProductDetailsError = createSelector(
    selectProductDetailsFeature,
    (state: ProductDetailsState) => state.error
)


