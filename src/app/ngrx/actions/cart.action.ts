
import { createAction, props } from "@ngrx/store";

import { IProduct } from "../../models/product.interface";


export const attemptToAddProductToCart = createAction('[Cart Component] AttemptToAddProductToCart', props<{product: IProduct}>());

export const addToCart = createAction('[Cart Component] AddToCart', props<{product: IProduct}>());



//Well use the id instead of the whole object for increment & decrement
export const incrementProductCount = createAction('[Cart Component] IncrementProductCount', props<{productId: number}>());

export const decrementProductCount = createAction('[Cart Component] DecrementProductCount', props<{productId: number}>());

export const removeItem = createAction('[Cart Component] RemoveItem', props<{productId: number}>())