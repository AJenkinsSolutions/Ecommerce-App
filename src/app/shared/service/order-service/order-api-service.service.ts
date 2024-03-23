import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IOrderSummary } from '../../../models/order-summary-interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderApiService {

  constructor(private http: HttpClient) { }



getOrdersById(orderId: string){

}


  createOrder(orderSummary: IOrderSummary): Observable<IOrderSummary>{

    //take the obj
    //presist it POST




    return of(orderSummary)

  }

}
