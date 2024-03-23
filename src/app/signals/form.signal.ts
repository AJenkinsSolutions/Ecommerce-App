import { Injectable, signal } from "@angular/core";
import { patchState, signalStore, withMethods, withState} from "@ngrx/signals";
import { IShippingInform } from "../models/order-summary-interface";

export class FormSignal {
 
    name = signal('');
}

interface UserState {
    form: IShippingInform;
  }
  
  const initialState: UserState = {
    form: null
  };
  
  
  
  export const UserStore = signalStore(
    {providedIn: 'root'},

    withState(initialState),
    withMethods((store) => ({
      updateUser(form: IShippingInform){
        patchState(store, {form});
      }

    }))
  );
  
  