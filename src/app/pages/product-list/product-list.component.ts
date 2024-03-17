import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../../models/product.interface';
import { ProductApiService } from '../../shared/service/product-api.service';
import { AppState } from '../../ngrx/state/app.state';
import { Store } from '@ngrx/store';

import * as ProductListAction from '../../ngrx/actions/product-list.actions';
import * as ProductListSelector from '../../ngrx/selectors/product-list.selector';
import { Console } from 'console';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {


  //Inject service to get the list of product

  //Init product array

  api =  inject(ProductApiService)

  products$! : Observable<IProduct[]>;
  error!: Observable<string | null>
  
  constructor(private store: Store<AppState>){

    this.store.dispatch(ProductListAction.loadProductList());
    this.products$ = this.store.select(ProductListSelector.selectAllProducts)
    this.error = this.store.select(ProductListSelector.selectAllProductsListError)
    
    console.log("debug"+this.products$.pipe().forEach(obj => console.log(obj)))

   

  }








}
