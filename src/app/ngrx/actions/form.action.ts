import { createAction, props } from "@ngrx/store";
import { IShippingForm } from "../../models/shipping-form.interface";


export const submitForm = createAction(
    //Is
    '[Shipping Form Component] submitForm', props<{form: IShippingForm}> 
);

 