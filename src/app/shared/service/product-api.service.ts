import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../../models/product.interface';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  baseUrl: string = 'https://fakestoreapi.com/';
  productsEndpoint: string = 'products';

  constructor(private http: HttpClient) {}

  
  getProducts(){

     //A Dynamic way of adding a property to the api response 
     return this.http.get<IProduct[]>(this.baseUrl + this.productsEndpoint)
     .pipe(map((products) => this.addDefaultQuantityToProductsArray(products))
     )

  }


  getProductById(productId: string){

    return this.http.get<IProduct>(this.baseUrl + this.productsEndpoint + '/' + productId)
    .pipe(map((product) => this.addDefaultQuantityToItem(product))
    )
    

  }


  addDefaultQuantityToProductsArray(products: IProduct[]): IProduct[]{
    return products.map((product) => {
      return {...product, quantity: 1}
    })
  }

  addDefaultQuantityToItem(product: IProduct): IProduct{
    return {...product, quantity: 1}
  }

}
