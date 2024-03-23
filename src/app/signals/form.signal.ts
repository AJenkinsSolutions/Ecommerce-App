import { Injectable, signal } from "@angular/core";
import { signalStore, withState} from "@ngrx/signals";

@Injectable({
    providedIn: 'root'
})

export class FormSignal {
 
    name = signal('');


}

interface UserState {
    name: string;
    age: number;
  }
  
  const initialState: UserState = {
    name: 'alex',
    age: 0,
  };
  
  
  
  export const UserStore = signalStore(
    withState(initialState)
  );
  
  