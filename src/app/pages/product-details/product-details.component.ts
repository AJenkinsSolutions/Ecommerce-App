import { Component, OnDestroy } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppState } from '../../ngrx/state/app.state';
import { Store } from '@ngrx/store';

import * as ProductDetailsActions from '../../ngrx/actions/product-details.action';
import * as ProductDetailsSelector from '../../ngrx/selectors/product-details.selector';
import { IProduct } from '../../models/product.interface';
import { Observable } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [AsyncPipe, CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit, OnDestroy{
  
  product$! : Observable<IProduct | null>; 
  error!: Observable<string | null>;

  constructor(private activeRoute: ActivatedRoute, private store: Store<AppState>){

     this.product$ = this.store.select(ProductDetailsSelector.selectProductDetails)
     this.error = this.store.select(ProductDetailsSelector.selectProductDetailsError)
    
    }
 


  ngOnInit(): void {
     
    const id = this.activeRoute.snapshot.paramMap.get('productId');

    if(id){

      console.log('info: Product Id in Product Details Page: ( ' + id+ ' )');
      this.store.dispatch(ProductDetailsActions.loadProduct({ productId: id }));
      
    }
   
  }

  ngOnDestroy(): void {

    this.store.dispatch(ProductDetailsActions.resetProduct())
    
  }





}
