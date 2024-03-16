import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ICounterState } from '../../ngrx/reducers/counter.reducer';
import { Observable } from 'rxjs';
import * as CounterActions from '../../ngrx/actions/counter.action'
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {

  count$: Observable<number>;

  //
  constructor(private store: Store<{ count: number}>){

    this.count$ = this.store.select('count');
    
  }


  dispatchIncrement(): void {
    this.store.dispatch(CounterActions.increment());
    console.log("Count: "+ this.count$)


  } 

  dispatchDecrement(): void {
    this.store.dispatch(CounterActions.decrement());
  } 

  dispatchReset(): void {

    this.store.dispatch(CounterActions.reset());
    
  } 

}
