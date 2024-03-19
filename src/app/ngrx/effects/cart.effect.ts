import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as CartActions from '../actions/cart.action';
import { switchMap, withLatestFrom, of } from 'rxjs';
import { select, Store } from "@ngrx/store";
import { AppState } from "../state/app.state.js";
import { seletctCartProducts } from "../selectors/cart.selector.js";
import { create } from "node:domain";

@Injectable()
export class CartEffect {


    actions$ = inject(Actions)

    constructor(private store: Store<AppState>){}

    attemptToAddProductToCart$ = createEffect(() => 
        this.actions$.pipe(
            ofType(CartActions.attemptToAddProductToCart),
            //This is the latest state we want 
            withLatestFrom(this.store.pipe(select(seletctCartProducts))),
            switchMap(([action, cartProducts]) => {
                const productExists = cartProducts.some(product => product.id === action.product.id);

                if(productExists){
                    return of(CartActions.incrementProductCount({productId: action.product.id}));
                } else {
                    return of(CartActions.addToCart({product: action.product}))
                }
            })
           
        )
    )

    //TODO: Add effect when attempting to decrement when item quantity is equal to zero we will dispatch the remove item action 

    // const object = array.find(obj => obj.id === 3);

    attempToDecrementProductCount$ = createEffect(() => 
            this.actions$.pipe(
                ofType(CartActions.attemptToDecrementProductCount),
                withLatestFrom(this.store.pipe(select(seletctCartProducts))),
                switchMap(([action, cartProducts]) => {
                    //This where we get the current count boolean'
                    
                    const obj = cartProducts.find(product => product.id === action.productId);

                    if(obj && obj.quantity === 1){
                        return of(CartActions.removeItem({productId: action.productId}));
                    } else if (obj) {
                        return of(CartActions.decrementProductCount({productId: action.productId}))
                    } else {
                        return of(CartActions.noAction)
                    }

                })


            )
    )

}