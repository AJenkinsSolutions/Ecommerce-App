import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
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
  providers: [UserStore],
  templateUrl: './order-form.component.html',
  styleUrl: './order-form.component.scss'
})
export class OrderFormComponent implements OnInit{

  // userStore = inject(UserStore);

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

      const completedForm: IShippingInform =  this.orderFormGroup.value;


      console.log(completedForm)

    }
  }


}




