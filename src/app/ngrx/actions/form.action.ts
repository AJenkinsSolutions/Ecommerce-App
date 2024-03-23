import { createAction, props } from "@ngrx/store";
import { IOrderForm } from "../../models/order-form.interface";


export const submitForm = createAction(
    // 1:This action is dispatched directly from the form component when the form is submitted
    //  but before any asynchronous operations, like API calls, are initiated.
    // 2: Its primary purpose is to update the state with the new form data, 
    // making it available for other parts of the application (e.g., an Order Summary component).
    '[order Form Component] submitFor53m', props<{formData: IOrderForm}>() 
);


// Submitting Form Data to an API:

// This action is typically dispatched from an effect or directly from a component when you're ready to send the form data to a backend service.
// It involves asynchronous operations and side effects, making it a candidate for handling with NGRX effects.

 