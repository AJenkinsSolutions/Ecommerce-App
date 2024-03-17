import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../../models/product.interface';
import { ProductApiService } from '../../shared/service/product-api.service';

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

  
  
  constructor(){

   

  }








}
