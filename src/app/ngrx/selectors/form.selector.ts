import { createFeatureSelector, createSelector } from "@ngrx/store";
import { FormState } from "../reducers/form.reducer";




export const selectFormDataFeature = createFeatureSelector<FormState>('form');

export const selectFormData = createSelector(
    selectFormDataFeature,
    (state: FormState) => state.formData
)

// export const selectFormData = createSelector(
//     selectFormDataFeature,
//     (state: FormState) => state.formData
// )