import { Component, Input,ChangeDetectionStrategy } from '@angular/core';
import { IProduct } from '../../../models/product.interface';
import { CommonModule } from '@angular/common';

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



@Input() item!: IProduct;

  constructor(){}


}
