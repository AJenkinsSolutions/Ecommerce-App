import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../../models/product.interface';
import { ProductApiService } from '../../shared/service/product-api.service';
import { AppState } from '../../ngrx/state/app.state';
import { Store } from '@ngrx/store';

import * as ProductListAction from '../../ngrx/actions/product-list.actions';
import * as ProductListSelector from '../../ngrx/selectors/product-list.selector';
import { Console } from 'console';
import { AsyncPipe } from '@angular/common';
import { ProductListCardComponent } from '../../shared/components/product-list-card/product-list-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [AsyncPipe, ProductListCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {

  products$! : Observable<IProduct[]>;
  error!: Observable<string | null>
  
  constructor(private store: Store<AppState>){

    //This line dispatcheds the LoadProduct list Action which hits the Products effect ts which hits the Api Service Object
    //Which will either hit the success effect or the failure effect depending on the api call
    //Finally updating the PorudctList Store / State
    this.store.dispatch(ProductListAction.loadProductList());
    
    //Select the Product List slice
    this.products$ = this.store.select(ProductListSelector.selectAllProducts)
    
    //Select the Error Slice
    this.error = this.store.select(ProductListSelector.selectAllProductsListError)
    
    console.log("debug: ProductsList "+this.products$.pipe().forEach(obj => console.log(obj)))
    console.log("debug ProductList error: "+ this.error)

   
  }


  additemToCartDispatcher(item: IProduct){

    console.log("Add Item to Cart Dispather in Product List Component")
    //Add cart store

  }








}
