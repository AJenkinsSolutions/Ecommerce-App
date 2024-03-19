import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../../models/product.interface';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {
  http = inject(HttpClient);

  baseUrl: string = 'https://fakestoreapi.com/';
  productsEndpoint: string = 'products';

 // products$: Observable<IProduct[]>;


  constructor() {

    //this.products$ = this.getProducts();

    // console.log("Info: Products array" + this.products$.forEach(obj => console.log(obj)) );
    
   }

  
  getProducts(){

     //A Dynamic way of adding a property to the api response 
     return this.http.get<IProduct[]>(this.baseUrl + this.productsEndpoint)
     .pipe(
       map((products) =>{
         return products.map((product) => {
 
           return {...product, quantity: 1}
 
         })
       })
     )

  }


  getProductById(productId: string){

    return this.http.get<IProduct>(this.baseUrl + this.productsEndpoint + '/' + productId)
    

  }

}
