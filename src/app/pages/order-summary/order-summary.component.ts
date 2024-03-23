import { Component, OnInit } from '@angular/core';
import { AppState } from '../../ngrx/state/app.state';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.scss'
})
export class OrderSummaryComponent implements OnInit{



  constructor(private store: Store<AppState>){}

  ngOnInit(): void {

  }
  

}
