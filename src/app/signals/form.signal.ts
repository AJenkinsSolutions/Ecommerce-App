import { Injectable, signal } from "@angular/core";
import { patchState, signalStore, withMethods, withState} from "@ngrx/signals";
import { IShippingInform } from "../models/order-summary-interface";

export class FormSignal {
 
    name = signal('');
}

interface UserState {
    name: string;
    age: number;
    form: IShippingInform;
  }
  
  const initialState: UserState = {
    name: 'alex',
    age: 0,
    form: null
  };
  
  
  
  export const UserStore = signalStore(
    {providedIn: 'root'},

    withState(initialState),
    withMethods((store) => ({
      updateUser(name: string, age: number, form: IShippingInform){
        patchState(store, {name, age, form});
      }

    }))
  );
  
  