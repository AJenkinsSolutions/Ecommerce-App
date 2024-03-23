import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, ChangeDetectionStrategy} from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppState } from '../../ngrx/state/app.state';

import { State, Store } from '@ngrx/store';
import { Route, Router } from '@angular/router';


import { signalStore, withState } from '@ngrx/signals';
import { FormSignal, UserStore } from '../../signals/form.signal';
import { IShippingInform } from '../../models/order-summary-interface';


@Component({
  selector: 'app-order-form',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule,],
  templateUrl: './order-form.component.html',
  styleUrl: './order-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
  
})
export class OrderFormComponent implements OnInit{

  
  userStore = inject(UserStore);

  orderFormGroup: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private store: Store<AppState>, private router: Router){

    // console.log(this.userStore.name());
    // console.log(this.userStore.age());
    
    
  }

  
  
  
  ngOnInit(): void {
    
    //Create Validators for our order form
    this.orderFormGroup = this.formBuilder.group({
      
      name: ['', Validators.required],
      address: ['', Validators.required],
      cardNumber: ['', Validators.required]
    })



  }


  onSubmit(){
    console.log("info: Enterd into Order Form Submit")

    if(this.orderFormGroup.valid){
      console.log("info: Form is valid")

      //Map to Interface
      const completedForm: IShippingInform =  this.orderFormGroup.value;
      console.log(completedForm)
      
      //Update Signal Store
      this.userStore.updateUser(completedForm)
      

      //Navigate
      this.navigateToOrderSummary()

    
    }
  }


  navigateToOrderSummary(){

    this.router.navigate(['/order']);
  }


}




