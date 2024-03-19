import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit{
  
  

  constructor(private activeRoute: ActivatedRoute){

     

      
    }


  ngOnInit(): void {
    
    const productId = this.activeRoute.snapshot.paramMap.get('productId');

    console.log('info: Product Id in Product Details Page: ( ' + productId+ ' )');

    //TODO: Load Product Details from service / effects
    

   
  }





}
