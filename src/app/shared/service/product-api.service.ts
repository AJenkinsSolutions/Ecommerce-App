import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../../models/product.interface';
import { Observable, map, of } from 'rxjs';
import * as ProductDataJson from '../../data/products.json';


@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  baseUrl: string = 'https://fakestoreapi.com/';
  productsEndpoint: string = 'products';

  constructor(private http: HttpClient) {}

  
  // getProducts(){

  //    //A Dynamic way of adding a property to the api response 
  //    return this.http.get<IProduct[]>(this.baseUrl + this.productsEndpoint)
  //    .pipe(map((products) => this.addDefaultQuantityToProductsArray(products))
  //    )

  // }

  // getProductById(productId: string){

  //   return this.http.get<IProduct>(this.baseUrl + this.productsEndpoint + '/' + productId)
  //   .pipe(map((product) => this.addDefaultQuantityToItem(product))
  //   )
    

  // }




  // ! Using Json from data folder to mock api 

  getProducts(): Observable<IProduct[]>{
    //A Dynamic way of adding a property to the api response 
    //Import oour mock datra 
    const products: IProduct[] = (ProductDataJson as any).default;
    // console.log(products)

    return of(products).pipe(map((products) => this.addDefaultQuantityToProductsArray(products)))

 }

 getProductById(productId: string){

  const products: IProduct[] = (ProductDataJson as any).default;
  // console.log(products)

  // Find the product by its id in json
  const product = products.find(product => product.id === parseInt(productId));


  return of(product)
  .pipe(map((product) => this.addDefaultQuantityToItem(product))
  )
  

}






  
//Helpers
  addDefaultQuantityToProductsArray(products: IProduct[]): IProduct[]{
    return products.map((product) => {
      return {...product, quantity: 1}
    })
  }

  addDefaultQuantityToItem(product: IProduct): IProduct{
    return {...product, quantity: 1}
  }

}
