import { State, createReducer, on } from "@ngrx/store";
import { IOrderForm } from "../../models/order-form.interface";
import * as  FormActions from '../actions/form.action'

export interface FormState {

    formData: IOrderForm | null;
    
}

export const initialFormState: FormState = {
    formData: null
}


export const formReducer = createReducer(
    initialFormState,
    on(FormActions.submitForm, (currentState, {formData}) => {

        const newForm = formData
       return {
        ...currentState,
        formData: newForm
       }
    }
    )
)





