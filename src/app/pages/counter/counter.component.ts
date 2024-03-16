import { Component } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { ICounterState } from '../../ngrx/reducers/counter.reducer';
import { Observable } from 'rxjs';
import * as CounterActions from '../../ngrx/actions/counter.action'
import * as CounterSelector from '../../ngrx/selectors/counter.selector';
import { AppState } from '../../ngrx/state/app.state';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {

  constructor(private store: Store<AppState>){
    //Now we can initalize the count$ from the store
  }

  count$ = this.store.select(CounterSelector.selectCount);
  double$= this.store.select(CounterSelector.selectDouble);


  //
 


  dispatchIncrement(): void {
    console.log("dispatch increment")
    this.store.dispatch(CounterActions.increment());
  } 

  dispatchDecrement(): void {
    console.log("dispatch decrement")
    this.store.dispatch(CounterActions.decrement());
  } 

  dispatchReset(): void {
    console.log("dispatch reset")
    this.store.dispatch(CounterActions.reset());
    
  } 

}
