import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { OrderApiService } from "../../shared/service/order-service/order-api-service.service";
import * as OrderActions from '../actions/order.action'
import { map, switchMap, of, catchError } from "rxjs";
import { error } from "console";

export class OrderSummaryEffects {
    

ordersUrl = '../../data/orders.json'

private apiService = inject(OrderApiService)


actions$ = inject(Actions)

createOrder$ = createEffect(() => 
this.actions$.pipe(
    ofType(OrderActions.createOrder),
    switchMap(action => 
    this.apiService.createOrder(action.orderSummary).pipe(
        map(res => OrderActions.createOrderSuccess({orderSummary: res})),
        catchError((error: {message: string}) => of(OrderActions.createOrderFailure({errorMessage: 'Failed to create Order'})))
    )
        )

)
)

}