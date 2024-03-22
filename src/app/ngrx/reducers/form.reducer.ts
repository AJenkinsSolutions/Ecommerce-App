import { IShippingForm } from "../../models/shipping-form.interface";

export interface FormDetailsState {

    form: IShippingForm;
    loading: boolean;
    error: string | null;
}


