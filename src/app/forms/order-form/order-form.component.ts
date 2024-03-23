import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppState } from '../../ngrx/state/app.state';

import { State, Store } from '@ngrx/store';
import { Route, Router } from '@angular/router';
import { IOrderForm } from '../../models/order-form.interface';

@Component({
  selector: 'app-order-form',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './order-form.component.html',
  styleUrl: './order-form.component.scss'
})
export class OrderFormComponent implements OnInit{


  orderForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private store: Store<AppState>, private router: Router){}

  
  
  
  ngOnInit(): void {
    
    //Create Validators
    this.orderForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required]],
      city: ['', Validators.required]
    })



  }


  onSubmit(){
    console.log("info: order form submit hit")
    if(this.orderForm.valid){
      console.log("form valid")
      const completedForm: IOrderForm =  this.orderForm.value;
  
    
    }
  }


}