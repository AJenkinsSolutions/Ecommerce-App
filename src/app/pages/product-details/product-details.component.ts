import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppState } from '../../ngrx/state/app.state';
import { Store } from '@ngrx/store';

import * as ProductDetailsActions from '../../ngrx/actions/product-details.action';
import * as ProductDetailsSelector from '../../ngrx/selectors/product-details.selector';
import { IProduct } from '../../models/product.interface';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit{
  
  

  constructor(private activeRoute: ActivatedRoute, private store: Store<AppState>){

     

      
    }


  ngOnInit(): void {
     //TODO: figure where the best place for this logic is 
    const id = this.activeRoute.snapshot.paramMap.get('productId');

    if(id){

      console.log('info: Product Id in Product Details Page: ( ' + id+ ' )');

      this.store.dispatch(ProductDetailsActions.loadProduct({ productId: id }));

      const product$ = this.store.select(ProductDetailsSelector.selectProductDetails)
      const error$ = this.store.select(ProductDetailsSelector.selectProductDetailsError)

      console.log("debug: Product " + product$.pipe().forEach(obj => console.log(obj)))
      console.log("debug: error " + error$.pipe().forEach(obj => console.log(obj)))
    }

   
    

   


   
  }





}
