import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as CartActions from '../actions/cart.action';
import { switchMap, withLatestFrom, of } from 'rxjs';
import { select, Store } from "@ngrx/store";
import { AppState } from "../state/app.state.js";
import { seletctCartProducts } from "../selectors/cart.selector.js";

@Injectable()
export class CartEffect {


    actions$ = inject(Actions)

    constructor(private store: Store<AppState>){}

    attemptToAddProductToCart$ = createEffect(() => 
        this.actions$.pipe(
            ofType(CartActions.attemptToAddProductToCart),
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

}