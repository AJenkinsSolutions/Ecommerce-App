import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-shipping-form',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './shipping-form.component.html',
  styleUrl: './shipping-form.component.scss'
})
export class ShippingFormComponent implements OnInit{


  shippingForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder){}

  
  
  
  ngOnInit(): void {
    
    //Create Validators
    this.shippingForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern(("^\\([0-9]{3}\\) {1}[0-9]{3}-{1}[\\d]{4}$"))]],
      city: ['', Validators.required]
    })



  }


  onSubmit(){
    console.log("info: Shipping form submit hit")
    if(this.shippingForm.valid){
      console.log("form valid")

      const completedForm =  this.shippingForm.getRawValue();
      console.log("form"+ completedForm)
    }
  }





}
