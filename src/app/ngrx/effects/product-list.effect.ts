import { ProductApiService } from "../../shared/service/product-api.service";
import { inject } from "@angular/core";
import { Actions,createEffect, ofType } from "@ngrx/effects";
import * as ProductListActions from '../actions/product-list.actions'
import { catchError, map, of, switchMap } from "rxjs";



export class ProductListEffect {

     private apiService = inject(ProductApiService);
     
     //Helps loads the ap
     actions$ = inject(Actions)

     //Rxjs syntax
    //Using switchMaps to intercept the API
    //we can trigger the success action or failure depending on the result of 

    loadProducts$ = createEffect(()=>
        this.actions$.pipe(
            ofType(ProductListActions.loadProductList),
            switchMap(()=>
            this.apiService.getProducts().pipe(
                map((res) => ProductListActions.loadProductListSuccess({products: res})),
                catchError((error: {message: string}) => of(ProductListActions.loadProductListFailure({errorMessage: 'Failed to load Products: ' + error, }))
                
                )
                
                ))
            ))

}