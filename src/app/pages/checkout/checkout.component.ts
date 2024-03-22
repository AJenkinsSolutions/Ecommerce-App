import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatSelectModule} from '@angular/material/select'
import { MatButtonModule } from '@angular/material/button';
import { ShippingFormComponent } from '../../forms/shipping-form/shipping-form.component';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [ShippingFormComponent ,MatCardModule, MatFormFieldModule, MatSelectModule, MatButtonModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {



  onSubmit(){

  }

}
