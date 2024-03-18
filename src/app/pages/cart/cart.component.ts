import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../../models/product.interface';
import { seletctCartProducts, selectTotalPrice } from '../../ngrx/selectors/cart.selector';
import * as CartActions from '../../ngrx/actions/cart.action';
import { AppState } from '../../ngrx/state/app.state';
import { Store } from '@ngrx/store';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [AsyncPipe, CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent {



  //Now we can use this data in the cart HTML
  cartItems$: Observable<IProduct[]> = this.store.select(seletctCartProducts)
  totalPrice$ = this.store.select(selectTotalPrice);


  constructor(private store: Store<AppState>, private router: Router){}


  remove(productId: number){
    console.log("info : Remove item dispacther")
    this.store.dispatch(CartActions.removeItem({productId}));
  }

  incrementItemQuantity(productId : number){

    console.log("info : incrementItemQuantity dispacther" );
    this.store.dispatch(CartActions.incrementProductCount({productId}))
  }

  decrementItemQuantity(productId : number){
    console.log("info : decrementItemQuantity dispacther in cart Component" );

    //TODO: If item qauntity is less than 1 dispatch remove action
    
    this.store.dispatch(CartActions.decrementProductCount({productId}))

  }

  //TODO: DRY 
  //REFACTOR REPATED CODE
  navigateToProducts(){

    this.router.navigate(['/products']);
    console.log("Navigate to products");

  }

  //TODO: DRY 
  //REFACTPOR REPEATED CODE
  navigateToCheckout(){

    this.router.navigate(['/checkout']);
    console.log("Navigate to checkout");

  }




}
