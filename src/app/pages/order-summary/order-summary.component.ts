import { ChangeDetectionStrategy, Component, OnInit, Signal, inject } from '@angular/core';
import { AppState } from '../../ngrx/state/app.state';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import * as CartSelector from '../../ngrx/selectors/cart.selector';
import { Observable } from 'rxjs';
import { IProduct } from '../../models/product.interface';
import { FormStore } from '../../signals/form.signal';
@Component({
  selector: 'app-order-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderSummaryComponent implements OnInit{

  //Once users has submitted order form we need to navigate to the order summary page to confirm order
  private formStore = inject(FormStore);

  cartItems$: Observable<IProduct[]> = this.store.select(CartSelector.seletctCartProducts);
  totalPrice$: Observable<number> =  this.store.select(CartSelector.selectTotalPrice);


  //Shiping info
  userName:  string;
  address: string;
  cardNumber: string;

  constructor(private store: Store<AppState>){}

  ngOnInit(): void {

    //   console.log(this.cartItems$.forEach((obj) => console.log(obj)));
  //   console.log(this.totalPrice$);
  this.userName = this.formStore.form().name
  this.address = this.formStore.form().address
  this.cardNumber = this.formStore.form().cardNumber
  }
  

}

