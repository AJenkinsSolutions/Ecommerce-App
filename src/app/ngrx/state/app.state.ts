import { CounterState } from "../reducers/counter.reducer"
import { ProductListState } from "../reducers/product-list.reducer"



export interface AppState {

    counter: CounterState

    productList: ProductListState

}