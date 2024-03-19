import { inject } from "@angular/core";
import { ProductApiService } from "../../shared/service/product-api.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as ProductDetailsActions from '../actions/product-details.action';
import { map, switchMap, of, catchError } from "rxjs";

export class ProductDetailsEffect {


    private apiService = inject(ProductApiService);


    actions$ = inject(Actions)


    loadProducts$ = createEffect(()=>
    this.actions$.pipe(
        ofType(ProductDetailsActions.loadProduct),
        switchMap(action =>
        this.apiService.getProductById(action.productId).pipe(
            map(res => ProductDetailsActions.loadProductSuccess({product: res})),
            catchError((error: {message: string}) => of(ProductDetailsActions.loadProductFailure({errorMessage: 'Failed to Load Product'})))
        )
        )))

}