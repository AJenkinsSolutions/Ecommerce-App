import { Component, Input, Output, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
import { IProduct } from '../../../models/product.interface';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list-card.component.html',
  styleUrl: './product-list-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListCardComponent {


// !! Dumb Component !!! should only be responsible for displaying and dispatching actions to the parent component

// <!-- Dispatched Action from child component - handleAdd() -->

  // Item Object Inputted from Parent component
  @Input() product!: IProduct;

  //Itme Object we will Outpout TO parent component
  @Output() emitItemObject  = new EventEmitter();

  

  constructor(private router: Router){}


  //We need to EMIT the item to the partComponent using @Output
  addCart(product: IProduct){ 
    
    this.emitItemObject.emit(product);
  }


  //TODO: Research if navigating from the dumb component is best practise
  navigateToProduct(productId: number):void {

    this.router.navigate(['/products/'+ productId]);

  }


}

